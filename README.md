# 📚 walberstore_server

Projeto desenvolvido como atividade no curso de Pós-graduação em Desenvolvimento Web, na disciplina de Programação Web I.

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)

## 📂 Estrutura do Projeto

```
.
├── app.js
├── livros.json
├── favoritos.json
├── package.json
├── README.md
├── teste.js
├── controladores/
│   ├── livros.js
│   └── favoritos.js
├── rotas/
│   ├── livros.js
│   └── favoritos.js
└── servicos/
    ├── livros.js
    └── favoritos.js
```

## ⚙️ Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/walberstore_server.git
   cd walberstore_server
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

## ▶️ Como Executar

- Para rodar o servidor:
  ```sh
  node app.js
  ```
- Ou, para desenvolvimento com recarregamento automático:
  ```sh
  npx nodemon app.js
  ```

O servidor estará disponível em: [http://localhost:8000](http://localhost:8000)

## 🛣️ Rotas Disponíveis

### 📖 Livros

- `GET /livros` — Lista todos os livros
- `GET /livros/:id` — Busca um livro pelo ID
- `POST /livros` — Adiciona um novo livro
- `PATCH /livros/:id` — Atualiza um livro existente
- `DELETE /livros/:id` — Remove um livro

### ⭐ Favoritos

- `GET /favoritos` — Lista todos os favoritos
- `GET /favoritos/:id` — Busca um favorito pelo ID
- `POST /favoritos` — Adiciona um novo favorito
- `PATCH /favoritos/:id` — Atualiza um favorito existente
- `DELETE /favoritos/:id` — Remove um favorito

## 📬 Collection Postman

Você pode testar todas as rotas utilizando a [Collection do Postman](https://www.postman.com/) disponível neste repositório:  
[walberstore_server.postman_collection.json](./walberstore_server.postman_collection.json)

## 📄 Licença

Este projeto está sob a licença ISC.

---
Desenvolvido por [Walber Amorim](https://github.com/walberamorim)