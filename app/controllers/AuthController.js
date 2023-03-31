import UsersModel from '../models/UsersModel.js'
import JWT from 'jsonwebtoken'

const signin = async (req, res) => {
  const data = req.body

  try {
    const foundUser = await UsersModel.findOne({
      email: data.email,
      password: data.password,
    })

    if (!foundUser) return res.status(404).send('Usuário não encontrado')

    const token = generateJWT(foundUser)

    res.status(200).json({ msg: 'Seja bem vindo', token })
  } catch (e) {
    res.send(e.message)
  }
}

const signup = async (req, res) => {
  const data = req.body

  try {
    const createdUser = await UsersModel.create(data)

    const token = generateJWT(createdUser)

    res.status(200).json({ msg: 'Seja bem vindo', token })
  } catch (e) {
    res.send(e.message)
  }
}

// Função para gerar token
function generateJWT(data) {
  const payload = {
    id: data._id,
    name: data.name,
  }

  const token = JWT.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' })

  return token
}

export default { signin, signup }
