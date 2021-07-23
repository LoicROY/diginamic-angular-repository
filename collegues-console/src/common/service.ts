import fetch from "node-fetch";
import { CollegueInterface, VoteInterface } from "./model";

const FAILED_MESSAGE: string = "Operation failed !";
const SUCCEEDED_MESSAGE: string = "Operation succeeded !";

export class Service {

    getAll(): Promise<any> {
        return fetch("https://c1.cleverapps.io/collegues")
        .then(data => data.json())
        .catch(() => console.log(FAILED_MESSAGE + "\n"));
    }

    getById(id: string): Promise<any> {
        return fetch(`https://c1.cleverapps.io/collegues/${id}`)
        .then(data => data.json())
        .catch(() => console.log(FAILED_MESSAGE + "\n"));
    }

    create(collegue: CollegueInterface): Promise<any> {
        return fetch("https://c1.cleverapps.io/collegues", {
            method: 'POST',
            body: JSON.stringify(collegue),
            headers: {'Content-Type': 'application/json'}
        })
        .then(() => console.log(`${SUCCEEDED_MESSAGE} \n Collegue créer avec l'id ${collegue.id} \n`))
        .catch(() => console.log(FAILED_MESSAGE + "\n"));
    }

    update(collegue: CollegueInterface): Promise<any> {
        return fetch(`https://c1.cleverapps.io/collegues/${collegue.id}`, {
            method: 'PATCH',
            body: JSON.stringify(collegue),
            headers: {'Content-Type': 'application/json'}
        })
        .then(() => console.log(SUCCEEDED_MESSAGE + "\n"))
        .catch(() => console.log(FAILED_MESSAGE + "\n"));
    }

    erase(id: string): Promise<any> {
        return fetch(`https://c1.cleverapps.io/collegues/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
        .then(() => console.log(SUCCEEDED_MESSAGE + "\n"))
        .catch(() => console.log(FAILED_MESSAGE + "\n"));
    }

    voter(vote: VoteInterface): Promise<any> {
        return fetch("https://c1.cleverapps.io/votes", {
            method: 'DELETE',
            body: JSON.stringify(vote),
            headers: {'Content-Type': 'application/json'}
        })
        .then(() => console.log(SUCCEEDED_MESSAGE + "\n"))
        .catch(() => console.log(FAILED_MESSAGE + "\n"));
    }
}