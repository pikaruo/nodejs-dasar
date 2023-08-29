import console, { Console } from 'console';
import fs from 'fs';

const file = fs.createWriteStream("Application.log")

const log = new Console({
    stdout: file,
    stderr: file
})

log.info("Console.Info");
log.error("Console.Error");

const person = {
    nama: "Pina",
    alamat: "Jl.Mangga"
}

log.table(person)