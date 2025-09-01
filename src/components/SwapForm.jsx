'use client';
import React, { useState } from 'react';

const SwapForm = () => {
  const [showCustom, setShowCustom] = useState(false);
  const [recipient, setRecipient] = useState('');
  const [fromAmount, setFromAmount] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleMaxClick = () => {
    // Placeholder for max amount logic
    setFromAmount('999.99');
  };

  return (
    <div className="max-w-md mx-auto bg-gray-800 rounded-2xl p-6 space-y-4">
      {/* Advanced Settings */}
      <div className="flex justify-end">
        <button 
          className="flex items-center space-x-2 text-gray-400 hover:text-white text-sm transition-colors" 
          type="button"
          onClick={() => setShowAdvanced(!showAdvanced)}
        >
          <span>Advanced Settings</span>
          <div className="w-5 h-5 rounded-full border border-gray-600 flex items-center justify-center hover:border-gray-400 transition-colors">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
            </svg>
          </div>
        </button>
      </div>

      {/* Advanced Settings Panel */}
      {showAdvanced && (
        <div className="bg-gray-700 rounded-xl p-4 space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between">
            <span className="text-white font-medium">Slippage Tolerance</span>
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg text-sm transition-colors">
              0.1%
            </button>
            <button className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm transition-colors">
              0.5%
            </button>
            <button className="px-3 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg text-sm transition-colors">
              1.0%
            </button>
            <input 
              type="text" 
              placeholder="Custom"
              className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 text-sm outline-none focus:border-blue-500"
            />
          </div>
        </div>
      )}

      {/* From Section */}
      <div className="bg-gray-700 rounded-xl p-4 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-white font-medium">From</span>
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>Balance: 0.00</span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-600 rounded-full cursor-pointer hover:bg-gray-500 transition-colors" />
          <div className="flex-1">
            <button className="flex items-center justify-between w-full hover:bg-gray-600 rounded-lg p-2 transition-colors">
              <span className="text-gray-400">Select Token</span>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <input
            type="text"
            placeholder="0.00"
            value={fromAmount}
            onChange={(e) => setFromAmount(e.target.value)}
            className="bg-transparent text-white text-2xl font-light placeholder-gray-500 outline-none flex-1"
          />
          <button 
            className="bg-gray-600 text-gray-300 px-3 py-1 rounded-md text-sm hover:bg-gray-500 transition-colors" 
            type="button"
            onClick={handleMaxClick}
          >
            Max
          </button>
        </div>
      </div>

      {/* Swap Arrow */}
      <div className="flex justify-center">
        <button className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors group">
          <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
          </svg>
        </button>
      </div>

      {/* Custom Address Toggle */}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setShowCustom(!showCustom)}
          className="flex items-center space-x-2 text-gray-400 hover:text-white text-sm transition-colors"
        >
          <span>Custom Address</span>
          {/* Toggle Switch */}
          <div className={`relative w-10 h-6 rounded-full transition-colors duration-200 ${showCustom ? 'bg-green-600' : 'bg-gray-600'}`}>
            <div
              className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
                showCustom ? 'translate-x-4' : 'translate-x-0'
              }`}
            />
          </div>
        </button>
      </div>

      {/* Custom Address Input Section */}
      {showCustom && (
        <div className="bg-gray-700 rounded-xl p-4 space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between">
            <label htmlFor="recipient" className="text-white font-medium">
              Recipient Address
            </label>
          </div>
          
          <input
            id="recipient"
            type="text"
            placeholder="Enter wallet address (0x...) or ENS name"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="w-full bg-gray-800 border border-gray-600 rounded-lg p-3 text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
          />
          
          <p className="text-xs text-gray-400">
            Tokens will be sent to this address instead of your connected wallet.
          </p>
        </div>
      )}

      {/* To Section */}
      <div className="bg-gray-700 rounded-xl p-4 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-white font-medium">To</span>
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>Balance: 0.00</span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-600 rounded-full cursor-pointer hover:bg-gray-500 transition-colors" />
          <div className="flex-1">
            <button className="flex items-center justify-between w-full hover:bg-gray-600 rounded-lg p-2 transition-colors">
              <span className="text-gray-400">Select Token</span>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-500 text-2xl font-light">0.00</span>
          <span className="text-gray-500 text-sm">~$0.00</span>
        </div>
      </div>

      {/* Transaction Info */}
      <div className="bg-gray-700 rounded-xl p-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Exchange Rate</span>
          <span className="text-white">1 ETH = 2,500 USDC</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Network Fee</span>
          <span className="text-white">~$12.50</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Route</span>
          <span className="text-white">ETH → USDC</span>
        </div>
      </div>

      {/* Connect Wallet / Swap Button */}
      <button 
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-medium transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed" 
        type="button"
        disabled={!fromAmount}
      >
        {fromAmount ? 'Swap Tokens' : 'Enter Amount'}
      </button>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default SwapForm;