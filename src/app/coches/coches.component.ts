// NOTA: los servicios se suelen nombrar con un por ejemplo _peticiones.

import { Component } from '@angular/core';
import { Coche } from './coche'; //modelo de coche
import { PeticionesService } from '../services/peticiones.service';

@Component({
	selector:'coches',
	templateUrl:'./coche.component.html',
	providers:[PeticionesService]
})

export class CochesComponent{
	public coche:Coche;
	public coches:Array<Coche>;

	constructor(
		private _peticionesService:PeticionesService
		){
		this.coche=new Coche('','',''); //se modificara cn el two way databindig
		this.coches = [
			new Coche('Bochito','200','rojo'),
			new Coche('Renault Clio','110','Azul'),
			new Coche('Seat Panda','120','Blanco')
		]
	}
	ngOnInit(){
		console.log(this._peticionesService.getPrueba());
	}
	public onSubmit(){
		this.coches.push(new Coche(this.coche.nombre,this.coche.caballaje,this.coche.color))
		console.log(this.coche);
		this.coche=new Coche('','',''); //para limpiar el objeto
	}

	public delete(id){
		console.log('Coche eliminado:'+this.coches[id]);
		this.coches.splice(id,1);
	}
}