// Contém métodos comuns utilizados por outros controladores
class BaseController {
    // Método assíncrono que renderiza uma view com dados provenientes do modelo
    async renderView(req, res, modelInstance, viewName) {
        try {
            // Tenta obter dados utilizando o método getData() do modelo fornecido
            const { view, json } = await modelInstance.getData();
            
            // Renderiza a view com os dados obtidos do modelo
            res.render(viewName, { view, json });
        } catch (error) {
            // Em caso de erro ao obter dados do modelo, renderiza a página de erro com uma mensagem explicativa
            res.status(500).render('error', { message: `Erro ao obter dados de ${modelInstance.constructor.name}` });
        }
    }
}

module.exports = BaseController;