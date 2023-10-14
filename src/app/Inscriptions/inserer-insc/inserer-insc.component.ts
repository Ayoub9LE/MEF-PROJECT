import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InscriptionService } from '../inscription.service';
import { Inscription } from '../Inscription.model';
@Component({
  selector: 'app-inserer-insc',
  templateUrl: './inserer-insc.component.html',
  styleUrls: ['./inserer-insc.component.css']
})
export class InsererInscComponent {
  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private inscriptionService: InscriptionService) { 
    this.addForm = this.formBuilder.group({    
      civilite: ['', Validators.required],
      cin: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      date_naissance: ['', Validators.required],
      lieu_naissance: ['', Validators.required],
      profession: ['', Validators.required],
      adresse: ['', Validators.required],
      ville: ['', Validators.required],
      code_postal: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      pays: ['', Validators.required],
      annee_obtention: ['', Validators.required],
      diplome_obtenu: ['', Validators.required],
      specialite: ['', Validators.required],
      etablissement: ['', Validators.required],
      concours: ['', Validators.required],
      specialite_concours: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    const inscription: Inscription = this.addForm.value;

    this.inscriptionService.addInscription(inscription).subscribe(
      (data: Inscription) => {
        alert('Inscription added successfully.');
      },
      (error: any) => {
        alert('Something went wrong; please try again later.');
      }
    );
  }
}
