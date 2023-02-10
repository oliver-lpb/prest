import { Component } from '@angular/core';
import { userModel } from 'src/app/models/user.model';
import { dataService } from 'src/app/services/dataService.services';

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.component.html',
  styleUrls: ['./vendedores.component.css']
})
export class VendedoresComponent {

  users:userModel[]=[];
  displayedColumns: string[] = ['Nombre', 'apellido', 'supervisor'];
  constructor(private dataServices:dataService){}

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos(){
    this.dataServices.obtener().subscribe(doc=>{
      this.users=[]
      doc.forEach((element:any)=>{
        this.users.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    })
  }





}
