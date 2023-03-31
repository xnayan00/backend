import JWT from 'jsonwebtoken'

export default function (req, res, next) {
  const token = req.headers.authorization.split(' ')[1]

  if (!token)
    return res.status(401).send({
      auth: false,
      message: 'Token não informado',
    })

  JWT.verify(token, process.env.JWT_SECRET, function (err, decoded) {
    if (err) {
      return res.status(500).json({
        auth: false,
        message: 'Token inválido',
      })
    }
  })

  next()
}
