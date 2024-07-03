import React, { useState } from 'react';
import VaultList from '../components/VaultList';
import AddVaultForm from '../components/AddVaultForm';
import VaultDetailView from '../components/VaultDetailView';

const BankVault = () => {
  const [vaults, setVaults] = useState([]);
  const [selectedVault, setSelectedVault] = useState(null);

  const addVault = (vault) => {
    setVaults([...vaults, vault]);
  };

  const selectVault = (vaultId) => {
    const vault = vaults.find(v => v.vaultId === vaultId);
    setSelectedVault(vault);
  };

  const deleteVault = (vaultId) => {
    setVaults(vaults.filter(v => v.vaultId !== vaultId));
    setSelectedVault(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Bank Vault Management</h1>
      <AddVaultForm addVault={addVault} />
      <div className="flex">
        <div className="w-1/2">
          <VaultList vaults={vaults} selectVault={selectVault} deleteVault={deleteVault} />
        </div>
        <div className="w-1/2">
          <VaultDetailView vault={selectedVault} />
        </div>
      </div>
    </div>
  );
};

export default BankVault;
