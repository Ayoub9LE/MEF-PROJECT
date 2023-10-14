import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InscriptionService } from '../inscription.service';
import { Inscription } from '../Inscription.model';

@Component({
  selector: 'app-acceptrefuseinsc',
  templateUrl: './acceptrefuseinsc.component.html',
  styleUrls: ['./acceptrefuseinsc.component.css']
})
export class AcceptrefuseinscComponent implements OnInit {
  inscription?: Inscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private inscriptionService: InscriptionService
  ) { }

  ngOnInit(): void {
    this.getSpecificInscription();
  }

  getSpecificInscription(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.inscriptionService.getInscriptionById(id).subscribe(
      inscription => this.inscription = inscription,
      error => console.error('Error:', error)
    );
  }

  onEdit(): void {
    if (this.inscription) {
      this.inscriptionService.updateInscription(this.inscription).subscribe(
        updatedInscription => {
          this.inscription = updatedInscription;
          alert('Inscription updated!');
        },
        error => {
          alert('An error occurred while updating the inscription');
        }
      );
    }
  }

  onValidate(): void {
    if (this.inscription) {
      this.inscription.statut = 'validated';
      this.inscriptionService.updateInscription(this.inscription).subscribe(
        updatedInscription => {
          this.inscription = updatedInscription;
          alert('Inscription validated!');
        },
        error => {
          alert('An error occurred while validating the inscription');
        }
      );
    }
  }

  onReject(): void {
    if (this.inscription) {
      this.inscription.statut = 'refused';
      this.inscriptionService.updateInscription(this.inscription).subscribe(
        updatedInscription => {
          this.inscription = updatedInscription;
          alert('Inscription refused!');
        },
        error => {
          alert('An error occurred while refusing the inscription');
        }
      );
    }
  }
  
}
