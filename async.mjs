function samplePromise() {
    return Promise.resolve("Pina")
}

const name = await samplePromise()
console.info(name);