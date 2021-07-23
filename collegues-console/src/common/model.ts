export interface Collegue {
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

export interface CollegueCreate {
  id: string;
  nom: string;
  prenom: string;
}

export interface VoteInterface {
  collegue_id: string,
  like: boolean,
  id: string
}