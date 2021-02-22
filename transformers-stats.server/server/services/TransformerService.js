import { dbContext } from '../db/DbContext'
// import { BadRequest } from '../utils/Errors'

class TransformerService {
  async getRobots(query = {}) {
    const roBots = await dbContext.Transformer.find(query)
    return roBots
  }

  async getOne(id) {
    const roBot = await dbContext.Transformer.findById(id)
    // if (!value) {
    //   throw new BadRequest('Invalid Id')
    // }
    return roBot
  }
}

export const transformerService = new TransformerService()
