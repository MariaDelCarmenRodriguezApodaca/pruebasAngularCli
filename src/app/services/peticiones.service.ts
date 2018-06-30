import { Injectable } from '@angular/core';
//modulos de http
import { Http, Response ,Headers } from '@angular/http';
//libreria para mapear respuesta http
import 'rxjs/add/operator/map';
//objeto observable que nos permite trabajar con la respuesta
import { Observable } from 'rxjs';


@Injectable()
export class PeticionesService{


	getPrueba(){
		return 'hola mundo desde el servicio';
	}
}