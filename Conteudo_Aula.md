
# Node.js Criando uma API REST com Express e MongoDB

## Aula 01 - Introdução - Video 1
Nesta aula, foi apresentado o curso de API REST com Node.js, Express e MongoDB da Alura. O curso é voltado para iniciantes no desenvolvimento back-end que já possuem conhecimento básico em JavaScript. Durante o curso, os alunos aprenderão sobre APIs, sua importância e o papel que desempenham no desenvolvimento web. Será criada uma API de uma livraria, explorando conceitos como representação de livros, autores e editoras. Serão utilizadas ferramentas como o Express e o MongoDB, em conjunto com o Node.js. Os alunos também terão a oportunidade de trabalhar com bancos de dados, entendendo os diferentes tipos existentes e integrando a API a um banco de dados MongoDB. É recomendado ter estudado os cursos de fundamentos do JavaScript e concluído o curso de HTTP como pré-requisitos.

## Aula 01 - Entendendo APIs - Video 2
Nesta aula, o instrutor fala sobre a construção de um sistema interno para uma livraria, onde é necessário consultar um sistema para obter informações sobre livros, autores e editoras. Ele explica que quando se trata de um sistema que busca e armazena informações, como adicionar um livro ao catálogo ou encontrar todos os livros de ficção científica, estamos nos referindo à construção de uma API que concentra as informações e define as maneiras de interagir com esses dados. O instrutor também aborda o conceito de APIs, explicando que elas estão presentes em praticamente tudo o que acessamos na internet. Ele destaca que as informações que vemos em e-commerces, plataformas e redes sociais são o resultado de uma API combinada com o front-end, que exibe esses dados na tela para que os usuários possam interagir com eles. Em seguida, o instrutor explica o que é uma API, destacando o termo "interface" e enfatizando que uma API é um ponto de contato entre diferentes partes de uma aplicação. Ele descreve o fluxo de uma aplicação, desde o front-end até o acesso ao banco de dados, explicando que a comunicação entre o front-end e o back-end é feita por meio de uma API. Ele ressalta que a parte de dados é a mais importante de qualquer sistema, pois é onde estão todas as informações. O instrutor conclui o vídeo reforçando que durante o curso será desenvolvida uma API, que será a interface do programa, com a seção de dados e as funcionalidades da livraria. Ele tranquiliza os espectadores dizendo que eles irão entender melhor como é uma API e o que será entregue ao longo do curso.


## Aula 01 - Criando o Servidor - Video 3
Nesta aula, o instrutor ensina como criar um servidor HTTP utilizando Node.js. Ele explica o protocolo HTTP, a criação do servidor com a biblioteca http e como testar o servidor localmente. O processo começa com a criação de um novo projeto Node utilizando o comando npm init -y e adicionando a propriedade type com o valor module no arquivo package.json. Em seguida, o instrutor mostra como importar a biblioteca http e utilizar o método createServer() para criar o servidor. Ele define o cabeçalho da resposta HTTP com o método writeHead() e envia o conteúdo da resposta com o método end(). Por fim, ele utiliza o método listen() para fazer o servidor "ouvir" por conexões na porta especificada.


## Aula 01 - Criando rotas - Video 4
Nesta aula, o instrutor abordou o conceito de rotas em uma API. Ele explicou que as rotas são endereços que definem os recursos que queremos acessar na API. O instrutor mostrou como criar um conjunto de rotas em um arquivo server.js, utilizando um objeto chamado rotas. Ele exemplificou que ao acessar a rota base, representada por /, será exibida a informação "Curso de Node.js". O instrutor também ensinou como reiniciar o servidor utilizando a biblioteca Nodemon e como visualizar outras rotas adicionando novas chaves e valores ao objeto rotas. Por fim, ele mostrou como criar um arquivo .gitignore para evitar que a pasta "node_modules" seja enviada para o repositório do GitHub.

Normalmente usa-se a notação, objeto.propriedade(chave:, ou método) com o PONTO para acessar a propriedade, mas quanto esta propriedade for uma VARIÁVEL deve-se usar objeto[variavelProriedade] a notação com colchetes 


