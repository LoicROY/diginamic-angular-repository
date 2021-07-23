import fetch from "node-fetch";
import { CollegueCreate, Collegue, VoteInterface } from "./model";

const SUCCEEDED_MESSAGE: string = "Operation succeeded !";

export class Service {

    async getAll(): Promise<Collegue[]> {        
        const response = await fetch("https://c1.cleverapps.io/collegues");
        console.log(response);
        // response.json().then(data => console.log(data));

        return response.json();
    }

    async getById(id: string): Promise<Collegue> {
        const response = await  fetch(`https://c1.cleverapps.io/collegues/${id}`);
        return response.json();
    }

    async create(collegue: CollegueCreate): Promise<Collegue> {
        const response = await fetch("https://c1.cleverapps.io/collegues", {
            method: 'POST',
            body: JSON.stringify(collegue),
            headers: {'Content-Type': 'application/json'}
        });
        return response.json();
    }

    async update(collegue: Partial<Collegue>): Promise<Collegue> {
        const response = await fetch(`https://c1.cleverapps.io/collegues/${collegue.id}`, {
            method: 'PATCH',
            body: JSON.stringify(collegue),
            headers: {'Content-Type': 'application/json'}
        });
        return response.json();
    }

    async erase(id: string): Promise<string> {
        await fetch(`https://c1.cleverapps.io/collegues/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        });
        return SUCCEEDED_MESSAGE;
    }

    async voter(vote: VoteInterface): Promise<string> {
        await fetch("https://c1.cleverapps.io/votes", {
            method: 'POST',
            body: JSON.stringify(vote),
            headers: {'Content-Type': 'application/json'}
        });
        return SUCCEEDED_MESSAGE;
    }
}