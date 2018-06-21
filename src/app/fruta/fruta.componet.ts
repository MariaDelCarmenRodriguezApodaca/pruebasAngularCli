import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})
export class FrutaComponent{
    //dentro de la clase podemos tener propiedades
    public nombre_componente = 'Componente de frutas';
    public listado_frutas = 'manzana, pera, uva';
}