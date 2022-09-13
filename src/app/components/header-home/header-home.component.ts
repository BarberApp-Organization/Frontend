import { Usuario } from './../../models/Usuario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthServices } from 'src/app/models/AuthServices';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent implements OnInit {

  constructor(public authService: AuthServices, private route: ActivatedRoute, private router: Router) { }

  typeUser:string;

  ngOnInit(): void {
    
    this.usuario = this.authService.usuario;
  }

  usuario: Usuario;

  logout():void{

    this.authService.logout();
    Swal.fire('Login', `session cerrada`, 'success')
    
    
  }


}
