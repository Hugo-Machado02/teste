const Joke = require("../models/Joke");
const BaseController = require("./BaseController");

// Controller das piadas: contém a lógica de manipulação de requisições relacionadas à piada
class JokeController extends BaseController {
  async getJoke(req, res) {
    // método renderView (classe BaseController): renderiza a view associada à piada
    // Recebe uma nova instância do modelo 'Joke' e o nome da view como parâmetros
    await this.renderView(req, res, new Joke(), "joke");
  }
}

module.exports = JokeController;