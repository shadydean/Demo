import React, { useState } from 'react';
import VaultList from '../components/VaultList';
import AddVault from '../components/AddVault';
import VaultDetails from '../components/VaultDetails';

const sampleVaults = [
  { id: 1, name: "Credentials Vault 1", info: ["Credential info 1", "Credential info 2"] },
  { id: 2, name: "Credentials Vault 2", info: ["Credential info 3"] },
];

function Credentials() {
  const [vaults, setVaults] = useState(sampleVaults);
  const [selectedVault, setSelectedVault] = useState(null);

  const addVault = (vault) => {
    setVaults([...vaults, vault]);
  };

  const addVaultInfo = (id, info) => {
    setVaults(vaults.map(vault => vault.id === id ? { ...vault, info: [...vault.info, info] } : vault));
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl">Credentials Vault</h2>
      <AddVault addVault={addVault} />
      <VaultList vaults={vaults} setSelectedVault={setSelectedVault} />
      {selectedVault && <VaultDetails vault={selectedVault} addVaultInfo={addVaultInfo} />}
    </div>
  );
}

export default Credentials;
