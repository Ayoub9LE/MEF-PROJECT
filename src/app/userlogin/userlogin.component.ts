import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserloginService } from './userlogin.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
  name = 'ayoub';
  login: string = '';
  password: string = '';

  constructor(private router: Router, private authService: UserloginService) { }

  // Method to handle user login
  logiin() {
    this.authService.login(this.login, this.password).subscribe(
      (response) => {
        // Handle successful login
        console.log('Login successful');
        // Redirect to the admin page or any other page after successful login
        this.router.navigate(['/admin']); // Replace '/admin' with the actual URL of the admin page
      },
      (error) => {
        // Handle login error
        console.error('Login failed:', error);
        console.error('Error details:', error.error); // Print the error details
      }
    );
  }
  

  // Method to navigate to the register page
  gotoregister() {
    this.router.navigate(['/register']);
  }
}
