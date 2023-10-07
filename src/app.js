import express from "express";
import conectaNaDatabase from "./config/dbConnect.js"
import livro from "./models/Livro.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("Erro de Conexão", erro);
});
conexao.once("open", () => {
    console.log("Conexão com a DB realizada com Sucesso");
})

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

app.get("/livros", async (req, res) => {
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);
});
// Aqui o (:id) foi usado para indicar ao express que apartir do : vem um parametro variável
app.get("/livros/:id", (req, res) =>{
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index])
});
// Aqui o método POST do http, ADICIONA um novo obj temporário ao array livros
app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro criado com sucesso");
});
// Aqui o método PUT do http, ATUALIZA um obj do array livros
app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});
// Aqui o método DELETE do http, DELETA um obj do array livros
app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro Deletado com sucesso!");
})
export default app;
