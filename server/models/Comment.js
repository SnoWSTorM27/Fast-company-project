const {Schema, model} = require('mongoose')

const schema = new Schema({
  content: { type: String, required: true },
  pageId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }

}, {
  timestamps: { createdAt: 'created_at' } //Когда создана модель и обновлена
})

module.exports = model('Comment', schema)