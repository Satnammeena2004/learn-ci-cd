import http from 'http';
const PORT = 3000;


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({
        data: 'Hello World !!',
        message:"Done 🚀"
    }));
})

server.listen(PORT, () => {
    console.log("Server listen on port " + PORT + " 🚀")
})





