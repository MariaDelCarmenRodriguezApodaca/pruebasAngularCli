import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})

export class FrutaComponent{
    //dentro de la clase podemos tener propiedades
    public nombre_componente = 'Componente de frutas';
    public listado_frutas = 'manzana, pera, uva';
    public nombre:string;
    public edad:number;
    public mayorDeEdad:boolean;
    public trabajos:Array<string>;
    //any es un tipo de dato cualquiera por ejemplo
    public cualquiera:Array<any>;
    //esta variable puede valer cualquier tipo de dato
    comodin:any;

    //metodos de TypeScritp:
    //crear un constructor:
    constructor(){
        this.nombre = "Maria Rodriguez";
        this.edad = 21;
        this.mayorDeEdad = true;
        this.trabajos = ['Carpintero','Albañil','Fontamero'];
        this.cualquiera = [12,true,'Fontamero'];
        this.comodin = "cualquier cosa";

        
    }
    //es una buena practica para llamar metodos no llamarlos desde el constructor si no desde el ngOnInit este es el segundo metodo que se carga osea despues del constructor
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.holaMundo(this.nombre);
    }

    holaMundo(nombre){
        this.nombre = "Maria";
        alert('Hola Mundo '+nombre);
    }
}