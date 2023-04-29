import express from 'express'
import { Response, Request } from 'express'
import { MailService } from '@sendgrid/mail'
import dotenv from 'dotenv'
const sgMail = require('@sendgrid/mail')

const router = express.Router()
dotenv.config()

router.post('/', (req: Request, res: Response) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  try {
    const { name, email, message } = req.body
    const msg = {
      to: process.env.MY_EMAIL,
      from: process.env.MY_SENDING_EMAIL,
      subject: 'New contact form submission',
      text: `Name: ${name} Email: ${email} Message: ${message}`,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    }
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error: MailService) => {
        console.error(error)
      })
    res.sendStatus(200)
  } catch (err) {
    console.log(err)
  }
})

export default router
