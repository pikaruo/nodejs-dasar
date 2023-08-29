function samplePromise() {
    return Promise.resolve("Pina")
}

async function run() {
    const name = await samplePromise()
    console.info(name);
}

run()