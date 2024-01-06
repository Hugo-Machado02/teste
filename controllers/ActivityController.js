const Activity = require("../models/Activity");
const BaseController = require("./BaseController");

// Controller das atividades: contém a lógica de manipulação de requisições relacionadas à atividade
class ActivityController extends BaseController {
  async getActivity(req, res) {
    // método renderView (classe BaseController): renderiza a view associada à atividade
    // Recebe uma nova instância do modelo 'Activity' e o nome da view como parâmetros
    await this.renderView(req, res, new Activity(), "activity");
  }
}

module.exports = ActivityController;