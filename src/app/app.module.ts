import { DetailsComponent } from './components/details/details.component';
import { HomeBarberComponent } from './components/home-barber/home-barber.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeBarbershopComponent } from './components/home-barbershop/home-barbershop.component';
import { FormsModule } from '@angular/forms';
import { HomeCustomerComponent } from './components/home-customer/home-customer.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { TableAppointmentComponent } from './components/table-appointment/table-appointment.component';
import { PromotionComponent } from './components/promotion/promotion.component';
import { ManagePromotionComponent } from './components/manage-promotion/manage-promotion.component';
import { BarberMeshShiftsComponent } from './components/barber-mesh-shifts/barber-mesh-shifts.component';
import { BarbershopMeshShiftsComponent } from './components/barbershop-mesh-shifts/barbershop-mesh-shifts.component';
import { HistoriesCutsComponent } from './components/histories-cuts/histories-cuts.component';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { SliderComponent } from './components/slider/slider.component';
import { HeaderHomeComponent } from './components/header-home/header-home.component';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { LoginComponent } from './components/login/login.component';
import {HttpClientModule} from '@angular/common/http';


//external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PromotionListComponent } from './components/promotion-list/promotion-list.component';
import { AuthGuard } from './guards/auth.guard';
import { ListBarberComponent } from './components/list-barber/list-barber.component';
import { ListCatalogueComponent } from './components/list-catalogue/list-catalogue.component';
import { LoadPublicityComponent } from './components/load-publicity/load-publicity.component';
import { ManageCatalogueComponent } from './components/manage-catalogue/manage-catalogue.component';
import { ListBarbershopComponent } from './components/list-barbershop/list-barbershop.component';
import { ToShowPublicationsComponent } from './components/to-show-publications/to-show-publications.component';
import { CardLoaderComponent } from './components/card-loader/card-loader.component';
import { UploadCutsComponent } from './components/upload-cuts/upload-cuts.component';
import { ProfileBarberComponent } from './components/profile-barber/profile-barber.component';
import { ProfileClientComponent } from './components/profile-client/profile-client.component';
import { ProfileBarbershopComponent } from './components/profile-barbershop/profile-barbershop.component';
import { CreateBarbershopComponent } from './components/create-barbershop/create-barbershop.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';




const appRoutes: Routes = [

  {path:'', component:HomeMainComponent},
  {path:'homebarbershop', component:HomeBarbershopComponent},
  {path:'homecustomer', component:HomeCustomerComponent},
  {path:'homecustomer/:id', component:HomeCustomerComponent},
  {path:'barbershopmeshshifts', component:BarbershopMeshShiftsComponent},
  {path:'barbermeshshifts', component:BarberMeshShiftsComponent},
  {path:'homebarber', component:HomeBarberComponent},
  {path:'historiescuts', component:HistoriesCutsComponent},
  {path:'login', component:LoginComponent},
  {path:'singup', component:SingInComponent},
  {path:'manage-catalogue', component:ManageCatalogueComponent},
  {path:'promotions', component:PromotionComponent},
  {path:'porfilebarber', component:ProfileBarberComponent},
  {path:'porfilebarbershop', component:ProfileBarbershopComponent},
  {path:'porfileclient', component:ProfileClientComponent},
  {path:'promotion', component:PromotionComponent},
  {path:'porfilebarber', component:ProfileBarberComponent}, 
  {path:'terminos', component:TermsAndConditionsComponent}, 
  {path:'listabarber', component:TermsAndConditionsComponent}, 
  {path:'publicaciones', component:ToShowPublicationsComponent}, 
  {path:'publicidad', component:LoadPublicityComponent}, 
  {path:'homeedit', component:HeaderHomeComponent}, 
  

]

@NgModule({
  declarations: [
    AppComponent,
    HomeMainComponent,
    SliderComponent,
    HeaderHomeComponent,
    SingInComponent,
    HomeBarbershopComponent,
    HomeCustomerComponent,
    RankingComponent,
    TableAppointmentComponent,
    PromotionComponent,
    ManagePromotionComponent,
    BarberMeshShiftsComponent,
    BarbershopMeshShiftsComponent,
    HomeBarberComponent,
    HistoriesCutsComponent,
    PromotionListComponent,
    PromotionListComponent,
    ListBarberComponent,
    ManageCatalogueComponent,
    ListCatalogueComponent,
    LoadPublicityComponent,
    ListBarbershopComponent,
    ToShowPublicationsComponent,
    CardLoaderComponent,
    UploadCutsComponent,
    // DetailsComponent,
    PromotionListComponent,
    LoginComponent,
    ProfileClientComponent,
    ProfileBarbershopComponent,
    CreateBarbershopComponent,
    TermsAndConditionsComponent,



    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    NgbModalModule,
    BrowserAnimationsModule
    

  ],
  entryComponents:[DetailsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
