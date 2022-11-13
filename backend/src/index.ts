import fastify from 'fastify'
import { validateObject } from 'utils'

const server = fastify()

server.get('/ping', async (request, reply) => {
  return 'pong\n'
})

server.post('/', async (request, reply) => {
  return request.body;
})

server.post('/errors', async (request, reply) => {
  const req = (request.body as any);

  const validationErrors = validateObject(req);
  if (validationErrors.length < 1) {
    return 'validation succeeded'
  }
  return JSON.stringify({ message: 'validation failed', error: validationErrors })
})

server.listen({ port: 3000, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
