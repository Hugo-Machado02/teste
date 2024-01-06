
# Projeto Equipe-2 
Este é um projeto da Equipe 2 de uma aplicação Web construída em `Node.js`. Onde será consimuda 2 APIs, retornando seus Resultados a tela.
Essa aplicação consiste em retronar os dados de uma API de Piadas do Chuck Norris e em outra API responsável por retornar atividades para serem feitas.

***

# :books: Instalação de Dependências 

## 📋 Pré-requisitos
De Início verifique se o Node.js está instalado, e em seguida vamos instalar suas pedendências.
Para a instalação do Node.js, basta acessar a sua página de [:link:download](https://nodejs.org/en), e em seguida realizar a instalação.

## :package: Instalação de Dependências: **Express, Axios e Handlebars**
para realizar a instalação do express vamos utilizar os comandos a seguir para cada dependência separadamente;
```
npm install express;
npm install axios;
npm install handlebars;
```

⚠️ **Importante**: Essa aplicação é feita em node, por isso, se for executada localmente na máquina, os passos acima devem ser seguidos a risca para uma execução correta da aplicação.

***

# :file_folder: Estruturação do Projeto

- :file_folder: src
  - :file_folder: controller
    - :page_facing_up: ActivityController.js
    - :page_facing_up: BaseController.js
    - :page_facing_up: JokeController.js
  - :file_folder: models
    - :page_facing_up: Activity.js
    - :page_facing_up: BaseModel.js
    - :page_facing_up: Joke.js
  - :file_folder: public
    - :file_folder: style
      - :lipstick: style.css
    - :file_folder: view
      - :file_folder: view
        -- :page_facing_up: layout.handlebars
      - :page_facing_up: activity.handlebars
      - :page_facing_up: error.handlebars
      - :page_facing_up: index.handlebars
      - :page_facing_up: joke.handlebars
  - :file_folder: routes
    - :arrows_clockwise: activityRoute.js
    - :arrows_clockwise: indexRoute.js
    - :arrows_clockwise: jokeRoute.js
  - :page_facing_up: app.js
  - :page_facing_up: config.js

- :wrench: .gitignore
- :package: package-lock.json
- :package: package.json
- :books: README.md

***

## :rocket: Início da Aplicação Local

Para dar início ao servidor execute o comando `npm start` e a aplicação então será iniciada na porta `8080`.
Logo em Seguida acesse a URL :link: `http://localhost:8080` para ter acesso a execução da aplicação.

***

# :globe_with_meridians: início da Aplicação na AWS
Este projeto foi ospedado nos servidores da `AWS`, por isso, acesse o link do IP, ou clique [:link:aqui](https://link.com)

***

## :bricks: Dificuldades 

(A completar Ainda)

***

## :wrench: Recursos Utilizados 
  [![My Skills](https://skillicons.dev/icons?i=vscode,html,css,js,nodejs,git,github)](https://skillicons.dev)


***

# :iphone: Consumo da Aplicação

Ao entrar na aplicação, em sua Homepage aparecerão 2 opções de Botões que poderá escolher:

- **:satisfied: Quero ver uma piada**: Página com uma piada do Chuck Norris.
- **:bulb: Quero ver uma atividade**: Página com uma atividade para ser feita.

    <p align="center">
    <img src="/src/img/homepage.png"/>
</p>  

## :zap: Acessando a pagina de piadas
Ao Acessar o Botão `Quero ver uma piada`, a página será direcionada para outra contendo uma piada do Chuck Norris.
<p align="center">
    <img src="/src/img/piada.png"/>
</p>

## :zap: Acessando a página de Atividades
Ao Acessar o Botão `Quero ver uma piada`, a página será direcionada para outra contendo uma piada do Chuck Norris.
<p align="center">
    <img src="/src/img/atividade.png"/>
</p>

***

## 🖋️ Autores

- Autor 1
- Autor 2
- Autor 3
- Autor 4

***

# :package: Dependências
As dependências do projeto incluem:
- express (Versão 4.18.2) :rocket:
- axios (versão 1.6.5) :globe_with_meridians:
- handlebars (versão 4.7.8) :page_facing_up:
- Express-handlebars (versão 7.1.2) :page_facing_up:
