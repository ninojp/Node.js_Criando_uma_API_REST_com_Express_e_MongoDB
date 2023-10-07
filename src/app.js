import express from "express";
import conectaNaDatabase from "./config/dbConnect.js"
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("Erro de Conexão", erro);
});
conexao.once("open", () => {
    console.log("Conexão com a DB realizada com Sucesso");
})

const app = express();
routes(app);

// Aqui o método DELETE do http, DELETA um obj do array livros
app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro Deletado com sucesso!");
})
export default app;