## Aula 01 - Conclusão - Nesta aula, você aprendeu:
O que são APIs, seus diferentes tipos, para que são utilizadas e como vai funcionar a API no contexto do nosso produto.
O que são servidores e como criar um servidor local utilizando o módulo http nativo do Node.js.
Como criar rotas em uma API, como se conectar e acessar rotas e de que forma as rotas são utilizadas dentro da lógica de uma API REST.



## Aula 02 - Express e primeiras Rotas - Video 1
Nesta aula, a instrutora aborda o uso do framework Express no desenvolvimento de uma API em Node.js. Ela explica que o Express é um conjunto de bibliotecas que facilitam o trabalho de desenvolvimento, permitindo o gerenciamento de rotas e do servidor HTTP. O instrutor mostra como instalar o Express utilizando o npm e como iniciar o Express em um arquivo chamado "app.js". Ela demonstra como criar a primeira rota utilizando o método app.get(), onde é passada uma string representando a URL base da API e uma função de retorno que recebe os parâmetros de requisição e resposta. O instrutor também mostra como o Express substitui a biblioteca interna do Node.js para lidar com as requisições e respostas HTTP. Ela faz a comunicação entre o módulo app.js e o servidor, exportando o módulo e importando-o no arquivo server.js. O instrutor também mostra como iniciar o servidor utilizando o método app.listen() e como testar a rota no navegador. Ela menciona que as rotas e o objeto rotas criados anteriormente podem ser deletados, pois o Express agora é responsável por gerenciar as rotas da API.


## Aula 02 - Criando a rota livros - Video 2
Nesta aula, o instrutor ensina como criar rotas e retornar dados em uma aplicação Express. Ele cria um array chamado "livros" que simula uma base de dados de livros. Em seguida, adiciona uma rota "/livros" que retorna esse array como resposta. Ele explica o uso dos métodos "get()" e "json()" para obter e enviar dados no formato JSON. O instrutor também menciona que o JSON é o formato padrão para APIs REST e mostra como testar a rota no navegador. Ele destaca que existem outros métodos HTTP para diferentes ações em uma API.


## Aula 02 - Criando registros com POST - Video 3
Nesta aula, o professor ensina como adicionar novos registros à API utilizando o método POST. Ele cria uma nova rota ("/livros") e explica que os dados do novo livro são acessados através da propriedade "body" do objeto de requisição (req.body). É necessário utilizar o middleware "express.json()" para converter o corpo da requisição em um objeto JSON. Após adicionar o novo livro ao array de livros, o professor envia uma resposta de sucesso com o código de status 201 e uma mensagem informando que o livro foi cadastrado com sucesso. Ele também mostra como testar a funcionalidade utilizando o Postman.
> No projeto foi usado: app.use(express.json());  
**Middleware**
Assim, temos aqui uma função executando outra função. Isso se chama middleware.
No caso do Express, esses middlewares são utilizados para ter acesso às requisições e às respostas no momento em que elas estão sendo feitas, e para fazer algumas ações nelas, como por exemplo, modificar o objeto, passar informações extras etc.


## Aula 02 - Buscando e atualizando livros - Video 4
Nesta aula, o instrutor continua aprimorando a API, adicionando novas funcionalidades básicas. Ele explica como criar uma nova rota para acessar apenas um livro específico, utilizando o método GET. O instrutor também mostra como utilizar o método PUT para alterar o título de um livro existente. Ele ressalta a importância de testar as requisições utilizando o Postman. Com essas funcionalidades implementadas, a API já é capaz de buscar, criar e alterar dados.
> Importante frizar que o (:id) Com esses dois pontos, foi usado para infor ao Express que o ID será uma informação variável, que será processada de acordo com o valor que for passado.  
> PUT vs PATCH  
 - PUT substitui totalmente o recurso atual pelos novos dados que estão sendo recebidos na requisição. Caso não exista o recurso anterior, ele será criado. Apesar disso, não é o método indicado para a criação de novos recursos, para isso existe o método POST.
 - PATCH atualiza parcialmente um recurso já existente. Ao contrário do PUT que precisa receber um recurso completo para fazer a substituição completa, PATCH pode receber apenas os dados a serem modificados para atualizar apenas estes campos.  
 Quando utilizar um ou outro?  
