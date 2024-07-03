import React from 'react';

function VaultDetails({ vault, addVaultInfo }) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Vault Details: {vault.vaultId}</h3>
      <AddVaultInfo addVaultInfo={addVaultInfo} />
    </div>
  );
}

export default VaultDetails;
