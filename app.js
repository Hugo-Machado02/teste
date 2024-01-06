// Importação das bibliotecas e arquivos necessários
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

// Importação das rotas
const indexRoute = require("./routes/indexRoute");
const jokeRoute = require("./routes/jokeRoute");
const activityRoute = require("./routes/activityRoute");

// Criação de uma instância do Express
const app = express();

// Definição da porta a ser utilizada (a porta é definida no arquivo de configuração)
const { PORT } = require("./config");


// Configuração do servidor e do express
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Configuração do Handlebars como mecanismo de visualização
app.set("views", path.join(__dirname, "public", "views"));
app.engine("handlebars", exphbs.engine({ defaultLayout: "layout" }));
app.set("view engine", "handlebars");

// Configuração das rotas
app.use('/', indexRoute);
app.use('/api/piadas', jokeRoute);
app.use('/api/atividades', activityRoute);