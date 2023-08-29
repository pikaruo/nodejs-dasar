import readline from 'readline';
import process from 'process';

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

input.question("Siapa nama kamu?", (name) => {
    console.info(`Hello ${name}`)
    rl.close()
})