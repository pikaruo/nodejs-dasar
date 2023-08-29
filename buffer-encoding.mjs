const buffer = Buffer.from("Pina", "utf8")

console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const base64 = Buffer.from("UGluYQ==", "base64")
console.info(base64.toString("utf8"));
