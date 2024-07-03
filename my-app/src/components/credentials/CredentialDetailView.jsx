import React from 'react';

const CredentialDetailView = ({ credential }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Credential Vault Details</h2>
      {credential ? (
        <ul>
          <li><strong>Vault ID:</strong> {credential.vaultId}</li>
          <li><strong>User ID:</strong> {credential.userId}</li>
          <li><strong>Username:</strong> {credential.username}</li>
          <li><strong>Password:</strong> {credential.pass}</li>
          <li><strong>Email:</strong> {credential.email}</li>
        </ul>
      ) : (
        <p>No credential vault selected.</p>
      )}
    </div>
  );
};

export default CredentialDetailView;
