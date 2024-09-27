# O Expedition foi um projeto realizado para a disciplina de Projeto Integrado 1

Para rodar esse sistema faça o clone do projeto e rode ```npm i``` para instalar as dependencias 
Para as configurações do banco de dados é preciso que crie uma variavel de ambiente (um arquivo .env) na raiz de seu projeto e então peça as configurações do banco de dados para um dos colaborados do projeto.
Se quiser usar o projeto como base par criar algo seu crie um banco de dados no firebase e ponha as configurações no .env. Para se guiar melhor farei overview das fubncionalidades principais e em que páginas ela foram implimentadas.

- Ferramenta de Pesquisa: está implementada nas páginas home, design, audiovisual, sistemas, jogos.
  A pesquisa ja está conectada com o banco de dados e funcional, esta pesquisando por nome de projeto e nome do prefessor responsável.
- Ferramenta de filtros: está implementada nas páginas home, design, audiovisual, sistemas, jogo.
  Essa funcionalidade vem acompanhando a pesquisa e também ja esta conectada ao banco de dados, a filtragem é feita por áreas, aplicações, vagas, e se o projeto está ativo.
- Login do administrador: para acessar esse login é preciso que vá na url e coloque "/admin" após a url padrão, estão será direcionado para o login.
  O email e senha do login é colocado no banco de dados manualmente esntão se não tiver acesso ao banco de dados peça a um dos colaboradores para lhe dar o acesso a essas infomações ou se estiver usadno seu banco de dados adicione as infomações no banco "auth do firebase"
- Edição de informações: Após logado com adiministrador você será redirecionado para a tela home só que com design mais simples e com a possibilidade de editar e adicionar infomções as projetos.
  As informações sobre o projeto que podem ser adicionados e/ou modificadas são: descrição, se o projeto foi finalizado, quantas vagas de bolsa ele possui, as área dessas bolsas e as aplicações do projeto. As edições ja estão atualizando o banco de dados.
