import Server from './config/server.js'

Server.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta:  ${process.env.PORT}`)
})
