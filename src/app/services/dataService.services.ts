import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { userModel } from '../models/user.model';
@Injectable({
    providedIn: 'root'
})


export class dataService {
    vendedores:userModel[]=[];

    envio(vendedores: userModel){}
    obtener(){}
}   