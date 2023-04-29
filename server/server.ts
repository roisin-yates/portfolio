import express from 'express'
import { join } from 'node:path'

import contactRouter from './routes/email'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/v1/contact', contactRouter)
export default server
