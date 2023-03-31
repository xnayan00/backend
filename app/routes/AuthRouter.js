import { Router } from 'express'
import AuthController from '../controllers/AuthController.js'
import PasswordCrypt from '../middlewares/PasswordCrypt.js'

const AuthRouter = Router()

AuthRouter.post('/signin', PasswordCrypt, AuthController.signin)
AuthRouter.post('/signup', PasswordCrypt, AuthController.signup)

export default AuthRouter
