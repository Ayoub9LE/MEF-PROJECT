import { Component } from '@angular/core';
import { ElementRef, Renderer2, ViewChild } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  //Sidebar toggle show hide function
status = false;
addToggle()
{
  this.status = !this.status;       
}
activeItem: string = '';

  isActive(item: string): boolean {
    return this.activeItem === item;
  }

  setActive(item: string): void {
    this.activeItem = item;
  }
}