PUT pode ser usado em situações em que há acesso ao recurso completo (por exemplo, todos os campos do documento a ser atualizado) ou a necessidade de substituir totalmente o recurso. É necessário enviar sempre o recurso completo (com todos os campos);  
PATCH pode ser usado para atualizações parciais e pode receber apenas o campo que será atualizado, o que pode significar menor volume de tráfego de dados.


## Aula 02 - Deletando livros - Video 5
Nesta aula, aprendemos como realizar a exclusão de registros em uma API Rest utilizando o método app.delete do Express. O instrutor mostrou como implementar a função de exclusão, utilizando o método splice para remover o registro do array. Também foi mencionado o uso do Postman para testar a operação de exclusão. Além disso, o instrutor falou sobre as outras operações básicas de um CRUD (Create, Read, Update, Delete) e destacou a importância do CRUD no desenvolvimento back-end.  
No dia a dia, quando falamos em CRUD normalmente também nos referimos a aplicações, APIs ou serviços responsáveis por estas operações. Além da lógica básica de GET, POST, PUT/PATCH e DELETE, as aplicações normalmente implementam um conjunto de outras funcionalidades necessárias ao CRUD, como métodos de validação, autenticação, paginação, testes, tratamento de erros etc.  


## Aula 02 - Conclusão - Nesta aula, você aprendeu:
Como instalar e utilizar os métodos do framework Express para criação de um servidor HTTP e também para gerenciamento de requisições, respostas e criação de rotas;
Como implementar um CRUD inicial com os métodos HTTP GET, POST, PUT e DELETE, e como utilizar os métodos do Express para cada método;
Como testar requisições com Postman e quais são as partes de uma requisição HTTP;
Como utilizar o Express para gerar e enviar respostas adequadas para cada tipo de requisição HTTP.


## Aula 03 - Persistindo Dados

## Aula 03 - Bancos de dados - Video 1
Nesta aula, o instrutor aborda a persistência de dados e os diferentes tipos de bancos de dados: SQL e NoSQL. Ele explica que a persistência de dados refere-se à capacidade de gravar, salvar ou armazenar informações em uma base de dados. O instrutor menciona que inicialmente lidamos com dados principais usando formatos primitivos no JavaScript, mas dependendo do tipo de banco de dados, essa abordagem pode variar.
Ele introduz os conceitos de bancos de dados SQL(MySQL, PostgreSQL, SQLite, MariaDB) e NoSQL(MongoDB, Cassandra, Redis, Neo4j). Os bancos de dados SQL utilizam tabelas relacionais para estruturar os dados, enquanto os bancos de dados NoSQL não seguem essa estrutura. O MongoDB é um exemplo de banco de dados NoSQL que será utilizado no curso.
O instrutor destaca que ambos os tipos de bancos de dados têm vantagens e desvantagens, e ao longo do curso serão fornecidas mais informações sobre isso. Por fim, ele menciona que é o momento de criar a primeira instância do MongoDB.


## Aula 03 - Criando coleção no MongoDB - Video 2
Nesta aula, aprendemos a utilizar o serviço do MongoDB chamado Atlas para criar uma instância gratuita do MongoDB na nuvem. Foi explicado passo a passo como criar uma conta, um projeto e um banco de dados no Atlas. Também vimos como conectar o banco à API e adicionar documentos a uma coleção.


## Aula 03 - Conectando MongoDB e API - Video 3
Nesta aula, o instrutor aborda a integração entre um banco de dados MongoDB e uma API. Ele explica como instalar o Mongoose, fazer a conexão com o banco de dados e tratar os eventos de erro e sucesso da conexão. Essa integração é importante para que a API possa realizar operações no banco de dados, como salvar e buscar dados.


## Aula 03 - Criando models e schemas - Video 4
Nesta aula, aprendemos a criar models e schemas para manipular dados em uma API utilizando o Mongoose e o MongoDB. Foi explicado o conceito de Schema, que define a estrutura e as propriedades de um documento, e como definir o tipo de dado e tornar algumas propriedades obrigatórias. Também foi mostrado como criar um modelo, que permite interagir com os documentos do banco de dados, e como usar esse modelo para acessar e trazer registros.


