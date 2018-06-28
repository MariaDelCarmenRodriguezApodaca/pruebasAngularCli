import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'contacto',
	templateUrl: 'contacto.component.html'
})
export class ContactoComponent{
	public titulo:string = 'Este es el componente de contacto';
	public parametro;

	constructor(
		private _route:ActivatedRoute,
		private _router:Router
	){}

	//para recojer los parametros de la url se hace en el ngOnInit
	ngOnInit(){
		//para recojer los parametros se usa el metodo forEach que esta contenido en _route
		this._route.params.forEach((params:Params)=>{ //con una funcion de callback definimos que hacer con los parametros
			this.parametro = params['page'];
			console.log(this.parametro);
		});
	}

	public redirigir(){
		//para redirigir con un parametro mandamos un arreglo con la url y el parametro:
		this._router.navigate(['/contacto','Ejemplo de parametro']);
	}

	public home(){
		this._router.navigate(['/home']);
	}

}