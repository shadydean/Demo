import React, { useState } from 'react';

const AddCredentialVaultForm = ({ addCredential }) => {
  const [credentialData, setCredentialData] = useState({
    vaultId: '',
    userId: '',
    username: '',
    pass: '',
    email: ''
  });

  const handleChange = (e) => {
    setCredentialData({
      ...credentialData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCredential(credentialData);
    setCredentialData({
      vaultId: '',
      userId: '',
      username: '',
      pass: '',
      email: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      {Object.keys(credentialData).map(key => (
        <input
          key={key}
          type={key === 'pass' ? 'password' : 'text'}
          name={key}
          value={credentialData[key]}
          onChange={handleChange}
          placeholder={key}
          className="mb-2 p-2 border rounded w-full"
        />
      ))}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Credential Vault</button>
    </form>
  );
};

export default AddCredentialVaultForm;
