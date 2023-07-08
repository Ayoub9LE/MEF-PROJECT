import { Component } from '@angular/core';
import { ElementRef, Renderer2, ViewChild } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @ViewChild('body', { static: true }) bodyRef!: ElementRef;
  @ViewChild('sidebar', { static: true }) sidebarRef!: ElementRef;
  @ViewChild('toggle', { static: true }) toggleRef!: ElementRef;
  @ViewChild('searchBtn', { static: true }) searchBtnRef!: ElementRef;
  @ViewChild('modeSwitch', { static: true }) modeSwitchRef!: ElementRef;
  @ViewChild('modeText', { static: true }) modeTextRef!: ElementRef;

  constructor(private renderer: Renderer2) {}

  toggleSidebar() {
    this.renderer.addClass(this.sidebarRef.nativeElement, 'close');
  }

  openSidebar() {
    this.renderer.removeClass(this.sidebarRef.nativeElement, 'close');
  }

  toggleMode() {
    this.renderer.addClass(this.bodyRef.nativeElement, 'dark');

    if (this.bodyRef.nativeElement.classList.contains('dark')) {
      this.modeTextRef.nativeElement.innerText = 'Light mode';
    } else {
      this.modeTextRef.nativeElement.innerText = 'Dark mode';
    }
  }
}