## Aula 03 - Acessando a coleção livros - Video 5
Nesta aula, o instrutor mostra como conectar a rota do aplicativo ao MongoDB em vez de usar um array. Ele utiliza o método "find()" do Mongoose para buscar todos os livros na coleção "livros" e retorna a lista de livros como resposta JSON. O instrutor também aborda a questão de segurança, mostrando como utilizar a biblioteca "dotenv" para proteger informações sensíveis, como senhas e strings de conexão. Agora é possível fazer os outros métodos (GET, POST, PUT e DELETE) funcionarem corretamente com o banco de dados.

## Aula 03 - Conclusão - Nesta aula, você aprendeu:
Como os bancos de dados atuam integrados a uma API, guardando os dados recebidos e processados pela API;
Quais são as principais diferenças entre tipos de bancos de dados SQL e NoSQL e alguns casos de uso de cada tipo de banco;
Como utilizar uma instância gratuita de um banco MongoDB na nuvem através do serviço Mongo Atlas e conectar a instância com a API;
Os conceitos de model e schema e qual a função de cada na construção de uma API.



## Aula 04 - Evoluindo a API

## Aula 04 - Criando controller para livro - Video 1
Nesta aula, o instrutor aborda a necessidade de organizar a estrutura de uma aplicação para que ela possa crescer de forma organizada. Ele propõe a criação de controladores (controllers) para lidar com as requisições e respostas da aplicação. É criada uma pasta chamada "controllers" e dentro dela um arquivo chamado livroController.js, onde é centralizada toda a lógica relacionada às ações que podem ser feitas em um livro. O primeiro método criado nesse arquivo é o ListarLivros, responsável por listar todos os livros. As rotas são separadas do arquivo app.js e colocadas no arquivo livrosRoutes.js, onde é definida a rota /livros e a função LivroController.listarLivros que será executada quando essa rota for chamada. Essa reorganização torna a aplicação mais organizada e facilita a adição de novas rotas e operações no futuro.


## Aula 04 - Controller POST - Video 2
Nesta aula, o instrutor continua aprimorando o controlador LivroController e criando mais métodos para lidar com as rotas e as requisições e respostas do Express. O foco é no método cadastrarLivro, que é responsável por cadastrar um livro no banco de dados. O instrutor mostra como utilizar o Mongoose para realizar o processo de criação do registro no banco, utilizando o método create(). Ele também demonstra como tratar erros utilizando o bloco try/catch e retorna respostas adequadas para sucesso e falha no cadastro. Além disso, o instrutor faz uma pequena refatoração nas rotas, criando um arquivo index.js como ponto de entrada para todas as rotas da aplicação. Ele explica como utilizar o método app.route() para agrupar as rotas e como utilizar o app.use() para incluir os middlewares e as rotas no ponto de entrada. Por fim, o instrutor mostra como iniciar as rotas no arquivo app.js e testa a funcionalidade no Postman.


## Aula 04 - Controller PUT - Video 3
Nesta aula, o instrutor continua a refatoração do código, adicionando funcionalidades para pegar um livro, atualizar um livro e deletar um livro. Primeiramente, é feita uma pequena refatoração no método de listar livros, adicionando um bloco try-catch para lidar com possíveis erros. Em seguida, é criado um método para listar um único livro, utilizando o método findById() do Mongoose para buscar o livro pelo ID. Depois, é mostrado como atualizar um livro, utilizando o método findByIdAndUpdate() do Mongoose e passando o ID do livro e os novos dados do livro através do req.body. Por fim, é mencionado que as rotas devem ser atualizadas no arquivo livrosRoutes.js para refletir as novas funcionalidades.


