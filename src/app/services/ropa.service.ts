//se utilizara el decorador injectable para poder injectar nuestro servicio en las dependencias(componentes)

import { Injectable } from '@angular/core';

@Injectable() //no lleva ; por que no es funcion

export class RopaService{
	public nombre_prenda:string;
	public coleccion_ropa:Array<string>=[];

	constructor(){
		this.coleccion_ropa = ['Pantalones Blancos','Camiseta Roja'];
	}

	public prueba(nombrePrenda:string){
		return this.nombre_prenda = nombrePrenda;
	}

	public addRopa (nombre_prenda:string){
		this.coleccion_ropa.push(nombre_prenda);
		console.log(`Se agrego a coleccion_ropa: ${ nombre_prenda }`);
		return this.getRopa();
	}

	public getRopa():Array<string>{
		//console.log(this.coleccion_ropa);
		return this.coleccion_ropa;
	}

	public deleteRopa(index:number){
		//elimar elemento de un array
		this.coleccion_ropa.splice(index,1);
		return this.getRopa();
	}
}
