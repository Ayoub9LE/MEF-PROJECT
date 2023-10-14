import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConconrsService } from '../conconrs.service';
import { Concours } from '../Concours.model';

@Component({
  selector: 'app-modifyconcours',
  templateUrl: './modifyconcours.component.html',
  styleUrls: ['./modifyconcours.component.css']
})
export class ModifyconcoursComponent implements OnInit {
  
  updateForm!: FormGroup;
  selectedConcours!: Concours;
  concoursList!: Concours[];
  selectedConcoursNom!: string;


  constructor(private formBuilder: FormBuilder, private concoursService: ConconrsService) { 
    this.updateForm = this.formBuilder.group({    
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

  ngOnInit(): void {
    this.concoursService.getConcoursList().subscribe(data => {
      this.concoursList = data;
    });
  }

  fillForm() {
 // Find the Concours object based on the selected name
 this.selectedConcours = this.concoursList.find(concours => concours.nom === this.selectedConcoursNom)
 || {} as Concours;
    this.updateForm.patchValue({
      nom: this.selectedConcours.nom,
      description: this.selectedConcours.description,
      type: this.selectedConcours.type,
      nombreDeParticipants: this.selectedConcours.nombreDeParticipants,
      nombreDePlaces: this.selectedConcours.nombreDePlaces,
      fraisDInscription: this.selectedConcours.fraisDInscription,
      règles: this.selectedConcours.règles,
      lieu: this.selectedConcours.lieu,
      dateDeDebut: this.selectedConcours.dateDeDebut,
      dateDeFin: this.selectedConcours.dateDeFin,
      etat: this.selectedConcours.etat,
    });
  }
  

  onSubmit(): void {
    const updatedConcours = { ...this.selectedConcours, ...this.updateForm.value };
    this.concoursService.updateConcours(updatedConcours).subscribe(
      data => {
        alert('Concours updated successfully.');
      },
      error => {
        alert('Something went wrong; please try again later.');
      }
    );
  }
}
