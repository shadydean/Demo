import React, { useState } from 'react';

const AddMediaVaultForm = ({ addMediaVault }) => {
  const [mediaData, setMediaData] = useState({
    vaultId: '',
    userId: '',
    mediaName: '',
    mediaType: 'image',
    mediaFile: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMediaData({
      ...mediaData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setMediaData({
      ...mediaData,
      mediaFile: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMediaVault(mediaData);
    setMediaData({
      vaultId: '',
      userId: '',
      mediaName: '',
      mediaType: 'image',
      mediaFile: null,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      {Object.keys(mediaData).map(key => {
        if (key === 'mediaType') {
          return (
            <div key={key} className="mb-2">
              <label className="mr-2">Media Type:</label>
              <label className="mr-2">
                <input
                  type="radio"
                  name={key}
                  value="image"
                  checked={mediaData.mediaType === 'image'}
                  onChange={handleChange}
                />
                Image
              </label>
              <label className="mr-2">
                <input
                  type="radio"
                  name={key}
                  value="video"
                  checked={mediaData.mediaType === 'video'}
                  onChange={handleChange}
                />
                Video
              </label>
              <label className="mr-2">
                <input
                  type="radio"
                  name={key}
                  value="audio"
                  checked={mediaData.mediaType === 'audio'}
                  onChange={handleChange}
                />
                Audio
              </label>
            </div>
          );
        }
        if (key === 'mediaFile') {
          return (
            <div key={key} className="mb-2">
              <label className="mr-2">Upload {mediaData.mediaType.charAt(0).toUpperCase() + mediaData.mediaType.slice(1)}:</label>
              <input type="file" onChange={handleFileChange} />
            </div>
          );
        }
        return (
          <input
            key={key}
            type="text"
            name={key}
            value={mediaData[key]}
            onChange={handleChange}
            placeholder={key}
            className="mb-2 p-2 border rounded w-full"
          />
        );
      })}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Media Vault</button>
    </form>
  );
};

export default AddMediaVaultForm;
