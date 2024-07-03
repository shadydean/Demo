const mongoose = require('mongoose');
const { encrypt, decrypt } = require('../utils/encrypt');

const bankVaultSchema = new mongoose.Schema({
  vaultId: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  accountNumber: { type: String, required: true, unique: true },
  accountName: { type: String, required: true },
  IFSC: { type: String, required: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
});

const BankVaultModel = mongoose.model('BankVault', bankVaultSchema);
module.exports = BankVaultModel;
