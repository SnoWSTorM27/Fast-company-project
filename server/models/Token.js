const {Schema, model} = require('mongoose')

const schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  refreshToken: { type: String, required: true }
}, {
  timestamps: true //Когда создана модель и обновлена
})

module.exports = model('Token', schema)