## Aula 04 - Controller DELETE - Video 4
Nesta aula, o instrutor finaliza a implementação do CRUD básico em um projeto utilizando Node.js e MongoDB. Ele mostra como criar o método de exclusão de um livro no controller, utilizando o método findByIdAndDelete do Mongoose. O instrutor explica que o método recebe o id do livro a ser excluído como parâmetro e não possui um segundo parâmetro como o método de atualização. Em caso de sucesso na exclusão, a resposta da requisição é um status 200 e a mensagem "Livro excluído com sucesso". Em caso de falha, é retornado um status 500 e a mensagem "Falha na exclusão". O instrutor também mostra como adicionar a rota correspondente no arquivo livrosRoutes.js. Por fim, ele menciona que o CRUD de Livro está completo e que o próximo passo é testar o processo utilizando o Postman. Ele demonstra como testar a rota de listagem de livros, a rota de criação de um novo livro, a rota de atualização de um livro e a rota de exclusão de um livro. Após realizar os testes, o instrutor conclui que o fluxo CRUD está completo e que o projeto poderá ser evoluído com a implementação de erros, autenticação, paginação e outras validações.

## Aula 04 - Conclusão - Nesta aula, você aprendeu:
A organizar a estrutura do código de um projeto de API utilizando o padrão chamado controller;
A evoluir as funcionalidades da API organizando as chamadas da lib Mongoose em métodos separados em um controller;
A praticar a implementação do CRUD (Create, Read, Update e Delete) com as respostas HTTP e as rotas correspondentes.



## Aula 05 - Adicionando funcionalidades

## Aula 05 - Criando autores - Video 1
Nesta aula, o instrutor aborda a adição da entidade "autor" ao modelo de livro em uma API REST. Ele explica que no SQL é necessário garantir que as informações de um autor existam apenas uma vez no banco de dados, enquanto no MongoDB a junção de informações é feita através do conceito de "embedding". O instrutor mostra como adicionar a propriedade "autor" ao modelo de livro, criando um novo modelo para o autor. Ele também menciona a importância de criar rotas e controladores para a entidade "autor" na API, sugerindo duplicar o controlador e as rotas do livro e fazer as substituições necessárias para adaptá-los à entidade "autor".

**Existem três tipos de relacionamentos entre dados**. São eles:  
 - Relacionamento “um para um” (one-to-one ou 1:1), quando um registro está conectado a somente outro registro em outro conjunto de dados. Exemplo: uma pessoa registrada no sistema da nossa livraria tem somente um CPF relacionado a ela.
 - Relacionamento “um para muitos” (one-to-many ou 1:n), quando um registro pode ser conectado a mais de um registro em outro conjunto de dados. Exemplo: as pessoas cadastradas em nossa livraria podem fornecer mais de um número de telefone celular, porém, cada um destes números de celular pode estar associado a apenas uma pessoa por vez.
 - Relacionamento “muitos para muitos” (many-to-many ou n:m), quando mais de um registro pode estar relacionado a mais de um registro em outro conjunto. Exemplo: um livro pode ter mais de um autor, ao mesmo tempo que este mesmo autor pode ter escrito vários livros.

> Além disso, existem as duas formas usuais de fazer estes relacionamentos: embedding e referencing.


## Aula 05 - Unindo livros e autores - Video 2
Nesta aula, o instrutor discute as correções necessárias em alguns arquivos do projeto. Primeiramente, é necessário corrigir o arquivo autorController.js, onde é feita a importação do modelo Autor.js. No modelo Autor.js, são exportados dois módulos: autor e autorSchema, então no autorController.js é necessário importar o autor entre chaves. Em seguida, é necessário corrigir as rotas, adicionando a importação das rotas de autores no arquivo index.js.  
Após as correções, o instrutor explica como fazer a referência à entidade autor no modelo Livro.js. É adicionada a propriedade autor no livroSchema, que fará referência ao esquema de autor criado anteriormente. Para isso, é feita a importação do autorSchema no arquivo Livro.js e adicionada a informação do autorSchema dentro da propriedade autor no livroSchema.  
Em seguida, o instrutor explica como fazer a API funcionar e trazer as informações juntas. É feita uma requisição POST no Postman para criar um autor e verificar se a inserção de autores pela rota /autores está funcionando. Após a criação do autor, é explicado como criar um livro com um autor. É feita uma nova requisição POST no Postman para criar um livro, informando o ID do autor no corpo da requisição.  
No arquivo livroController.js, é feita a alteração no método cadastrarLivros() para processar a requisição e passar os dados corretamente para o modelo gravar no banco de dados. É feita a busca do autor pelo ID no banco de dados e, em seguida, é montado o objeto livroCompleto que será enviado para o banco de dados.  
Por fim, o instrutor realiza testes no Postman para verificar se a criação do livro está funcionando corretamente. É verificado que o livro é criado com sucesso, contendo o título e o autor, que já retorna o nome e a nacionalidade. O instrutor ressalta que essa é a primeira etapa para unir entidades no projeto, e que a partir de agora é possível

