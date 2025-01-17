/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import JobsController from '#controllers/jobs_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => 'It works!')

router.get('/getOpenJobsInfos/:companyName', [JobsController, 'getOpenJobs'])

