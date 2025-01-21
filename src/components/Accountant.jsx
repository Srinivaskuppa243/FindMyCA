import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Accountant = () => {
  const [accountants, setAccountants] = useState([]);
  const [searchQuer, setSearchQuer] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchAccountants = async () => {
      const response = await fetch('http://localhost:5003/accountant');
      const data = await response.json();
      setAccountants(data);
    };
    fetchAccountants();
  }, []);

  // Update suggestions as the user types
  useEffect(() => {
    if (searchQuer.trim() === '') {
      setSuggestions([]);
    } else {
      const filtered = accountants.filter((accountant) =>
        accountant.name.toLowerCase().includes(searchQuer.toLowerCase())
      );
      setSuggestions(filtered);
    }
  }, [searchQuer, accountants]);

  // Filtered list of accountants for the main display
  const filteredAccountants = accountants.filter((accountant) =>
    accountant.name.toLowerCase().includes(searchQuer.toLowerCase()) ||
    accountant.intro.toLowerCase().includes(searchQuer.toLowerCase())
  );

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-center text-4xl font-bold">Chartered Accountants</h1>

      {/* Search input */}
      <div className="mt-4 relative">
        <input
          type="text"
          className="p-2 border rounded w-full"
          placeholder="Search for Chartered Accountants..."
          value={searchQuer}
          onChange={(e) => setSearchQuer(e.target.value)}
        />

        {/* Search suggestions */}
        {suggestions.length > 0 && (
          <div className="absolute bg-white border rounded shadow mt-2 w-full max-h-40 overflow-y-auto z-10">
            {suggestions.map((suggestion) => (
              <Link
                key={suggestion.id}
                to={`/accountant/${suggestion.id}`}
                className="block px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => setSearchQuer(suggestion.name)}
              >
                {suggestion.name}
              </Link>
            ))}
          </div>
        )}
        {suggestions.length === 0 && searchQuer.trim() !== '' && (
          <div className="absolute bg-white border rounded shadow mt-2 w-full p-2 text-gray-500">
            No results found
          </div>
        )}
      </div>

      {/* Accountant list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {filteredAccountants.map((accountant) => (
          <div key={accountant.id} className="accountant border p-4 rounded-lg shadow">
            <img src={accountant.image} alt={accountant.name} className="text-center h-32 object-cover rounded-full" />
            <h2 className="text-xl font-semibold mt-2">{accountant.name}</h2>
            <p>{accountant.intro}</p>
            <p className="mt-2">Rating: {accountant.rating} ⭐️</p>
            <Link to={`/accountant/${accountant.id}`}>
              <button className="bg-black text-white p-2 rounded mt-2">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accountant;
