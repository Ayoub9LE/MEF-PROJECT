import { Component } from '@angular/core';
import{ Router } from '@angular/router'

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
name='ayoub';
constructor(private router: Router){

}
getmessage(){
  console.log("new fucking message");
}
gotoregister(){
  this.router.navigate(['/register'])
}
}
