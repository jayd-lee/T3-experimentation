import { z } from 'zod'

export const todoInput = z.string({
  required_error: 'Todo name required'
}).min(1).max(50)