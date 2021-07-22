import fetch from "node-fetch";

const FAILED_MESSAGE: string = "Operation failed !";
const SUCCEEDED_MESSAGE: string = "Operation succeeded !";

export function getAll(): Promise<any> {
    return fetch("https://c1.cleverapps.io/collegues")
    .then(data => data.json())
    .catch(() => console.log(FAILED_MESSAGE));
}

export function getById(id: string): Promise<any> {
    return fetch(`https://c1.cleverapps.io/collegues/${id}`)
    .then(data => data.json())
    .catch(() => console.log(FAILED_MESSAGE));
}

export function create() {
    fetch("https://c1.cleverapps.io/collegues", {method: "POST"})
    .then(() => console.log(SUCCEEDED_MESSAGE))
    .catch(() => console.log(FAILED_MESSAGE));
}

export function update() {
    fetch("https://c1.cleverapps.io/collegues", {method: "PUT"})
    .then(() => console.log(SUCCEEDED_MESSAGE))
    .catch(() => console.log(FAILED_MESSAGE));
}

export function erase(id: string) {
    fetch(`https://c1.cleverapps.io/collegues/${id}`, {method: "DELETE"})
    .then(() => console.log(SUCCEEDED_MESSAGE))
    .catch(() => console.log(FAILED_MESSAGE));
}