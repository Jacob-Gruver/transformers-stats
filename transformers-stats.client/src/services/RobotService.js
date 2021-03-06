import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

const tfApi = '/api/transformers'

class RobotService {
  async getRobots() {
    try {
      const res = await api.get(tfApi)
      AppState.transformers = res.data
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
      logger.log(AppState.transformer)
      AppState.transformer = res.data
    } catch (error) {
      logger.error(error)
    }
  }
}

export const robotService = new RobotService()
