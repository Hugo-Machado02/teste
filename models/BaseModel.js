const axios = require('axios');

// Classe base para modelos de dados
class BaseModel {
    // Construtor que recebe a URL da API como parâmetro
    constructor(apiURL) {
        this.apiURL = apiURL;
    }

    // Método assíncrono para obter dados do servidor
    async getData() {
        try {
            // Requisição GET para a URL fornecida e extração dos dados da resposta
            const response = await axios.get(this.apiURL);
            const data = response.data;

            // Chamada ao método de formatação de dados - deve ser implementado nas subclasses
            const view = this.formatData(data);

            // Conversão do objeto de visualização para JSON
            const json = JSON.stringify(view);

            // Retorna os dados formatados e o JSON correspondente
            return { view, json };
        } catch (error) {
            // Em caso de erro, lança uma exceção com a mensagem de erro
            throw new Error(`Erro ao obter dados: ${error.message}`);
        }
    }
    
    // Método a ser implementado nas subclasses para formatar os dados
    formatData(data) {
        // Lança um erro se não for implementado na subclasse
        throw new Error('Método não implementado'); 
    }
}

module.exports = BaseModel;