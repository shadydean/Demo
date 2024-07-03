import React from 'react';

const VaultList = ({ vaults, selectVault, deleteVault }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Bank Vaults</h2>
      <ul>
        {vaults.map(vault => (
          <li key={vault.vaultId} className="mb-2 flex justify-between items-center">
            <span onClick={() => selectVault(vault.vaultId)} className="cursor-pointer">{vault.accountName}</span>
            <button onClick={() => deleteVault(vault.vaultId)} className="bg-red-500 text-white p-2 rounded">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VaultList;
