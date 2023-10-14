export class Inscription {
    id?:BigInteger;
    civilite?: string;
    cin?: string;
    nom?: string;
    prenom?: string;
    date_naissance?: Date;
    lieu_naissance?: string;
    profession?: string;
    adresse?: string;
    ville?: string;
    code_postal?: string;
    email?: string;
    telephone?: string;
    pays?: string;
    annee_obtention?: number;
    diplome_obtenu?: string;
    specialite?: string;
    etablissement?: string;
    concours?: string;
    specialite_concours?: string;
    statut?:string;
}
