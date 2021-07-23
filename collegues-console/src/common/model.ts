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

export interface Composant {
  display(): void;
  displayFail(): void;
  displaySuccess(data: any): void;
}

export class Message {
  SUCCEED_MESSAGE: string = "construction succeed";
  FAIL_MESSAGE: string = "construction failed";

  getSuccessSpan(): HTMLSpanElement {
    const span = document.createElement('span');
    span.innerHTML = this.SUCCEED_MESSAGE;
    return span;
  }

  getFailSpan(): HTMLSpanElement {
    const span = document.createElement('span');
    span.innerHTML = this.FAIL_MESSAGE;
    return span;
  }
}