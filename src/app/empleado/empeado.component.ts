import { Component } from '@angular/core';
import { Empleado } from './empleado'; //impoto la clase empleado

@Component({
    selector : 'empleado',
    templateUrl : './empleado.component.html'
})

export class empleadoComponent{

    public titulo = 'componente empleados'
    public empleado:Empleado; //declaramos una variable de tipo empleadoi
    public trabajadores:Array<Empleado>;//ejemplo de array de tipo empleado
    public trabajadorExterno:boolean;

    constructor(){
        //inicializo un objeto de tipo empleado:
        this.empleado = new Empleado('Maria Rodriguez',21,'Programador',true);
        //para llenar el array hacemos varias instancias de empleado:
        this.trabajadores=[
            new Empleado('Pablo Rodriguez',18,'Maestro web',true),
            new Empleado('Julio Perez',21,'Diseñador',true),
            new Empleado('Andrea Rodriguez',21,'Director Gnral',true),
            new Empleado('Pancin Rodriguez',21,'Director Gnral',true),
        ];
        this.trabajadorExterno = false;
    }
    ngOnInit(){
        //muestro el objeto de tipo empleado
        console.log(this.empleado);
        console.log(this.trabajadores);

        //esto no esta en el curso: imprimire todos los trabajadores en el documento
        // var trabajadoresStr:string="";
        // for(let i=0; i < this.trabajadores.length; i++){
        //     trabajadoresStr += `<li>${ this.trabajadores[i].nombre }</li>`
        // };
        // let trabajadoresHTML = <HTMLElement>document.getElementById('trabajadores');
        // trabajadoresHTML.innerHTML=trabajadoresStr; 
    }

    carbiarExterno(valor){
        this.trabajadorExterno = valor;
    }
}