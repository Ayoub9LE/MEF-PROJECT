import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  userForm: FormGroup;
  permissionForm: FormGroup;

  // Dummy data for privileges checkboxes
  privileges: string[] = ['Ajouter autres Users', 'modifier autres Users', 'Supprimer autres Users'];

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      roles: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      statut: ['', Validators.required]
    });

    this.permissionForm = this.formBuilder.group({
      concoursAccess: ['', Validators.required],
      userModification: ['', Validators.required]
    });

    // Add checkboxes for each privilege
    this.privileges.forEach(privilege => {
      this.permissionForm.addControl(privilege, this.formBuilder.control(''));
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    // TODO: Implement user form submission logic here
    console.log(this.userForm.value);
  }

  onSubmitPermission(): void {
    // TODO: Implement permission form submission logic here
    console.log(this.permissionForm.value);
  }
}
