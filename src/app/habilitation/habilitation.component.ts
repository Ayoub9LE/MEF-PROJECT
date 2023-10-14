import { Component } from '@angular/core';
import { HabilitationService } from './habilitation.service';
import { User } from '../register/User.model';
@Component({
  selector: 'app-habilitation',
  templateUrl: './habilitation.component.html',
  styleUrls: ['./habilitation.component.css']
})
export class HabilitationComponent {
  users: User[]=[];

  constructor(private userService: HabilitationService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}
