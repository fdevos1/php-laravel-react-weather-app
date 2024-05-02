# Desafio 1 - PHP/Laravel com React

## Como usar

Primeiro clone o projeto

`git clone https://github.com/fdevos1/php-laravel-react-weather-app.git`

Entre dentro do projeto e instale as dependências:

`composer install`

`npm install`

Será necessário rodar dois terminais para rodar o aplicativo:

`php artisan serve`

`npm run dev`

O servidor roda na porta 8000

<sub>[localhost](http://localhost:8000).</sub>

## Funcionalidades

-   Consulta de clima

    ![consulta](https://github.com/fdevos1/php-laravel-react-weather-app/assets/68919511/da736354-6fdd-4607-9b00-b22e31d1a932)

-   Salvar Consultas

    ![salvar consulta](https://github.com/fdevos1/php-laravel-react-weather-app/assets/68919511/c74c54fc-9a61-4856-923f-7aea9da82703)

-   Histórico de consultas

    ![historico](https://github.com/fdevos1/php-laravel-react-weather-app/assets/68919511/034b3476-c620-42c4-af74-b1b85bb2b3c0)

-   Consultas Salvas

    ![consultas salvas](https://github.com/fdevos1/php-laravel-react-weather-app/assets/68919511/2fe1b2ac-17d8-43ce-9e9d-34dd6709d193)

-   Comparação de consultas

    ![comparar](https://github.com/fdevos1/php-laravel-react-weather-app/assets/68919511/ff887e46-6fcb-4079-b387-43a9f8e57f6e)

## Considerações

Como contava com pouca experiência com PHP/Laravel busquei simplificar o máximo possível meu trabalho com a tecnologia, segui a arquitetura que me sinto mais confortável, MVC, onde criei meu modelo de consultas (Queries), usava meu controlador como responsável por tratas as requisições e retornar o que era necessário e tinha minha Homepage onde todas as ações da aplicação são realizadas.

Na parte de React eu optei por fazer o desenvolvimento em componentes, como tudo seria re-usado acreditei ser a melhor forma de desenvolver a aplicação mantendo o código mais limpo e legível, também facilitando na hora de aplicar mudanças, a aplicação foi desenvolvida mobile-first e é responsiva a tablets, notebooks e desktops.

Estou usando o local storage do navegador como um sistema de cache, onde eu guardo o histórico de buscas. Eu levei em consideração que essa aplicação não seria usado em produção e também seria usada somente por um usuário.

Em um cenário diferente a esse eu criaria uma entidade de usuário e usaria redis como cache.

## To-do

Com mais tempo acredito que evoluiria esses pontos:

-   Criar um design com o foco na melhor experiência pro usuário.
-   Evoluir para outra API para ter mais dados para mostrar e comparar.
-   Criar autenticação e relacionar dados de consulta a usuários.
-   Evolução da paginação dos dados no back-end.
