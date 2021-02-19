import mongoose from 'mongoose'
import ValueSchema from '../models/Value'
import AccountSchema from '../models/Account'
import TransformerSchema from '../models/Transformer'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Transformer = mongoose.model('Transformer', TransformerSchema);
}

export const dbContext = new DbContext()
