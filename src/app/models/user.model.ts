export class userModel {
    id?:number;
    nombre: string;
    apellido: string;
    supervisores: string;
    
    

    constructor(
        nombre:string,
        apellido:string,
        supervisores: string

       
        ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.supervisores = supervisores;
    }
    
    

}