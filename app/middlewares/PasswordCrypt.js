import Crypto from 'crypto-js'

export default function (req, res, next) {
  req.body.password = Crypto.MD5(req.body.password).toString()

  next()
}
