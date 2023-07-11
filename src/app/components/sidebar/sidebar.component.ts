import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  
})
export class SidebarComponent implements OnInit {
  status = false;
addToggle()
{
  this.status = !this.status;       
}
  activeItem: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.url.subscribe(urlSegments => {
      const path = urlSegments[0]?.path;
      if (path) {
        this.activeItem = (path === 'admin') ? 'Dashboard' : path;
      }
    });
  }

  setActiveItem(item: string) {
    this.activeItem = item;
  }

  toggleActiveItem(item: string): void {
    if (this.activeItem === item) {
      this.activeItem = '';
    } else {
      this.activeItem = item;
    }
  }
  
}
