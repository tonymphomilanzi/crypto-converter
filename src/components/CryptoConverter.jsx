import React, { useState, useEffect } from 'react'
import { fetchTopCoins, fetchPrice } from '../api/coinGecko'
import CoinSelector from './CoinSelector'
import { RefreshCw } from 'lucide-react'

export default function CryptoConverter() {
  const [coins, setCoins] = useState([])
  const [fromCoin, setFromCoin] = useState('bitcoin')
  const [amount, setAmount] = useState(1)
  const [toCurrency, setToCurrency] = useState('usd')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchTopCoins().then(setCoins)
  }, [])

  const handleConvert = async () => {
    setLoading(true)
    const data = await fetchPrice(fromCoin, toCurrency)
    const price = data[fromCoin]?.[toCurrency]
    if (price) {
      setResult(price * amount)
    } else {
      setResult(null)
    }
    setLoading(false)
  }

  const switchCurrencies = () => {
    const temp = fromCoin
    setFromCoin(toCurrency)
    setToCurrency(temp)
  }

  return (
    <div className="min-h-screen text-white flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-[#121212] p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-700">
        <h2 className="text-3xl font-bold mb-6 text-center tracking-wide">
          Crypto Converter
        </h2>

        <div className="mb-4">
          <label className="block text-sm mb-1">From:</label>
          <CoinSelector coins={coins} selectedCoin={fromCoin} onChange={setFromCoin} />
        </div>

        <div className="flex justify-center mb-4">
          <button
            onClick={switchCurrencies}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-700 hover:bg-gray-600 transition"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Switch</span>
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">To:</label>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="mwk">MWK</option>
            <option value="btc">BTC</option>
            <option value="eth">ETH</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Amount:</label>
          <input
            type="number"
            className="w-full p-2 rounded-md bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button
          onClick={handleConvert}
          className="w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-lg font-semibold text-white transition duration-200"
        >
          {loading ? (
            <div className="flex justify-center items-center gap-2">
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              Converting...
            </div>
          ) : (
            'Convert'
          )}
        </button>

        {result && (
          <div className="mt-6 text-center text-green-400 text-xl font-bold">
            {amount} {fromCoin.toUpperCase()} ≈ {result.toFixed(4)} {toCurrency.toUpperCase()}
          </div>
        )}
      </div>
    </div>
  )
}
