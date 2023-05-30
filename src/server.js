require("express-async-errors");
//const migrationsRun = require("./database/sqlite/migrations");

const AppError = require("./utils/AppError")
const express = require("express"); //importação do módulo express - guardando em uma constante

const routes = require("./routes");


const app = express(); //inicialização do express
app.use(express.json())

app.use(routes);


app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    });
  }

  console.error(error);

  return response.status(500).json({
    status: "error",
    message: "Internal server error"
  });
})

//cria-se uma variável e armazena o número da porta que o servidor vai ser iniciado
const PORT = 3333;

//função listen -> escutar, passa  a variavel porta seguido de uma função que após iniciar essa execução, a função retorna uma mensagem dizendo que o servidor está rodando na porta que foi informada.
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`)); 
