import React, { useState } from 'react';
import CredentialsList from './CredentialsList';
import AddCredentialVaultForm from './AddCredentialVaultForm';
import CredentialDetailView from './CredentialDetailView';

const Credentials = () => {
  const [credentials, setCredentials] = useState([]);
  const [selectedCredential, setSelectedCredential] = useState(null);

  const addCredential = (credential) => {
    setCredentials([...credentials, credential]);
  };

  const selectCredential = (vaultId) => {
    const credential = credentials.find(c => c.vaultId === vaultId);
    setSelectedCredential(credential);
  };

  const deleteCredential = (vaultId) => {
    setCredentials(credentials.filter(c => c.vaultId !== vaultId));
    setSelectedCredential(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Credentials Management</h1>
      <AddCredentialVaultForm addCredential={addCredential} />
      <div className="flex">
        <div className="w-1/2">
          <CredentialsList credentials={credentials} selectCredential={selectCredential} deleteCredential={deleteCredential} />
        </div>
        <div className="w-1/2">
          <CredentialDetailView credential={selectedCredential} />
        </div>
      </div>
    </div>
  );
};

export default Credentials;
