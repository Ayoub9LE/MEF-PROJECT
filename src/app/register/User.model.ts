export class User {
    id?: number;
    firstname?: string;
    secondname?: string;
    login?: string;
    statut?:String;
    password?: string;
    roles?: Array<string> = [];
}
