import { json } from 'stream/consumers';
import util from 'util';

const firstName = "Pina"
const lastName = "Pikaruo"

console.info(`Data nama ${firstName} ${lastName}`);
console.info(util.format("Data nama : %s %s", firstName, lastName));

const person = {
    firstName: "Pina",
    lastName: "Pikaruo"
}

console.info(`Person : ${JSON.stringify(person)}`);
console.info(util.format("Person : %j ", person));