import  swal  from 'sweetalert2';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Usaurio } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {


  usuario: Usaurio;
  constructor(private router: Router,private usuarioservice:UsuarioService ) {

    this.usuario = new Usaurio()
   }

  ngOnInit(): void { 
  }
  

  dataTypeUser (value : number){

    if (value == 1) this.usuario.typeUser = 1
 
    else if (value == 2) this.usuario.typeUser = 2

    else if (value == 3) this.usuario.typeUser = 3
  
  }

  saveUser() {

    this.usuario.enabled = true;

    this.usuarioservice.saveUsuario(this.usuario).subscribe(
          response  => {
            
            console.log(response);
            swal.fire('Nuevo Usuario',`Hola ${this.usuario.username} te damos la bienvenida a BarberApp` , 'success')
          }
          
        );

  }

















  // // variables para mostrar campos en el dom
  // registrerBarbershop = false;
  // registrerBarber = false;
  // registrerCustomer = false;
  

  // // General Data
  // id:number;
  // email:string;
  // password: string;
  // nickname: string
  // city: string;
  // cellphone: string;
  // typeUser: Number;
  // photo:string;

  // // Barbershop Data
  // locationBarbershop:string;
  // descriptionBarbershop:string
  // idCatalogue:Number;

  // // Barber Data
  // ageBarber:Date;
  // descriptionBarber:string

  // // Customer Data
  // ageCustomer:Date;


  // //Objetos 
  // newBarbershop: Barbershop;
  // newCustomer: Customer;
  // newBarber:Barber;




  // ////////////////////////////////////////////////////////////////////
  // saveBarbershop(newBarbershop: Barbershop){

  //   newBarbershop = new Barbershop(this.id, this.email, this.password, this.nickname, this.city, this.cellphone, this.typeUser, this.photo, this.descriptionBarbershop, this.locationBarbershop, 0);
  //   this.barbershopService.saveBarbeshop(newBarbershop).subscribe(
  //     response  => {
        
  //       console.log(response);
  //       swal.fire('Nuevo Barberias', `Hola ${this.nickname} te damos la bienvenida a BarberApp` , 'success')
  //     }
      
  //   );

    
  // }

  // ////////////////////////////////////////////////////////////////////
  // saveBarber(newBarber:Barber){

  //   newBarber = new Barber(this.id, this.email, this.password, this.nickname, this.city, this.cellphone, this.typeUser, this.photo, this.ageBarber, this.descriptionBarber, 0)
  //   this.barberService.saveBarber(newBarber).subscribe(
  //     response =>{

  //       console.log(response);
        
  //       swal.fire('Nuevo Barbero', `Hola ${this.nickname} te damos la bienvenida a BarberApp` , 'success')
  //       this.router.navigate(['/login'])
        
  //     }
  //   );
  // }


  // ////////////////////////////////////////////////////////////////////
  // saveCustomer(newCustomer: Customer){

  //   newCustomer = new Customer(this.id, this.email, this.password, this.nickname, this.city, this.cellphone, this.typeUser, this.photo, this.ageCustomer);
  //   this.customerService.saveCustomer(newCustomer).subscribe(

  //     response =>{
  //       console.log(response);
  //       swal.fire('Nuevo Cliente', `Hola ${this.nickname} te damos la bienvenida a BarberApp` , 'success')
  //       this.router.navigate(['/login'])

  //     }

  //   );
  // }

}