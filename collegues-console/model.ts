export class Collegue {
  constructor(
    public id: string,
    public nom: string,
    public prenom: string
  ) {}

  toString() {
    return `${this.id} + ${this.nom} + ${this.prenom}`;
  }
}

export interface CollegueInterface {
  id: string;
  nom: string;
  prenom: string;
  societe: string;
  email: string;
  dateNaissance: string;
  sexe: string;
  adresse: string;
  password: string;
  photo: string;
  subalterne: string[];
  departement: string;
}
