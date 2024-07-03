import React from 'react';

const MediaDetailView = ({ mediaVault }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Media Vault Details</h2>
      {mediaVault ? (
        <ul>
          <li><strong>Vault ID:</strong> {mediaVault.vaultId}</li>
          <li><strong>User ID:</strong> {mediaVault.userId}</li>
          <li><strong>Media Name:</strong> {mediaVault.mediaName}</li>
          <li><strong>Media Type:</strong> {mediaVault.mediaType}</li>
          <li><strong>Media:</strong> {mediaVault.mediaFile ? URL.createObjectURL(mediaVault.mediaFile) : 'No file uploaded'}</li>
        </ul>
      ) : (
        <p>No media vault selected.</p>
      )}
    </div>
  );
};

export default MediaDetailView;
