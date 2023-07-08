import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import{ Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('200ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})

export class RegisterComponent {
  constructor(private router: Router){}
  connecttoLogin(){
    this.router.navigate(['/login'])
  }

}
