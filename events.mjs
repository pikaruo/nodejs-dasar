import EventEmitter from 'events';

const emitter = new EventEmitter()

emitter.addListener("hello", (nama, alamat) => {
    console.info(`Namaku ${nama}, alamatku ${alamat}`);
})
emitter.addListener("hello", (nama) => {
    console.info(`Hello ${nama}`);
})

emitter.emit("hello", "pikaruo", "jl.mangga")