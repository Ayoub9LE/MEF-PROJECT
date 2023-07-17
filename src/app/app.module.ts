import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { RegisterComponent } from './register/register.component';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/sidebar/navbar/navbar.component';
import { TestComponent } from './test/test.component';
import { AddConcoursComponent } from './Concours/add-concours/add-concours.component';
import { ListconcoursComponent } from './Concours/listconcours/listconcours.component';
import { ModifyconcoursComponent } from './Concours/modifyconcours/modifyconcours.component';
import { InsererInscComponent } from './Inscriptions/inserer-insc/inserer-insc.component';
import { InscriptionslistComponent } from './Inscriptions/inscriptionslist/inscriptionslist.component';
import { AcceptrefuseinscComponent } from './Inscriptions/acceptrefuseinsc/acceptrefuseinsc.component';
const routes: Routes= [
  {path : "login", component : UserloginComponent},
  {path : "register", component : RegisterComponent},
  {path : "admin", component : AdminlayoutComponent},
  {path : "sidebar", component : SidebarComponent},
  {path : "navbar", component : NavbarComponent},
  {path : "test", component : TestComponent},
  {path : "addconcours", component : AddConcoursComponent},
   {path : "modifyconcours", component : ModifyconcoursComponent},
  {path : "insererInsc", component : InsererInscComponent},
  {path : "listinsc", component : InscriptionslistComponent},
  {path : "accepterrefuser", component : AcceptrefuseinscComponent}

]; 

@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    RegisterComponent,
    AdminlayoutComponent,
    SidebarComponent,
    NavbarComponent,
    AddConcoursComponent,
    ListconcoursComponent,
    ModifyconcoursComponent,
    InsererInscComponent ,
    InscriptionslistComponent,
    AcceptrefuseinscComponent ],
  imports: [
    BrowserModule,
    TooltipModule.forRoot(),
    NgbModule, 
    BsDropdownModule.forRoot(), // add this line,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