### MongoDB
o MongoDB segue o princípio de “dados que são acessados juntos devem ser armazenados juntos”.  
Pensando assim, **embedding** significa incorporar dados que são relacionados e inseri-los em um documento. É usado para simplificar as consultas (queries) aos dados e melhorar a performance geral das ferramentas nas consultas.  
Porém, incorporar dados em um único documento pode criar documentos muito grandes. O tamanho em bytes limite é 16 mb por documento de um objeto BSON.  
**Referencing - SQL**
Referencing significa fazer referência a documentos em outra coleção. Nesse caso, os dados são guardados em coleções separadas. A referência é feita através de um campo específico do documento, normalmente o campo id ou equivalente. A agregação de dados via reference visa evitar duplicação de dados (um aspecto muito importante no SQL, também chamada de “normalização de dados”) e também gerenciar o tamanho dos documentos para evitar a criação de documentos muito grandes, que prejudicariam a performance do sistema.


## Aula 05 - Buscas por parâmetro - Video 3
Nesta aula, o professor discute a implementação de uma nova funcionalidade em uma API REST já existente. A funcionalidade em questão é a busca de livros por editora. Ele explica como capturar o parâmetro de consulta na requisição e utilizá-lo para fazer a busca no banco de dados utilizando o Mongoose. O professor também destaca a importância de definir a ordem das rotas no Express corretamente para evitar conflitos. Ele encoraja os alunos a continuarem estudando e adicionando mais funcionalidades ao projeto.


### URLs, Uniform Resource Locator ou “localizador uniforme de recursos”
 - https:// é o protocolo de comunicação utilizado.
 - cursos.alura.com.br é o host, composto por subdomínio (cursos) e domínio (alura.com.br).
 - :443/ é a porta utilizada na comunicação. 443 é a porta usada para conexões do tipo HTTPS e o número é normalmente suprimido na visualização padrão do navegador. No caso de conexões HTTP, a porta utilizada é a 80.
 - search é a rota ou path (“caminho”), assim como nossa API tem as rotas livros e autores. Rotas de APIs, como a que estamos trabalhando, normalmente são “abstrações” referentes aos recursos. Porém, as rotas também podem ser usadas para a localização de recursos no servidor, por exemplo, /pages/sobre.html para exibir a página sobre no navegador.
 - ?query=express são os query parameters ou parâmetros de busca. Note que os parâmetros de busca sempre iniciam com ?. Uma URL pode conter vários parâmetros encadeados, separados por &. Por exemplo, ?query=express&type=curso&formacao=node.

## Aula 04 - Conclusão - Nesta aula, você aprendeu:
A evoluir as funcionalidades de uma API, unindo diferentes entidades como livro e autor;
Como funciona o relacionamento em um banco de objetos como MongoDB utilizando o modelo de embedding;
Como realizar buscas em API via parâmetros de query.



## Conclusão do Curso: Node.js Criando uma API REST com Express e MongoDB
Nesta aula, concluímos o curso de API REST com Node.js, Express e MongoDB. Aprendemos sobre a importância das APIs REST no desenvolvimento web back-end, como criar rotas, lidar com requisições HTTP, utilizar os verbos REST, autenticação e autorização, além de trabalhar com o framework Express e o banco de dados MongoDB. Também foi destacado o uso de atividades extras para aprofundar o conhecimento e a importância de interagir com a comunidade e deixar avaliações sobre o curso. Parabéns por concluir o curso e continue se dedicando aos estudos!