const BaseModel = require("./BaseModel");
const { activityAPI } = require("../config");
const { v4: uuidv4 } = require('uuid');

// Classe Activity que estende a BaseModel para obter dados de atividades
class Activity extends BaseModel {
  constructor() {
    super(activityAPI);
  }
  
  // Método sobrescrito para formatar os dados de atividades
  formatData(activityData) {
    return {
      // Formatação dos dados específicos da atividade
      id: uuidv4(),
      atividade: activityData.activity,
      tipo: activityData.type,
      participantes: activityData.participants,
      acessibilidade: (activityData.accessibility).toLocaleString('pt-BR', { style: 'percent' })
    };
  }
}

module.exports = Activity;