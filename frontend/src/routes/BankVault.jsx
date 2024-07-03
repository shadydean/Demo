import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddVault from '../components/AddVault';
import AddVaultInfo from '../components/AddVaultInfo';

function BankVault() {
  const [vaults, setVaults] = useState([]);
  const [selectedVault, setSelectedVault] = useState(null);
  const [vaultInfo, setVaultInfo] = useState([]);

  useEffect(() => {
    fetchVaults();
  }, []);

  const fetchVaults = async () => {
    try {
      const response = await axios.get('http://localhost:4321/api/bank');
      setVaults(response.data);
    } catch (error) {
      console.error('Failed to fetch vaults', error);
    }
  };

  const handleVaultChange = async (e) => {
    const vaultId = e.target.value;
    setSelectedVault(vaultId);
    if (vaultId) {
      try {
        const response = await axios.get(`http://localhost:4321/api/bank/${vaultId}`);
        setVaultInfo(response.data);
      } catch (error) {
        console.error('Failed to fetch vault info', error);
      }
    } else {
      setVaultInfo([]);
    }
  };

  const addVault = async (vault) => {
    try {
      const response = await axios.post('http://localhost:4321/api/bank', vault);
      setVaults([...vaults, response.data]);
    } catch (error) {
      console.error('Failed to add vault', error);
    }
  };

  const addVaultInfo = async (info) => {
    try {
      const response = await axios.put(`http://localhost:4321/api/bank/${selectedVault}`, info);
      setVaultInfo([...vaultInfo, response.data]);
    } catch (error) {
      console.error('Failed to add vault info', error);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Bank Vault</h2>
      <div className="mb-4">
        <label htmlFor="vault-select" className="block mb-2">Select a Vault:</label>
        <select
          id="vault-select"
          className="border p-2 rounded"
          value={selectedVault || ''}
          onChange={handleVaultChange}
        >
          <option value="">Select a vault</option>
          {vaults.map((vault) => (
            <option key={vault._id} value={vault._id}>
              {vault.vaultId}
            </option>
          ))}
        </select>
      </div>
      {selectedVault && (
        <>
          <h3 className="text-xl font-bold mb-4">Vault Information</h3>
          <table className="w-full mb-4 border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Account Number</th>
                <th className="border p-2">Account Name</th>
                <th className="border p-2">IFSC</th>
                <th className="border p-2">User Name</th>
                <th className="border p-2">Password</th>
              </tr>
            </thead>
            <tbody>
              {vaultInfo.map((info) => (
                <tr key={info._id}>
                  <td className="border p-2">{info.accountNumber}</td>
                  <td className="border p-2">{info.accountName}</td>
                  <td className="border p-2">{info.IFSC}</td>
                  <td className="border p-2">{info.userName}</td>
                  <td className="border p-2">{info.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <AddVaultInfo addVaultInfo={addVaultInfo} />
        </>
      )}
      <AddVault addVault={addVault} />
    </div>
  );
}

export default BankVault;
