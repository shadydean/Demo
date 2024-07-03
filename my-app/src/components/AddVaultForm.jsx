import React, { useState } from 'react';

const AddVaultForm = ({ addVault }) => {
  const [vaultData, setVaultData] = useState({
    vaultId: '',
    userId: '',
    accountNumber: '',
    accountName: '',
    IFSC: '',
    userName: '',
    password: ''
  });

  const handleChange = (e) => {
    setVaultData({
      ...vaultData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addVault(vaultData);
    setVaultData({
      vaultId: '',
      userId: '',
      accountNumber: '',
      accountName: '',
      IFSC: '',
      userName: '',
      password: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      {Object.keys(vaultData).map(key => (
        <input
          key={key}
          type="text"
          name={key}
          value={vaultData[key]}
          onChange={handleChange}
          placeholder={key}
          className="mb-2 p-2 border rounded w-full"
        />
      ))}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Vault</button>
    </form>
  );
};

export default AddVaultForm;
