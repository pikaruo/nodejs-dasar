import timer from 'timers/promises';

// console.info(new Date());
// const name = await timer.setTimeout(2000, "Pina")
// console.info(new Date());
// console.info(name);

for await (const _startTime of timer.setInterval(1000, "ignored")) {
    console.info(`Start date at : ${new Date()}`);
}