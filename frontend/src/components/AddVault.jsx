import React, { useState } from 'react';

function AddVault({ addVault }) {
  const [vaultId, setVaultId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addVault({ vaultId });
    setVaultId('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h3 className="text-xl font-bold mb-2">Add Vault</h3>
      <input
        type="text"
        className="border p-2 rounded mb-2"
        placeholder="Vault ID"
        value={vaultId}
        onChange={(e) => setVaultId(e.target.value)}
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Vault
      </button>
    </form>
  );
}

export default AddVault;
