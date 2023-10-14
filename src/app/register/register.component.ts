import { Component,OnInit  } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import{ Router } from '@angular/router';
import { RegisterService } from './register.service';
import { User } from './User.model'; // Import your User model here



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

export class RegisterComponent implements OnInit {

  user: User = new User(); // Initialize user object

  constructor(private router: Router, private userService: RegisterService) { } // Don't forget to import UserService

  ngOnInit(): void {
  }

  register(): void {
    this.userService.registerUser(this.user).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/login']);
      },
      error => {
        console.log(error);
      }
    );
  }
}
