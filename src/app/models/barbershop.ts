import { Barber } from 'src/app/models/Barber';
import { Catalogue } from './catalogue';
export class Barbershop{

  id:Number;
  email:string;
  password: string;
  nickname: string;
  city: string;
  cellphone: string;
  typeUser: Number;
  photo:string;
  description: string;
  location:string;
  qualification: Number;
  listBarbers:Barber[] = [];
  catalogue:Catalogue[] = [];


}