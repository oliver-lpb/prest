import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { dataService } from './services/dataService.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vendedores';
  form: FormGroup;

  constructor(private fb: FormBuilder, private dataServise:dataService){
    this.form = this.fb.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      supervisor: ["", Validators.required],
    });
  }

  envio(){
    if (this.form.invalid ) {
      console.log('sin llenar');
      return;
    }else{
      const Usario: any = {
        nombre: this.form.value.nombre, //quite el null
        apelldio: this.form.value.apellido,
        supervisor: this.form.value.supervisor,
        
      
      };
      
      this.dataServise.envio(Usario);
    }
  }



}


