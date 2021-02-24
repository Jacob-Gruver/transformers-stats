import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Transformer = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    form: { type: String, required: true }
    // strength: { type: Number, required: true },
    // intelligence: { type: Number, required: true },
    // speed: { type: Number, required: true },
    // endurance: { type: Number, required: true },
    // rank: { type: Number, required: true },
    // courage: { type: Number, required: true },
    // firepower: { type: Number, required: true },
    // skill: { type: Number, required: true },
    // allegiance: { type: Boolean, required: true }
    // imgURL: { type: }
    // creatorId: { type: String, ref: 'Account', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

// Value.virtual('creator', {
//   localField: 'creatorId',
//   ref: 'Account',
//   foreignField: '_id',
//   justOne: true
// })

export default Transformer
