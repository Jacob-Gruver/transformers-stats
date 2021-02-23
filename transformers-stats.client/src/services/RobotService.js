import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class RobotService {
  async getRobots() {
    try {
      const res = await api.get('/transformers')
      AppState.transformers = res.data
    } catch (error) {
      logger.error(error)
    }
  }
}

export const robotService = new RobotService()
