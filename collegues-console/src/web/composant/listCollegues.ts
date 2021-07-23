import { Service } from "../../common/service";

const { getAll } = new Service();

function run() {
    
}

async function list() {
  await getAll();
}
