# renda-per-capita

Aplicação web básica que calcula a renda per capita e localiza o endereço do usuário através de CEP API. Código desenvolvido como requisito para um processo seletivo.

## Como rodar a aplicação

### Clone o repositório para a sua máquina local

### Instale as dependências do frontend e do backend

- **No backend:**

```bash
cd server
yarn install
```

ou

```bash
cd server
npm install
```

- **No frontend:**

```bash
cd client
yarn install
```

ou

```bash
cd client
npm install
```

### No diretório "server", copie o conteúdo do arquivo .env.example para um novo arquivo .env

```bash
cd server
cp .env.example .env
```

OBS 1: a porta padrão do backend é 8081, caso você deseje alterá-la no arquivo .env, altere também para o mesmo valor no arquivo client/config.js

OBS 2: a porta padrão do frontend em React é 3000

### Execute, simultaneamente, o frontend e o backend

- **No backend:**

```bash
cd server
node src/index.js
```

ou, caso use nodemon:

```bash
cd server
nodemon
```

- **No frontend:**

```bash
cd client
yarn start
```
