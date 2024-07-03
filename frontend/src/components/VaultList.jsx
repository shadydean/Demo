import React from 'react';

function VaultList({ vaults, setSelectedVault }) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Vaults</h3>
      <ul>
        {vaults.map((vault) => (
          <li
            key={vault._id}
            className="border p-2 mb-2 cursor-pointer"
            onClick={() => setSelectedVault(vault._id)}
          >
            {vault.vaultId}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VaultList;
