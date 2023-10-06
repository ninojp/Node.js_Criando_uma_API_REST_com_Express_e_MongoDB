import express from "express";

const app = express();
app.use(express.json());

const livros = [
    { id: 1,
      titulo: "Senhor dos Aneis" },
    { id: 2,
      titulo: "O Hobbit"
    } ];
// Faz uma busca no array, pelo ID recebido como parametro e retorna o objeto respectivo ao ID
function buscaLivro(id){
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    });
};
// Cria a rota "root", padrão do projeto 
app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js, app express");
});
// Cria a rota para exibir o array(lista de objetos livros)
app.get("/livros", (req, res) => {
    res.status(200).json(livros);
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
