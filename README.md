<h1 align="center">
    <br>
    <p align="center">Projeto Final {Reprograma} - ON15<p>
</h1>
</p>
<br>

## 💻 Sobre o projeto e descrição da API Cozinha Solidária

<br>

 API desenvolvida como Projeto Final com o auxílio da professora Hannah Freitas para a conclusão do curso de Back end  [{Reprograma}](https://reprograma.com.br/)

<p align="justify">Esse projeto me foi impulsionado por acompanhar a inauguração de espaços e lançamento de atividades na cidade de Fortaleza pelo MST, que promovem um maior bem estar e qualidade de vida à população carente. Tendo em vista o número crescente de forma exorbitantemente acelerada de pessoas em situação de insegurança alimentar e a volta do Brasil ao mapa da fome, iniciativas como essa são fundamentais para auxiliar a população quando o governo exime da sua responsabilidade de garantir o básico e necessário ao povo. Não só se exime, como também marginaliza e interfere violentamente nas atividades e nos espaços dessas instituições.

<p align="justify">A cozinha solidária do Movimento Sem Terra de fato existe (não só em Fortaleza), assim como outros espaços que exercem atividades semelhantes em alguns pontos da minha cidade, e o principal objetivo dessa API é auxiliar na organização e logística dos insumos utilizados para a feitura das refeições a serem distribuídas.

<p align="justify">O projeto é uma API REST que permite que os voluntários consultem, cadastrem, atualizem e deletem os insumos que são recebidos pela cozinha por meio de doações ou captações de recurso, facilitando todos o processo de inventário da cozinha. A interface é um CRUD completo integrado com o banco de dados, onde é possível cadastrar novos insumos, listar, atualizar e deletar um insumo.
  
<br>

## 🔗 Link 

- [Apresentação](https://www.canva.com/design/DAFHPEjIm2Q/1M_keKUIbLIVtkM6i8N9og/view?utm_content=DAFHPEjIm2Q&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent)

<br>

## ⚙️ Funcionalidades/Objetivos

- Listar todos os insumos cadastrados no sistema;
- Cadastrar novos insumos com nome, quantidade, validade e data de cadastro;
- Atualizar quantidades dos insumos com data de modificação;
- Deletar insumos que não existem mais (não são mais utilizados ou acabaram);

<br>

## 📚 Aprendizados

O projeto final concentra todos os conhecimentos adquiridos ao longo do curso e consiste na construção de uma API fundamentada no CRUD, que são:  CREATE (CRIAR), READ(LER), UPDATE(ATUALIZAR) e DELETE(DELETAR). 

<br>

## 🛠️ Tecnologias utilizadas nesse projeto

<br>

Para a construção do projeto, as seguintes tecnologias foram utilizadas:

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDb](https://www.mongodb.com/)
- [MongoCompass](https://www.mongodb.com/pt-br/products/compass)
- [MongoDBatlas](https://www.mongodb.com/cloud/atlas)
- [Postman](https://www.postman.com/)
- [Vscode](https://code.visualstudio.com/)
- [heroku](https://dashboard.heroku.com/apps)  

### Pacotes Utilizados 

- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://nodemon.io/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://mongoosejs.com/)
- [cors](https://www.npmjs.com/package/cors)

<br>

## 📁 Arquitetura MVC 

```
 📁 cozinha-solidaria
   |
   |-  📁 src
   |    |
   |    |- 📁 controller
   |         |- 📑 cozinhaController.js     
   |     
   |
   |    |- 📁 config
   |         |- 📑 database.js
   |
   |
   |    |- 📁 models
   |         |- 📑 cozinhaSchema.js          
   |         
   |
   |    |- 📁 routes
   |         |- 📑 cozinhaRoutes.js 
   |         |- 📑 indexRoutes.js
   |
   |    |- 📑 app.js
   |
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 README.md
   |- 📑 server.js
```
<br>

## 🔃 Rotas

* local: http://localhost:9091

* Heroku: https://cozinha-solidaria.herokuapp.com/

    * Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para para chamar e testar os endpoints da API localmente ou via Heroku

<br>

## 🔃 Retorna teste com apresentação: 

| Método HTTP  | Endpoint                     | Descrição                            |
| ------------ | ---------------------------- | ------------------------------------ |
| GET          | `http://localhost:9091/`     |  Mensagem de apresentação (Index)    |      


<br>


## 🔃 Manipulação das Rotas dos insumos:

| Método HTTP  | Endpoint                | Descrição                            |
| ------------ | ----------------------- | ------------------------------------ |
| GET          | `/cozinha/inputs`       | Retorna todos os insumos             |
| POST         | `/cozinha/create`       | Cadastra um novo insumo              |
| PUT          | `/cozinha/update/:id`   | Altera informações de um insumo      |
| DELETE       | `/cozinha/delete/:id`   | Deleta um insumo específico          |


## ✅ Dados para Collection Cozinha Solidária:

- id: gerado automaticamente 
- nome: texto e obrigatório
- quantidade: texto e obrigatório
- dataValidade: texto e obrigatório 
- criadoEm: data gerada automaticamente e obrigatório

<br>

## ✅ API deve retornar seguinte JSON:

```jsx
{
    "_id": "62e3d08fb54c0276c4817061",
    "name": "tomate",
    "amount": "35kg",
    "expire": "12/08/22",
    "createdAt": "2022-07-29T12:20:31.321Z",
    "__v": 0
}
```
 <br>

## 🚧 Melhorias para o futuro (Em construção)

<br>

*  Minha ideia inicial era implementar uma autenticação para que só os voluntários tivessem acesso ao sistema para cadastrar, atualizar e deletar, deixando somente a parte de consulta dos insumos aberta à todos, por questão de transparência, mas ainda pretendo desenvolver isso futuramente.
* Acrescentar um cardápio diário ou semanal, para promover mais uma facilidade aos processos de cozinha.
* Acrescentar um tratamento de erro no cadastro para retornar qual campo obrigatório se encontra vazio.

<br>

## 📝 Licença

Este projeto esta sob a licença [MIT](./LICENSE).