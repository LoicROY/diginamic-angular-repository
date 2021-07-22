import fetch from "node-fetch";
import { CollegueInterface, VoteInterface } from "./model";

const FAILED_MESSAGE: string = "Operation failed !";
const SUCCEEDED_MESSAGE: string = "Operation succeeded !";

export function getAll(): Promise<any> {
    return fetch("https://c1.cleverapps.io/collegues")
    .then(data => data.json())
    .catch(() => console.log(FAILED_MESSAGE + "\n"));
}

export function getById(id: string): Promise<any> {
    return fetch(`https://c1.cleverapps.io/collegues/${id}`)
    .then(data => data.json())
    .catch(() => console.log(FAILED_MESSAGE + "\n"));
}

export function create(collegue: CollegueInterface): Promise<any> {
    return fetch("https://c1.cleverapps.io/collegues", {
        method: 'POST',
        body: JSON.stringify(collegue),
        headers: {'Content-Type': 'application/json'}
    })
    .then(() => console.log(`${SUCCEEDED_MESSAGE} \n Collegue créer avec l'id ${collegue.id} \n`))
    .catch(() => console.log(FAILED_MESSAGE + "\n"));
}

export function update(collegue: CollegueInterface): Promise<any> {
    return fetch(`https://c1.cleverapps.io/collegues/${collegue.id}`, {
        method: 'PATCH',
        body: JSON.stringify(collegue),
        headers: {'Content-Type': 'application/json'}
    })
    .then(() => console.log(SUCCEEDED_MESSAGE + "\n"))
    .catch(() => console.log(FAILED_MESSAGE + "\n"));
}

export function erase(id: string): Promise<any> {
    return fetch(`https://c1.cleverapps.io/collegues/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    })
    .then(() => console.log(SUCCEEDED_MESSAGE + "\n"))
    .catch(() => console.log(FAILED_MESSAGE + "\n"));
}

export function voter(vote: VoteInterface): Promise<any> {
    return fetch("https://c1.cleverapps.io/votes", {
        method: 'DELETE',
        body: JSON.stringify(vote),
        headers: {'Content-Type': 'application/json'}
    })
    .then(() => console.log(SUCCEEDED_MESSAGE + "\n"))
    .catch(() => console.log(FAILED_MESSAGE + "\n"));
}