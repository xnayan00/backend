import { Router } from 'express'

// Importando rotas
import AuthRouter from './AuthRouter.js'

const router = Router()

// Adicionando rotas na instancia Router do Express
router.use('/auth', AuthRouter)

export default router
