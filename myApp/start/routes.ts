/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import db from '@adonisjs/lucid/services/db'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})
router.get('/user', async () => {
  const data = await db.from('users').select('*')
  return data
})
