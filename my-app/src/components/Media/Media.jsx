import React, { useState } from 'react';
import MediaVaultList from './MediaVaultList';
import AddMediaVaultForm from './AddMediaVaultForm';
import MediaDetailView from './MediaDetailView';

const Media = () => {
  const [mediaVaults, setMediaVaults] = useState([]);
  const [selectedMediaVault, setSelectedMediaVault] = useState(null);

  const addMediaVault = (mediaVault) => {
    setMediaVaults([...mediaVaults, mediaVault]);
  };

  const selectMediaVault = (vaultId) => {
    const mediaVault = mediaVaults.find(m => m.vaultId === vaultId);
    setSelectedMediaVault(mediaVault);
  };

  const deleteMediaVault = (vaultId) => {
    setMediaVaults(mediaVaults.filter(m => m.vaultId !== vaultId));
    setSelectedMediaVault(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Media Management</h1>
      <AddMediaVaultForm addMediaVault={addMediaVault} />
      <div className="flex">
        <div className="w-1/2">
          <MediaVaultList mediaVaults={mediaVaults} selectMediaVault={selectMediaVault} deleteMediaVault={deleteMediaVault} />
        </div>
        <div className="w-1/2">
          <MediaDetailView mediaVault={selectedMediaVault} />
        </div>
      </div>
    </div>
  );
};

export default Media;
