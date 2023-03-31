import Mongoose from 'mongoose'
import Env from 'dotenv'

Mongoose.set('strictQuery', false)

Env.config()

var DB_USERNAME = process.env.DB_USERNAME
var DB_PASSWORD = process.env.DB_PASSWORD
var DB_HOST = process.env.DB_HOST
var DB_NAME = process.env.DB_NAME

const startDB = async () => {
  await Mongoose.connect(`mongodb://${DB_HOST}/${DB_NAME}`)
    .then(() => {
      console.log('Conexão com o banco de dados estabelecida!')
    })
    .catch(error => {
      console.log('Erro ao conectar no banco de dados: ', error.message)
    })
}

export default startDB

// If you have a username and a password
// Mongoose.connect(
//   `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
// )
