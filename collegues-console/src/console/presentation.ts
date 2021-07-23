const readline = require("readline");
import {Service} from "../common/service";
import { Collegue } from "../common/model";
import { getRandomInt } from "../common/random";

const { getAll, getById, create, update, erase, voter } = new Service();

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
  console.log("6. Voter");
  console.log("7. Classement");
  console.log("99. Sortir");
}

export function askUser() {
  demarrer();
  rl.question("Choisissez une option : ", (answer: string) => {
    switch (answer) {
      case "1":
        console.log(">> Liste des clients \n");
        getAll().then((value: Collegue[]) => {
          value.forEach((element) =>
            console.log(`${element.id} : ${element.nom} ${element.prenom}`)
          );
          console.log("\n");
          askUser();
        });
        break;

      case "2":
        rl.question("Id du collègue voulu : ", (id: string) => {
          getById(id).then((value: Collegue) => {
            console.log(`${value.id} : ${value.nom} ${value.prenom} \n`);
            askUser();
          });
        });
        break;

      case "3":
        rl.question("nom du collegue a ajouter : ", (nom: string) => {
          rl.question("prenom du collegue a ajouter : ", (prenom: string) => {
            create({
              id: `${getRandomInt()}`,
              nom,
              prenom
            }).then(() => askUser());
          });
        });
        break;

      case "4":
        rl.question("id du collegue a modifier : ", (id: string) => {
          getById(id).then((value: Collegue) => {
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

      case "6":
        rl.question("id du collegue visé : ", (collegue_id: string) => {
            rl.question("like or dislike ?", (like: string) => {
                switch (like) {
                    case "like":
                        voter( { collegue_id, like: true, id: getRandomInt().toString() } )
                        .then(() => askUser());
                        break;
                    
                    case "dislike":
                        voter( { collegue_id, like: false, id: getRandomInt().toString() } )
                        .then(() => askUser());
                        break;
                
                    default:
                        console.log(like + " n'est pas une option valable \n")
                        askUser();
                        break;
                }
              });
          });
        break;

      case "7":
        //classement
        break;

      case "99":
        console.log("Au revoir");
        rl.close();
        break;

      default:
        console.log(answer + " n'est pas une option valable \n");
        askUser();
        break;
    }
  });
}
