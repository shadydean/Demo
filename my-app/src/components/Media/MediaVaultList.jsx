import React from 'react';

const MediaVaultList = ({ mediaVaults, selectMediaVault, deleteMediaVault }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Media Vaults</h2>
      <ul>
        {mediaVaults.map(mediaVault => (
          <li key={mediaVault.vaultId} className="mb-2 flex justify-between items-center">
            <span onClick={() => selectMediaVault(mediaVault.vaultId)} className="cursor-pointer">{mediaVault.mediaName}</span>
            <button onClick={() => deleteMediaVault(mediaVault.vaultId)} className="bg-red-500 text-white p-2 rounded">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MediaVaultList;
