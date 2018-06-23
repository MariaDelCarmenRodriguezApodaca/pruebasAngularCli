export class Empleado{
//    public nombre:string;
//    public edad:number;

//    constructor(nombre:string = 'SinNombre', edad:number = 0){
//         this.nombre = nombre;
//         this.edad = edad;
//    } 
/** lo de arriba es equivalente a  */
constructor(
    public nombre:string,
    public edad:number,
    public cargo:string,
    public contratado:boolean
){}

}