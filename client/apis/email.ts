import request from 'superagent'

export async function sendEmail(name: string, email: string, message: string) {
  try {
    const response = await request
      .post('/v1/contact')
      .send({ name, email, message })
    return response.body
  } catch (error) {
    console.error('Error sending reminder email:', error)
  }
}
