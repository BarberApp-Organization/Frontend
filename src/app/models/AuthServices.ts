import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Usuario } from "./Usuario";


@Injectable({
  providedIn: 'root'
})

export class AuthServices{
  


  private _usuario:Usuario;
  private _token:string;
  private _type : Number;


  constructor(private http:HttpClient, private router:Router){

    

  }

  public get usuario():Usuario{

    if(this._usuario != null) return this._usuario;

    else if (this._usuario == null && localStorage.getItem('usuario') != null){
      this._usuario = JSON.parse(localStorage.getItem('usuario')) as Usuario;

      return this._usuario
    }
    return new Usuario();
  }


  public get token():string{


    if(this._token != null) return this._token;

    else if (this._token == null && localStorage.getItem('token') != null){
      this._token = localStorage.getItem('token');

      return this._token
    }
    return null;
  }


  login(usaurio:Usuario):Observable<any>{

    const url = 'http://localhost:8080/oauth/token';

    const credenciales = btoa('barberappfront' + ':' + '12345');

    const httpHeadres = new HttpHeaders({'Content-Type' : 'application/x-www-form-urlencoded', 'Authorization' : 'Basic ' + credenciales})

    let params = new URLSearchParams();

    params.set('grant_type','password');
    params.set('username', usaurio.username);
    params.set('password', usaurio.password);
    console.log(params.toString());

    
    return this.http.post(url, params.toString(), {headers: httpHeadres})

  }


  saveUser(accessToken:string):void{

    let payload = this.dataToken(accessToken)

    this._usuario = new Usuario();
    this._usuario.id = payload.id;
    this._usuario.username = payload.email;
    this._usuario.typeUser = payload.typeUser;
    this._usuario.roles = payload.authorities;

    //(this.usuario.roles)
    
    localStorage.setItem('usuario', JSON.stringify(this._usuario))

  }


  saveToken(accessToken:string):void{

    this._token = accessToken;
    localStorage.setItem('token', accessToken)

  }


  saveTypeUser(tipo: Number){
  
    this._type = tipo
    
    localStorage.setItem('tipo', JSON.stringify(tipo))


  }

  public get typeUser():Number{


    if(this._type != null) return this._type;

    else if (this._token == null && localStorage.getItem('tipo') != null){

      let tipo2 =  localStorage.getItem('tipo');
      
      this._type = parseInt(tipo2)
      
      return this._type
    }
    return this._type;
  }


  dataToken(accessToken:string):any{

    if(accessToken != null){

      return JSON.parse(atob(accessToken.split(".")[1]))
    }
    return null;
  }


  isAuthenticated():boolean{

    let payload = this.dataToken(this.token)

    if (payload != null  && payload.user_name.length > 0){

      return true;
    }

    return false;

  }

  logout():void{

    this._token = null;
    this._usuario = null;
    localStorage.clear()    
    this.router.navigate([""])

  }

}