import { Composant, Message, Collegue } from "../../common/model";
import { Service } from "../../common/serviceOptimise";
import { getById } from "../index";

const { getAll, erase } = new Service();
const message = new Message();

export class ListCollegues implements Composant {
  section = document.getElementById("dynamique");

  display() {      
    getAll()
      .then((data: Collegue[]) => this.displaySuccess(data))
      .catch(() => this.displayFail());
  }

  displayFail() {
    if (this.section?.firstChild) {
      this.section?.replaceChild(
        message.getFailSpan(),
        this.section?.firstChild
      );
    } else {
        this.section?.appendChild(message.getFailSpan());
    }
  }

  displaySuccess(collegues: Collegue[]) {
    const ul = document.createElement("ul");

    collegues.forEach((collegue: Collegue) => {
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.innerHTML = `${collegue.id} ${collegue.prenom} ${collegue.nom}`;

      const updateButton = document.createElement("button");
      updateButton.addEventListener("click", () => getById(collegue.id));

      const deleteButton = document.createElement("button");
      deleteButton.addEventListener("click", () => erase(collegue.id).then(this.display));

      li.appendChild(p).appendChild(updateButton).appendChild(updateButton);
      ul.appendChild(li);
    });

    if (this.section?.firstChild) {
        this.section.replaceChild(ul, this.section.firstChild);
    } else {
        this.section?.appendChild(ul);
    }
  }
}
