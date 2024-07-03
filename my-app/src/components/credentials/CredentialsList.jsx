import React from 'react';

const CredentialsList = ({ credentials, selectCredential, deleteCredential }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Credentials Vaults</h2>
      <ul>
        {credentials.map(credential => (
          <li key={credential.vaultId} className="mb-2 flex justify-between items-center">
            <span onClick={() => selectCredential(credential.vaultId)} className="cursor-pointer">{credential.username}</span>
            <button onClick={() => deleteCredential(credential.vaultId)} className="bg-red-500 text-white p-2 rounded">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CredentialsList;
