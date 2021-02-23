import { dbContext } from '../db/DbContext'
// import { BadRequest } from '../utils/Errors'

class TransformerService {
  async getRobots(query = {}) {
    const roBots = await dbContext.Transformer.find(query)
    return roBots
  }

  async getOne(id) {
    const roBot = await dbContext.Transformer.findById(id)
    return roBot
  }

  async create(body) {
    const res = await dbContext.Transformer.create(body)
    return res
  }
}

export const transformerService = new TransformerService()
