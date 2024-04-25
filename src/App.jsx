import React, { useState } from 'react';
import axios from 'axios';

export function App() {
  const [taxId, setTaxId] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [requestAmount, setRequestAmount] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    try {
      const response = await axios.post('https://6heqmtw8dg.execute-api.us-east-2.amazonaws.com/loan/', {
        tax_id: taxId,
        business_name: businessName,
        amount: requestAmount
      });
      setResponse(response.data); 
      setError(null); 
    } catch (error) {
      setError('Error sending data'); 
      setResponse(null);
    }
  };

  return (
    <div>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="tax_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your tax id</label>
          <input type="text" id="tax_id" value={taxId} onChange={(e) => setTaxId(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div className="mb-5">
          <label htmlFor="business_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Business Name</label>
          <input type="text" id="business_name" value={businessName} onChange={(e) => setBusinessName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div className="mb-5">
          <label htmlFor="request_amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Request Amount</label>
          <input type="number" id="request_amount" value={requestAmount} onChange={(e) => setRequestAmount(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>

      {response && (
        <div className="mt-5">
          <p className="text-white">Result: {response.message}</p>
        </div>
      )}

      {error && (
        <div className="mt-5 text-white">
          <p>Error: {error}</p>
        </div>
      )}
    </div>
  );
}

