import { auth } from '../helper/auth.js'
import { Router } from 'express'
import {
  getTasks,
  createTask,
  removeTask
} from '../controllers/TaskController.js'

const router = Router()

router.get('/', getTasks)
router.post('/', auth, createTask)
router.delete('/:id', auth, removeTask)

export default router 