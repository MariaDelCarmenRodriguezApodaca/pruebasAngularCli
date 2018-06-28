//importamos lo paquetes o modulos de pipes 
import { Pipe, PipeTransform } from '@angular/core';

//para ponerle nombre a la pipe usamos el decorador @pipe
@Pipe({ name:'conversor' })

//letenemos qu eimplementar PipeTRansform para tener por defecto un metodo que tienen que tener todas las pipes llamado transform
export class ConversorPipe implements PipeTransform{
	transform(value, por):string{
		//las pipes siempre reciven los valores en string por eso se convierten en numero
		let value_one= parseInt(value);
		let value_two= parseInt(por);
		let result = `La multiplicacion ${value_one} x ${value_two} = ${value_one*value_two} `;
		return result;
	}
}