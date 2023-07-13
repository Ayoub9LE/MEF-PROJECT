import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';


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
const routes: Routes= [
  {path : "login", component : UserloginComponent},
  {path : "register", component : RegisterComponent},
  {path : "admin", component : AdminlayoutComponent},
  {path : "sidebar", component : SidebarComponent},
  {path : "navbar", component : NavbarComponent},
  {path : "test", component : TestComponent},
  {path : "addconcours", component : AddConcoursComponent},
  {path : "listconcours", component : ListconcoursComponent}







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
    ModifyconcoursComponent  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
