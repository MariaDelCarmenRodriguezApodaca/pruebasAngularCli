import { Component } from '@angular/core';
import { log } from 'util';

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
        this.holaMundo(this.nombre);

        //variables y alcance
        var uno = 1;
        var dos = 2;

        if(uno == 1){
            let uno = 'uno'; //existe dentro del bloque que la contiene
            var dos = 88;
            console.log('dentro del if: ',uno);
        };
        
        console.log('Fuera del if:',uno);
        
    }

    holaMundo(nombre){
        this.nombre = "Maria";
        //alert('Hola Mundo '+nombre);
    }
}