import { Component } from '@angular/core';

import{Pacientes} from './personas/pacientes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title:string="Crud desde angular";
  
  //Estos pacientes ya estan en la pantalla FIJOS
  arrayPacientes:Pacientes[]=[
    {name:"alavaro,eduardo ", desde:930 ,  hasta:1030},
    {name:"acuña,juliana  ",  desde:1130 , hasta:1230},
    {name:"arenales,ingrid ", desde:1230 , hasta:1330} 
];

    //creamos un objeto de tipo pacientes
    seleccionPacientes:Pacientes= new Pacientes();

  guardar(){ 
        // le agrego al  array , lo que le pase el usuario por teclado 
      this.arrayPacientes.push(this.seleccionPacientes);
      //esto limpia el formulario 
      this.seleccionPacientes= new Pacientes();
  }

  //elimina un elemento del array
  eliminar(indice){
     this.arrayPacientes.splice(indice,1);
  }
    
}// fin de la clase

