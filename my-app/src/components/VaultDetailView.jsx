import React from 'react';

const VaultDetailView = ({ vault }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Vault Details</h2>
      {vault ? (
        <ul>
          <li><strong>Vault ID:</strong> {vault.vaultId}</li>
          <li><strong>User ID:</strong> {vault.userId}</li>
          <li><strong>Account Number:</strong> {vault.accountNumber}</li>
          <li><strong>Account Name:</strong> {vault.accountName}</li>
          <li><strong>IFSC:</strong> {vault.IFSC}</li>
          <li><strong>User Name:</strong> {vault.userName}</li>
          <li><strong>Password:</strong> {vault.password}</li>
        </ul>
      ) : (
        <p>No vault selected.</p>
      )}
    </div>
  );
};

export default VaultDetailView;
