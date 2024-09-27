# Expedition 🏝️🌊 

## O Expedition é um projeto desenvolvido na disciplina de protejo integrado 1. 
## Seu objetivo é tornar mais facil a busca e visualização de projetos de pesquisas realizados no Instituto UFC Virtual

## Primeiros passos ✅

1. *Clone do Projeto*  
   Execute o seguinte comando para clonar o projeto:
   ```bash
   git clone https://github.com/luryian/WaveProject.git```
   

2. *Instalação das Dependências*  
   Navegue até o diretório do projeto e instale as dependências:
   bash
   npm install
   

3. *Configuração do Banco de Dados*  
   Crie um arquivo .env na raiz do seu projeto para configurar as variáveis de ambiente. Solicite as informações necessárias sobre o banco de dados a um dos colaboradores do projeto. Se você deseja usar o projeto como base para criar algo próprio, crie um banco de dados no Firebase e adicione as configurações ao arquivo .env.

## Funcionalidades Principais 🌟

### 1. Ferramenta de Pesquisa 🔍
- *Páginas:* Home, Design, Audiovisual, Sistemas, Jogos.
- *Descrição:* A pesquisa já está conectada ao banco de dados e é funcional. Ela pesquisa por nome de projeto e nome do professor responsável.

### 2. Ferramenta de Filtros 🗂️
- *Páginas:* Home, Design, Audiovisual, Sistemas, Jogos.
- *Descrição:* Esta funcionalidade está integrada à pesquisa e também está conectada ao banco de dados. A filtragem é feita por:
  - Áreas
  - Aplicações
  - Vagas
  - Status do projeto (ativo/inativo)

### 3. Login do Administrador 🔑
- *Acesso:* Para acessar o painel de administração, adicione /admin à URL padrão.
- *Credenciais:* O e-mail e a senha do administrador devem ser adicionados manualmente ao banco de dados. Se você não tiver acesso, entre em contato com um dos colaboradores para obter as informações. Se estiver usando seu próprio banco de dados, adicione as informações ao "Auth" do Firebase.

### 4. Edição de Informações ✏️
- *Acesso:* Após fazer login como administrador, você será redirecionado para a tela inicial, que terá um design simplificado e permitirá a edição e adição de informações sobre os projetos.
- *Informações que podem ser editadas:*
  - Descrição do projeto
  - Status de finalização do projeto
  - Número de vagas de bolsa disponíveis
  - Áreas das bolsas
  - Aplicações do projeto
- *Atualizações:* As edições realizadas serão refletidas no banco de dados.
