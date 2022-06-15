# StoreSmith


# Contexto
Loja de itens medievais, no formato de uma API, utilizando Typescript.

Usando as camadas da aplicação (Models, Service e Controllers),
sendo possível realizar as operações que se pode fazer em um banco de dados MySQL: (CRUD)Criação, Leitura, Atualização e Exclusão.

## Técnologias usadas

> Desenvolvido usando: NodeJS, ExpressJS, TypeScript, MYSQL, ES6, JWT authentication

## Instalando Dependências


```bash
cd StoreSmith-API/ 
npm install
``` 

## Criando o Banco de Dados (Opcional)

* Abra o arquivo StoreSmith.sql e execute as querys para preencher o banco com valores iniciais.  

## Criando gerenciamento de ambiente

* Crie um arquivo na raiz do projeto chamado '.env' e preencha com suas variáveis de ambiente.

```
PORT=numeroDaPorta
MYSQL_HOST=host
MYSQL_USER=userSQL
MYSQL_PASSWORD=passwordSQL
```


## Executando aplicação

* Para rodar o back-end:

  ```
  npm start
  ```
