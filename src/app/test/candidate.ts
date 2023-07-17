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
  