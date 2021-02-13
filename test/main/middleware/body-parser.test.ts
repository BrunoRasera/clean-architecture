import request from '@test/main/routes/node_modules/supertest'
import app from '@/main/config/app'

describe('Body parser middleware', () => {
  test('should parse body as json', async () => {
    app.post('/test_body_parser', (req, res) => {
      res.send(req.body)
    })
    await request(app)
      .post('/test_body_parser')
      .send({ name: 'Bruno' })
      .expect({ name: 'Bruno' })
  })
})
