const BaseModel = require('./BaseModel');
const { jokeAPI } = require("../config");
const { v4: uuidv4 } = require('uuid');

// Classe Joke que estende a BaseModel para obter dados de piadas
class Joke extends BaseModel {
  constructor() {
    super(jokeAPI);
  }

  // Método sobrescrito para formatar os dados de piadas
  formatData(jokeData) {
    return {
      // Formatação dos dados específicos da piada
      data_atualizacao: new Date(jokeData.updated_at).toLocaleDateString('pt-BR'),
      data_criacao: new Date(jokeData.created_at).toLocaleDateString('pt-BR'),
      icone: jokeData.icon_url,
      id: uuidv4(),
      piada: jokeData.value.replace(/Chuck Norris/g, 'CHUCK NORRIS'),
      referencia: jokeData.url,
    };
  }
}

module.exports = Joke;