import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalBarbershopComponent } from 'src/app/modals/modal-barbershop/modal-barbershop.component';
import { AuthServices } from 'src/app/models/AuthServices';
import { Barber } from 'src/app/models/Barber';
import { Barbershop } from 'src/app/models/barbershop';
import { Linkear } from 'src/app/models/linkear';
import { Usuario } from 'src/app/models/Usuario';
import { BarberService } from 'src/app/services/barber/barber.service';
import { BarbershopService } from 'src/app/services/barbershop/barbershop.service';
import { LinkearService } from 'src/app/services/linkear/linkear.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-all-barber',
  templateUrl: './list-all-barber.component.html',
  styleUrls: ['./list-all-barber.component.css']
})
export class ListAllBarberComponent implements OnInit {

  barbers:any=[];
  constructor(private BarberService:BarberService, private auhtService: AuthServices, private serviceBarbershop:BarbershopService,
  private modalService:NgbModal,private serviceLinkear:LinkearService, private snipper: NgxSpinnerService) { }



  usuario:Usuario;
  usuarioConsult:Usuario;
  barbershop:Barbershop;
  bonding:Linkear;
  barbero:Barber;
  listBindings: Linkear[];

  ngOnInit(): void {
    this.usuario=this.auhtService.usuario;
    this.loaderBarber();

    // this.changeButton()
  }

  loaderBarber():void{
    this.BarberService.listBarber().subscribe(
      data =>{
        this.barbers = data;
        console.log(this.barbers);
      }
    )
  }
   



  linkear(id_barber:Number){

    this.snipper.show()
    this.barbershop=new Barbershop();
    this.serviceBarbershop.getbarber(this.usuario.id).subscribe((response:any)=>{
      this.barbershop=response;
      setTimeout(() => {
        if(this.barbershop==null){
          this.abrirModal();
        }else{
          this.bonding= new Linkear();
          this.bonding.barbershop=this.barbershop
          this.bonding.acceptance=false;
          this.barbero=new Barber();
          this.BarberService.getbarber(id_barber).subscribe((response:any)=>{
            this.barbero=response;
            this.bonding.barber=this.barbero;
  
          })
        }
      }, 500);

      this.snipper.hide()
    })


    setTimeout(() => {

      this.serviceLinkear.saveLinkear(this.bonding).subscribe(response=>{
      })


      swal.fire("Hecho", "Solicitud enviada", "success")
      
    }, 500);


  }


  // changeButton():Number{


  //   this.serviceLinkear.listBindings().subscribe((response: any) =>{


  //     this.listBindings = response;

  //     console.log(this.listBindings);
      


  //   })

  //   return null;

  // }





  abrirModal(){
    this.modalService.open(ModalBarbershopComponent);
}

}