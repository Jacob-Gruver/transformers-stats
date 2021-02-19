// import { Auth0Provider } from '@bcwdev/auth0provider'
import { transformerService } from '../services/TransformerService'
import BaseController from '../utils/BaseController'

export class TransformerController extends BaseController {
  constructor() {
    super('autobots')
    this.router
    //   .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getRobots)
  }

  async getRobots(req, res, next) {
    try {
      const autoBots = await transformerService.getRobots(req.query)
      res.send(autoBots)
    } catch (error) {
      next(error)
    }
  }
}
