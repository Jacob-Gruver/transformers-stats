// import { Auth0Provider } from '@bcwdev/auth0provider'
import { transformerService } from '../services/TransformerService'
import BaseController from '../utils/BaseController'

export class TransformerController extends BaseController {
  constructor() {
    super('api/autobots')
    this.router
    //   .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getRobots)
      .get('/:id', this.getOne)
  }

  async getRobots(req, res, next) {
    try {
      const roBots = await transformerService.getRobots(req.query)
      res.send(roBots)
    } catch (error) {
      next(error)
    }
  }

  async getOne(req, res, next) {
    try {
      const roBot = await transformerService.getOne(req.params.id)
      res.send(roBot)
    } catch (error) {
      next(error)
    }
  }
}
