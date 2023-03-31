import Express from 'express'
import Routes from '../app/routes/index.js'
import StartDB from './database.js'

const App = Express() // Instanciando Express

StartDB() // Iniciando o banco de dados

App.use(Express.json()) // Habilitando o recebimento de JSON nas requisições
App.use(Express.static('/app/public/images')) // Caminho padrão de arquivos estáticos
App.use(Routes)

export default App
