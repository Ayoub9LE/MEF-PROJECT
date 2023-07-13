import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class Candidate {
  nom: string;
  prenom: string;
  profession: string;
  email: string;
  diplome: string;
  specialite: string;
  statut: string;

  constructor(nom: string, prenom: string, profession: string, email: string, diplome: string, specialite: string, statut: string) {
    this.nom = nom;
    this.prenom = prenom;
    this.profession = profession;
    this.email = email;
    this.diplome = diplome;
    this.specialite = specialite;
    this.statut = statut;
  }
}

export class TestComponent {
  candidates: Candidate[] = [
    new Candidate('Nom1', 'Prenom1', 'Profession1', 'Email1@example.com', 'Diplome1', 'Specialite1', 'En cours de traitement'),
    new Candidate('Nom2', 'Prenom2', 'Profession2', 'Email2@example.com', 'Diplome2', 'Specialite2', 'En cours de traitement'),
    new Candidate('Nom3', 'Prenom3', 'Profession3', 'Email3@example.com', 'Diplome3', 'Specialite3', 'En cours de traitement'),
    new Candidate('Nom4', 'Prenom4', 'Profession4', 'Email4@example.com', 'Diplome4', 'Specialite4', 'En cours de traitement'),
    new Candidate('Nom5', 'Prenom5', 'Profession5', 'Email5@example.com', 'Diplome5', 'Specialite5', 'En cours de traitement'),
    new Candidate('Nom6', 'Prenom6', 'Profession6', 'Email6@example.com', 'Diplome6', 'Specialite6', 'En cours de traitement'),
    new Candidate('Nom7', 'Prenom7', 'Profession7', 'Email7@example.com', 'Diplome7', 'Specialite7', 'En cours de traitement'),
    new Candidate('Nom8', 'Prenom8', 'Profession8', 'Email8@example.com', 'Diplome8', 'Specialite8', 'En cours de traitement'),
    new Candidate('Nom9', 'Prenom9', 'Profession9', 'Email9@example.com', 'Diplome9', 'Specialite9', 'En cours de traitement'),
    new Candidate('Nom10', 'Prenom10', 'Profession10', 'Email10@example.com', 'Diplome10', 'Specialite10', 'En cours de traitement'),
    new Candidate('Nom11', 'Prenom11', 'Profession11', 'Email11@example.com', 'Diplome11', 'Specialite11', 'En cours de traitement'),
    new Candidate('Nom12', 'Prenom12', 'Profession12', 'Email12@example.com', 'Diplome12', 'Specialite12', 'En cours de traitement'),
    new Candidate('Nom13', 'Prenom13', 'Profession13', 'Email13@example.com', 'Diplome13', 'Specialite13', 'En cours de traitement'),
    new Candidate('Nom14', 'Prenom14', 'Profession14', 'Email14@example.com', 'Diplome14', 'Specialite14', 'En cours de traitement'),
    new Candidate('Nom15', 'Prenom15', 'Profession15', 'Email15@example.com', 'Diplome15', 'Specialite15', 'En cours de traitement'),
    new Candidate('Nom16', 'Prenom16', 'Profession16', 'Email16@example.com', 'Diplome16', 'Specialite16', 'En cours de traitement'),
  ];
}
