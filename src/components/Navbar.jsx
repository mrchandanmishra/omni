import React, { useState, useEffect } from "react";

// Network Selection Modal Component
const NetworkModal = ({ isOpen, onClose, onSelectNetwork, currentNetwork }) => {
  const networkOptions = [
    {
      name: 'Ethereum',
      chainId: '0x1',
      id: 'ethereum',
      icon: '⟠',
      rpcUrl: 'https://mainnet.infura.io/v3/YOUR_INFURA_KEY',
      blockExplorer: 'https://etherscan.io'
    },
    {
      name: 'Polygon',
      chainId: '0x89',
      id: 'polygon',
      icon: '🟣',
      rpcUrl: 'https://polygon-rpc.com',
      blockExplorer: 'https://polygonscan.com'
    },
    {
      name: 'BSC',
      chainId: '0x38',
      id: 'bsc',
      icon: '🟡',
      rpcUrl: 'https://bsc-dataseed.binance.org',
      blockExplorer: 'https://bscscan.com'
    },
    {
      name: 'Arbitrum',
      chainId: '0xa4b1',
      id: 'arbitrum',
      icon: '🔵',
      rpcUrl: 'https://arb1.arbitrum.io/rpc',
      blockExplorer: 'https://arbiscan.io'
    },
    {
      name: 'Optimism',
      chainId: '0xa',
      id: 'optimism',
      icon: '🔴',
      rpcUrl: 'https://mainnet.optimism.io',
      blockExplorer: 'https://optimistic.etherscan.io'
    },
    {
      name: 'Avalanche',
      chainId: '0xa86a',
      id: 'avalanche',
      icon: '🔺',
      rpcUrl: 'https://api.avax.network/ext/bc/C/rpc',
      blockExplorer: 'https://snowtrace.io'
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-2xl p-6 w-full max-w-md mx-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Select Network</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="space-y-3">
          {networkOptions.map((network) => (
            <button
              key={network.id}
              onClick={() => onSelectNetwork(network)}
              className={`w-full flex items-center space-x-4 p-4 rounded-xl transition-colors ${
                currentNetwork?.id === network.id 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              <div className="text-2xl">{network.icon}</div>
              <div className="flex-1 text-left">
                <div className="text-white font-medium">{network.name}</div>
                <div className="text-gray-400 text-sm">Chain ID: {network.chainId}</div>
              </div>
              {currentNetwork?.id === network.id && (
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              )}
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            Make sure to select the correct network for your transactions
          </p>
        </div>
      </div>
    </div>
  );
};

// Wallet Connection Modal Component
const WalletModal = ({ isOpen, onClose, onSelectWallet }) => {
  const walletOptions = [
    {
      name: 'MetaMask',
      icon: '🦊',
      id: 'metamask',
      description: 'Connect using browser wallet'
    },
    {
      name: 'WalletConnect',
      icon: '🔗',
      id: 'walletconnect',
      description: 'Scan with WalletConnect to connect'
    },
    {
      name: 'Coinbase Wallet',
      icon: '🔵',
      id: 'coinbase',
      description: 'Connect using Coinbase Wallet'
    },
    {
      name: 'Trust Wallet',
      icon: '🛡️',
      id: 'trust',
      description: 'Connect using Trust Wallet'
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-2xl p-6 w-full max-w-md mx-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Connect Wallet</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="space-y-3">
          {walletOptions.map((wallet) => (
            <button
              key={wallet.id}
              onClick={() => onSelectWallet(wallet)}
              className="w-full flex items-center space-x-4 p-4 bg-gray-700 hover:bg-gray-600 rounded-xl transition-colors"
            >
              <div className="text-2xl">{wallet.icon}</div>
              <div className="flex-1 text-left">
                <div className="text-white font-medium">{wallet.name}</div>
                <div className="text-gray-400 text-sm">{wallet.description}</div>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            By connecting a wallet, you agree to Stargate's Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isNetworkModalOpen, setIsNetworkModalOpen] = useState(false);
  const [connectedWallet, setConnectedWallet] = useState(null);
  const [walletAddress, setWalletAddress] = useState('');
  const [currentNetwork, setCurrentNetwork] = useState(null);

  // Check if wallet is already connected on component mount
  useEffect(() => {
    checkWalletConnection();
  }, []);

  const checkWalletConnection = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setConnectedWallet('MetaMask');
          setWalletAddress(accounts[0]);
          
          // Get current network
          const chainId = await window.ethereum.request({ method: 'eth_chainId' });
          updateCurrentNetwork(chainId);
        }
      } catch (error) {
        console.error('Error checking wallet connection:', error);
      }
    }
  };

  const updateCurrentNetwork = (chainId) => {
    const networks = {
      '0x1': { name: 'Ethereum', id: 'ethereum', icon: '⟠' },
      '0x89': { name: 'Polygon', id: 'polygon', icon: '🟣' },
      '0x38': { name: 'BSC', id: 'bsc', icon: '🟡' },
      '0xa4b1': { name: 'Arbitrum', id: 'arbitrum', icon: '🔵' },
      '0xa': { name: 'Optimism', id: 'optimism', icon: '🔴' },
      '0xa86a': { name: 'Avalanche', id: 'avalanche', icon: '🔺' }
    };
    
    setCurrentNetwork(networks[chainId] || { name: 'Unknown', id: 'unknown', icon: '❓' });
  };

  const handleNetworkSelect = async (network) => {
    setIsNetworkModalOpen(false);
    
    if (!connectedWallet) {
      alert('Please connect your wallet first');
      return;
    }

    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: network.chainId }],
      });
      updateCurrentNetwork(network.chainId);
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: network.chainId,
                chainName: network.name,
                rpcUrls: [network.rpcUrl],
                blockExplorerUrls: [network.blockExplorer],
              },
            ],
          });
          updateCurrentNetwork(network.chainId);
        } catch (addError) {
          console.error('Error adding network:', addError);
          alert('Failed to add network');
        }
      } else {
        console.error('Error switching network:', switchError);
        alert('Failed to switch network');
      }
    }
  };

  const handleWalletSelect = async (wallet) => {
    setIsWalletModalOpen(false);
    
    try {
      switch (wallet.id) {
        case 'metamask':
          await connectMetaMask();
          break;
        case 'walletconnect':
          // WalletConnect integration would go here
          alert('WalletConnect integration coming soon!');
          break;
        case 'coinbase':
          // Coinbase Wallet integration would go here
          alert('Coinbase Wallet integration coming soon!');
          break;
        case 'trust':
          // Trust Wallet integration would go here
          alert('Trust Wallet integration coming soon!');
          break;
        default:
          console.log('Unsupported wallet');
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
      alert('Failed to connect wallet. Please try again.');
    }
  };

  const connectMetaMask = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        // Request account access
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setConnectedWallet('MetaMask');
        setWalletAddress(accounts[0]);
        
        // Get current network
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        updateCurrentNetwork(chainId);
        
        // Listen for account changes
        window.ethereum.on('accountsChanged', (accounts) => {
          if (accounts.length === 0) {
            setConnectedWallet(null);
            setWalletAddress('');
            setCurrentNetwork(null);
          } else {
            setWalletAddress(accounts[0]);
          }
        });

        // Listen for network changes
        window.ethereum.on('chainChanged', (chainId) => {
          updateCurrentNetwork(chainId);
        });
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
        throw error;
      }
    } else {
      alert('MetaMask is not installed. Please install MetaMask and try again.');
    }
  };

  const disconnectWallet = () => {
    setConnectedWallet(null);
    setWalletAddress('');
    setCurrentNetwork(null);
  };

  const formatAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  // Connect Wallet Button Component
  const ConnectWalletButton = ({ className, fullWidth = false }) => {
    if (connectedWallet) {
      return (
        <div className={`${className} ${fullWidth ? 'w-full' : ''} flex items-center space-x-2`}>
          {/* Network Selector */}
          <button 
            onClick={() => setIsNetworkModalOpen(true)}
            className="bg-gray-700 text-white px-3 py-2 rounded-lg font-medium hover:bg-gray-600 transition-colors duration-200 flex items-center space-x-2"
          >
            <span className="text-lg">{currentNetwork?.icon || '❓'}</span>
            <span className="hidden sm:inline">{currentNetwork?.name || 'Unknown'}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {/* Wallet Info */}
          <button 
            onClick={disconnectWallet}
            className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 flex items-center space-x-2"
          >
            <div className="w-2 h-2 bg-green-300 rounded-full"></div>
            <span>{formatAddress(walletAddress)}</span>
            <span className="text-xs hidden sm:inline">({connectedWallet})</span>
          </button>
        </div>
      );
    }
    
    return (
      <button 
        onClick={() => setIsWalletModalOpen(true)}
        className={`${className} ${fullWidth ? 'w-full justify-center' : ''} bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2`}
      >
        <span>Connect Wallet</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    );
  };

  return (
    <>
      <nav className="bg-black text-white px-6 py-4 w-full">
        <div className="flex items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white flex items-center justify-center transform rotate-45">
              <div className="w-4 h-4 bg-black transform -rotate-45"></div>
            </div>
            <span className="text-xl font-semibold">Stargate</span>
          </div>

          {/* Right Section */}
          <div className="flex items-center ml-auto space-x-8">
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors duration-200 font-medium pb-1"
              >
                Transfer
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Earn
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Stake
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Overview
              </a>
            </div>

            {/* Desktop Connect Wallet Button */}
            <ConnectWalletButton className="hidden md:flex" />

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                {isOpen ? (
                  // Close icon
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  // Hamburger icon
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a
              href="#"
              className="block text-white hover:text-gray-300 font-medium border-b-2 border-orange-500 pb-1"
            >
              Transfer
            </a>
            <a href="#" className="block text-gray-400 hover:text-white">
              Earn
            </a>
            <a href="#" className="block text-gray-400 hover:text-white">
              Stake
            </a>
            <a href="#" className="block text-gray-400 hover:text-white">
              Overview
            </a>
            
            {/* Mobile Connect Wallet Button */}
            <ConnectWalletButton fullWidth={true} />
          </div>
        )}
      </nav>

      {/* Wallet Connection Modal */}
      <WalletModal 
        isOpen={isWalletModalOpen}
        onClose={() => setIsWalletModalOpen(false)}
        onSelectWallet={handleWalletSelect}
      />

      {/* Network Selection Modal */}
      <NetworkModal 
        isOpen={isNetworkModalOpen}
        onClose={() => setIsNetworkModalOpen(false)}
        onSelectNetwork={handleNetworkSelect}
        currentNetwork={currentNetwork}
      />
    </>
  );
};

export default Navbar;