const BankVaultModel = require('../models/bankvault.model');
const { encrypt, decrypt } = require('../utils/encrypt');

class BankVaultController {
  async bankInfoSave(req, res) {
    console.log('Saving bank info:', req.body); // Logging
    try {
      const { vaultId, accountNumber, accountName, IFSC, userName, password } = req.body;
      const existingVault = await BankVaultModel.findOne({ vaultId });
      
      if (existingVault) {
        return res.status(409).json({ message: 'Vault ID already exists' });
      }

      const encryptedAccountNumber = encrypt(accountNumber);
      const encryptedAccountName = encrypt(accountName);
      const encryptedUserName = encrypt(userName);
      const encryptedPassword = encrypt(password);

      const newBankInfo = new BankVaultModel({
        vaultId,
        userId: req.user.id,
        accountNumber: encryptedAccountNumber,
        accountName: encryptedAccountName,
        IFSC,
        userName: encryptedUserName,
        password: encryptedPassword,
      });

      const savedBankInfo = await newBankInfo.save();
      res.status(201).json(savedBankInfo);
    } catch (err) {
      console.error('Error saving bank info:', err); // Logging
      res.status(500).json({ message: 'Server error' });
    }
  }

  async getBankInfo(req, res) {
    console.log('Fetching bank info for user:', req.user.id); // Logging
    try {
      const bankInfo = await BankVaultModel.find({ userId: req.user.id });

      const decryptedBankInfo = bankInfo.map((info) => ({
        ...info.toObject(),
        accountNumber: decrypt(info.accountNumber),
        accountName: decrypt(info.accountName),
        userName: decrypt(info.userName),
        password: decrypt(info.password),
      }));

      res.json(decryptedBankInfo);
    } catch (err) {
      console.error('Error fetching bank info:', err); // Logging
      res.status(500).json({ message: 'Server error' });
    }
  }

  async getBankInfoById(req, res) {
    console.log('Fetching bank info by ID:', req.params.id); // Logging
    try {
      const bankInfo = await BankVaultModel.findById(req.params.id);

      if (!bankInfo) return res.status(404).json({ message: 'Bank information not found' });

      const decryptedBankInfo = {
        ...bankInfo.toObject(),
        accountNumber: decrypt(bankInfo.accountNumber),
        accountName: decrypt(bankInfo.accountName),
        userName: decrypt(bankInfo.userName),
        password: decrypt(bankInfo.password),
      };

      res.json(decryptedBankInfo);
    } catch (err) {
      console.error('Error fetching bank info by ID:', err); // Logging
      res.status(500).json({ message: 'Server error' });
    }
  }

  async bankInfoEditSave(req, res) {
    console.log('Editing bank info for ID:', req.params.id); // Logging
    try {
      const updatedBankInfo = await BankVaultModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

      if (!updatedBankInfo) {
        return res.status(404).json({ message: 'Bank information not found' });
      }

      res.json(updatedBankInfo);
    } catch (err) {
      console.error('Error editing bank info:', err); // Logging
      res.status(500).json({ message: 'Server error' });
    }
  }

  async bankInfoDelete(req, res) {
    console.log('Deleting bank info for ID:', req.params.id); // Logging
    try {
      const deletedBankInfo = await BankVaultModel.findByIdAndDelete(req.params.id);

      if (!deletedBankInfo) return res.status(404).json({ message: 'Bank information not found' });

      res.json({ message: 'Bank information deleted successfully' });
    } catch (err) {
      console.error('Error deleting bank info:', err); // Logging
      res.status(500).json({ message: 'Server error' });
    }
  }
}

module.exports = new BankVaultController();
