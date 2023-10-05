import http from 'http';
import { url } from 'inspector';

const PORT = 3000;

const rotas = {
    "/": "Curso de Node.js, Express API",
    "/livros": "Entrei na Rota Livros",
    "/autores": "Entrei na Rota Autores"
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(rotas[req.url]);
});

server.listen(PORT, () => {
    console.log('Servidor Escutando!')
})