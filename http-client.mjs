import https from 'https';

const endpoint = "https://enifh6f996thq.x.pipedream.net/"

const request = https.request(endpoint, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}, (response) => {
    response.addListener("data", data => {
        console.info(`Recive data : ${data.toString()}`);
    })
})

const body = JSON.stringify({
    fristName: "Pina",
    lastName: "Pikaruo"
})

request.write(body)
request.end()