import { Component } from '@angular/core';
//importamos el servicio ropa.service
import { RopaService } from '../services/ropa.service';

@Component({
	selector: 'home',
	templateUrl: 'home.component.html',
	providers:[RopaService]
})
export class HomeComponent{
	public titulo:string = 'Pagina Principal "home"';
	public listado_ropa:Array<string>;
	public prenda_a_guardar:string;
	public fecha;
	public nombre:string = "Maria Rodriguez";
	//utilizare el contructor para crear una propiedad en la cual se instancie el servicio
	constructor(
		private _ropaService:RopaService,
	){
		this.fecha = new Date(2018,6,28);
	}
	
	ngOnInit(){
		this.listado_ropa = this._ropaService.getRopa();
		console.log(this.listado_ropa);
	}

	public addPrenda(prenda){
		if(this.prenda_a_guardar){
			this._ropaService.addRopa(this.prenda_a_guardar);
		}
		this.prenda_a_guardar=null;
	}

	public eliminarPrenda(index:number){
		this._ropaService.deleteRopa(index);
	}
	
}