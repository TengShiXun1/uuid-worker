import { AutoRouter } from 'itty-router'

import * as uuid from 'uuid'

const router = AutoRouter()

const Version = ["v1", "v4", "v6", "v7", "v8"]

Version.forEach((value, index) => {
  router.get(`/${value}`, () => new Response(uuid[value]()))
})

router.get('/nil', () => new Response(uuid.NIL));

router.get('/max', () => new Response(uuid.MAX));

router.get('/', () => new Response(uuid.v4()));

router.all('*', () => new Response('Not Found', { status: 404 }));

export default { ...router }