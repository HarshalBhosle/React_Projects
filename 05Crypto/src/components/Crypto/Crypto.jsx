import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Crypto() {
  const [cryptos, setCryptos] = useState(null);
  const [select, setSelect] = useState(null);

  useEffect(() => {
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1';

    axios.get(url, {
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-t5Vin6SbF9SCvLBgc7DfiQh3', // 🔑 Your API key
      }
    })
    .then((response) => {
      setCryptos(response.data);
    })
    .catch((error) => {
      console.error('Error fetching cryptos:', error);
    });
  }, []);

  return (
    <>
      <div className="min-h-[520px] bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
        <div className="bg-gray-800 text-white rounded-xl shadow-xl p-6 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Select a Cryptocurrency</h2>

          <select
            name="cryptocurrency"
            id="cryptocurrency"
            className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            onChange={(e) => {
              const c = cryptos?.find((x) => x.id === e.target.value);
              setSelect(c);
            }}
          >
            <option value="">-- Choose a Coin --</option>
            {cryptos &&
              cryptos.map((crypto) => (
                <option key={crypto.id} value={crypto.id}>
                  {crypto.name}
                </option>
              ))
            }
          </select>

          {select && (
            <div className="mt-6 text-center">
              <img
                src={select.image}
                alt={select.name}
                className="mx-auto w-12 h-12 mb-2 rounded-full"
              />
              <p className="text-lg font-semibold text-cyan-300">
                {select.name} ({select.symbol.toUpperCase()}): ${select.current_price}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Crypto;