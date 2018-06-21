import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})

export class FrutaComponent{
    //dentro de la clase podemos tener propiedades
    public nombre_componente = 'Componente de frutas';
    public listado_frutas = 'manzana, pera, uva';
    public nombre:string = "Maria Rodriguez";
    public edad:number = 21;
    public mayorDeEdad:boolean = true;
    public trabajos:Array<string> = ['Carpintero','Albañil','Fontamero'];
    //any es un tipo de dato cualquiera por ejemplo
    public cualquiera:Array<any> = [12,true,'Fontamero'];
    //esta variable puede valer cualquier tipo de dato
    comodin:any = "cualquier cosa";

}