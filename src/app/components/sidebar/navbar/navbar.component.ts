import { Component,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None  // Disable CSS encapsulation for the component
})
export class NavbarComponent {
  status = false;
addToggle()
{
  this.status = !this.status;       
}
}
