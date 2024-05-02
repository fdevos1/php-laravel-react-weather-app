# Desafio 1 - PHP/Laravel com React

## Como usar

    Primeiro clone o projeto:

    `git clone https://github.com/fdevos1/php-laravel-react-weather-app.git`

    Entre dentro do projeto e será necessário rodar dois terminais:

    `php artisan serve`

    `npm run dev`

    O servidor roda na porta 8000:

    [localhost](http://localhost:8000)

## Funcionalidades

-   Consulta de clima

   ![consulta](https://github.com/fdevos1/php-laravel-react-weather-app/assets/68919511/da736354-6fdd-4607-9b00-b22e31d1a932)

    
-    Salvar Consultas
 

![salvar consulta](https://github.com/fdevos1/php-laravel-react-weather-app/assets/68919511/c74c54fc-9a61-4856-923f-7aea9da82703)



      
-   Histórico de consultas
-   Comparação de consultas

# Considerações

Como contava com pouca experiência com PHP/Laravel busquei simplificar o máximo possível meu trabalho com a tecnologia, segui a arquitetura que me sinto mais confortável, MVC, onde criei meu modelo de consultas (Queries), usava meu controlador como responsável por tratas as requisições e retornar o que era necessário e tinha minha Homepage onde todas as ações da aplicação são realizadas.

Na parte de React eu optei por fazer o desenvolvimento em componentes, como tudo seria re-usado acreditei ser a melhor forma de desenvolver a aplicação mantendo o código mais limpo e legível, também facilitando na hora de aplicar mudanças, a aplicação foi desenvolvida mobile-first e é responsiva a tablets, notebooks e desktops.

Estou usando o local storage do navegador como um sistema de cache, onde eu guardo o histórico de buscas. Eu levei em consideração que essa aplicação não seria usado em produção e também seria usada somente por um usuário. Num cenário diferente a esse eu criaria uma entidade de usuário e usaria redis como cache.
