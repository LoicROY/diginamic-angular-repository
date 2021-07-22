const readline = require("readline");
import { getAll, getById, create, update, erase } from "./service";
import { CollegueInterface } from "./model";
import { getRandomInt } from "./random";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function demarrer() {
  console.log("1. Lister les collègues");
  console.log("2. Récupérer un collègue");
  console.log("3. Créer un collègue");
  console.log("4. Modifier un collègue");
  console.log("5. Supprimer un collègue");
  console.log("99. Sortir");
}

export function askUser() {
  demarrer();
  rl.question("Choisissez une option : ", (answer: string) => {
    switch (answer) {
      case "1":
        console.log(">> Liste des clients \n");
        getAll().then((value: CollegueInterface[]) => {
          value.forEach((element) =>
            console.log(`${element.id} : ${element.nom} ${element.prenom}`)
          );
          console.log("\n");
          askUser();
        });
        break;

      case "2":
        rl.question("Id du collègue voulu : ", (id: string) => {
          getById(id).then((value: CollegueInterface) => {
            console.log(`${value.id} : ${value.nom} ${value.prenom} \n`);
            askUser();
          });
        });
        break;

      case "3":
        rl.question("nom du collegue a ajouter : ", (nom: string) => {
          rl.question("prenom du collegue a ajouter : ", (prenom: string) => {
            create({ id: `${getRandomInt()}`, nom, prenom }).then(() => askUser());
          });
        });
        break;

      case "4":
        rl.question("id du collegue a modifier : ", (id: string) => {
          getById(id).then((value: CollegueInterface) => {
            rl.question("nouveau nom : ", (nom: string) => {
              rl.question("nouveau prenom : ", (prenom: string) => {
                value.nom = nom;
                value.prenom = prenom;
                update(value).then(() => askUser());
              });
            });
          });
        });
        break;

      case "5":
        rl.question("id du collegue a supprimer : ", (id: string) => {
          erase(id).then(() => askUser());
        });
        break;

      case "99":
        console.log("Au revoir");
        rl.close();
        break;

      default:
        console.log(answer + " is not a option \n");
        askUser();
        break;
    }
  });
}
