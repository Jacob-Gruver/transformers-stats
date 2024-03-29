import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

const tfApi = '/api/transformers'

class RobotService {
  async getRobots() {
    try {
      const res = await api.get(tfApi)
      AppState.transformers = res.data
      logger.log('logging from the Robot service which gets all', res.data, 'Appstate =>', AppState.transformers)
      // NOTE looks all good!
    } catch (error) {
      logger.error(error)
    }
  }

  async addArobot(newTf) {
    try {
      const res = await api.post(tfApi + '/', newTf)
      AppState.transformers = res.data
      return res.data.id
    } catch (error) {
      logger.error(error)
    }
  }

  async getOne(id) {
    try {
      const res = await api.get(tfApi + '/' + id)
      AppState.transformer = res.data
      logger.log('logging from get one', AppState.transformer, 'result =>', res.data)
    } catch (error) {
      logger.error(error)
    }
  }
}

export const robotService = new RobotService()
