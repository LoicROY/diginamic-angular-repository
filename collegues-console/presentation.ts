const readline = require("readline");
import {
    getAll,
    getById,
    create,
    update,
    erase
} from "./service";
import { CollegueInterface } from "./model";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

export function demarrer() {
    console.log("1. Lister les collègues");
    console.log("2. Récupérer un collègue");
    console.log("3. Créer un collègue");
    console.log("4. Modifier un collègue");
    console.log("99. Sortir");
}

export function askUser() {
    demarrer();
    rl.question("Choisissez une option : ", (answer: string) => {
        switch (answer) {
            case "1":
                console.log(">> Liste des clients \n");
                getAll().then((value: CollegueInterface[]) => { 
                    value.forEach(element => 
                        console.log(`${element.id} : ${element.nom} ${element.prenom}`)
                        );
                    console.log("\n");
                    askUser();
                })
                break;

                case "2":
                    rl.question("Id du collègue voulu : ", (id: string) => {
                        console.log(`>>  client, id n° ${id} \n`);
                        getById(id).then((value: CollegueInterface) => { 
                            console.log(`${value.id} : ${value.nom} ${value.prenom} \n`);
                            askUser();
                        })
                    });
                    break;

            case "3":
                rl.question("nom du collegue a ajouter : ", (answer: string) => {
                    
                });
    
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