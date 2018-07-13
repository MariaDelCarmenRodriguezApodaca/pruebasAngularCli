import { Component } from '@angular/core';

@Component({
	selector:'plantillas',
	templateUrl:'./plantillas.component.html'
})

export class PlantillasComponent{

	public titulo:string;
	public administrador;
	constructor(){
		this.titulo = "Plantillas ngTemplate en angular";
		this.administrador = true;
	}
	public cambiar(){
		this.administrador = !this.administrador
	}
}