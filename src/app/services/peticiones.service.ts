import { Injectable } from '@angular/core';
//modulos de http
import { Http, Response ,Headers } from '@angular/http';
//libreria para mapear respuesta http
import { map } from 'rxjs/operators'; 
//objeto observable que nos permite trabajar con la respuesta
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PeticionesService{

	public url:string;

	constructor(
		private _http:Http
	){
		this.url="https://jsonplaceholder.typicode.com/posts";
	}

	public getPrueba(){
		return 'hola mundo desde el servicio';
	}

	public getArticulos(){
		//peticion por get con http
		return this._http.get(this.url)
					.pipe(map(res => res.json())); //convertir la respuesta a json con el map
	}
}