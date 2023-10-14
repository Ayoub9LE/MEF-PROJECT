import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConconrsService } from '../conconrs.service';
import { Concours } from '../Concours.model';

@Component({
  selector: 'app-add-concours',
  templateUrl: './add-concours.component.html',
  styleUrls: ['./add-concours.component.css']
})
export class AddConcoursComponent implements OnInit {
  
  addForm: FormGroup;  // Moved addForm declaration outside of ngOnInit()

  constructor(private formBuilder: FormBuilder, private concoursService: ConconrsService) { 
    this.addForm = this.formBuilder.group({    
      nom: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      nombreDeParticipants: ['', Validators.required],
      nombreDePlaces: ['', Validators.required],
      fraisDInscription: ['', Validators.required],
      règles: ['', Validators.required],
      lieu: ['', Validators.required],
      dateDeDebut: ['', Validators.required],
      dateDeFin: ['', Validators.required],
      etat: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    const concours: Concours = this.addForm.value;

    this.concoursService.addConcours(concours).subscribe(
      (data: Concours) => {
        alert('Concours added successfully.');
      },
      (error: any) => {
        alert('Something went wrong; please try again later.');
      }
    );
  }
}
