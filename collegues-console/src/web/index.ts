import { ListCollegues } from "./composant/listCollegues"

document.getElementById("listButton")?.addEventListener('click' , list);
document.getElementById("createButton")?.addEventListener('click' , create);

export function list() {
    new ListCollegues().display();
}

export function getById(id: string) {
    console.log(id);
}

export function create() {
}