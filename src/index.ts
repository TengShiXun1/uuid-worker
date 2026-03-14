import { AutoRouter } from 'itty-router'
import * as uuid from 'uuid'

const router = AutoRouter()

router.get('/:version', ({ params }) => {
  const v = params.version;
  
  if (uuid[v]) {
    return new Response(uuid[v]());
  }
  
  if (v === 'nil') return new Response(uuid.NIL);
  if (v === 'max') return new Response(uuid.MAX);
})

router.get('/', () => new Response(uuid.v4()));

router.all('*', () => new Response('Not Found', { status: 404 }));

export default { ...router }