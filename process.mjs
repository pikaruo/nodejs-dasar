import process, { exitCode } from 'process';

process.addListener("exit", (exitCode) => {
    console.info(`Node js with exit Code : ${exitCode}`);
})

console.info(process.version);
console.info(process.argv);
console.info(process.report);

process.exit(1)
console.info("Hello");