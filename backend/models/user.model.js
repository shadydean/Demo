const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mobilenumber: { type: String, required: true },
  active: { type: Boolean, default: false },
  role: {
    type: String,
    default: 'user',
    enum: ['user', 'admin'],
  }
});

userSchema.set('toJSON', { getters: true, virtuals: false });

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;
