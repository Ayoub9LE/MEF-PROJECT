import { Component, OnInit } from '@angular/core';
import { InscriptionService } from '../inscription.service'; // Replace with your path to the service
import { Inscription } from '../Inscription.model'; // Replace with your path to the model
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscriptionslist',
  templateUrl: './inscriptionslist.component.html',
  styleUrls: ['./inscriptionslist.component.css']
})
export class InscriptionslistComponent implements OnInit {

  inscriptions: Inscription[] = [];

  constructor(private inscriptionService: InscriptionService, private router: Router) { }

  ngOnInit(): void {
    this.getInscriptions();
  }

  getInscriptions(): void {
    this.inscriptionService.getInscriptions().subscribe(
      data => {
        this.inscriptions = data;
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  viewInscription(inscription: Inscription): void {
    this.router.navigate(['/accepterrefuser', inscription.id]);
  }
  getClassForInscriptionStatus(statut: string | undefined): string {
    switch (statut) {
      case 'En cours':
        return 'processing badge';
      case 'validated':
        return 'validated badge'; // Adjust this to the desired class
      case 'refused':
        return 'refused badge';
      default:
        return '';
    }
  }
  

}
