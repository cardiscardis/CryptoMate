const Ethereum = {
    hex: '0x1',
    name: 'Ethereum',
    rpcUrl: '',
    ticker: "ETH"
};

const MumbaiTestnet = {
    hex: '0x13881',
    name: 'Mumbai Testnet',
    rpcUrl: '',
    ticker: "MATIC"
};

const Avalanche = {
    hex: '0xa86a',
    name: 'Avalanche Testnet',
    rpcUrl: '',
    ticker: "FUJI"
};

const Polygon = {
    hex: '0x89',
    name: 'Polygont',
    rpcUrl: 'https://polygon-mainnet.infura.io/v3/d0f4119a707544e7b1fcbc93c9bf659e',
    ticker: "MATIC"
};

const Sepolia = {
    hex: '0xaa36a7', // Chain ID for Sepolia in hexadecimal
    name: 'Sepolia',
    rpcUrl: 'https://sepolia.infura.io/v3/d0f4119a707544e7b1fcbc93c9bf659e', // Replace with your Infura project ID
    ticker: "SETH" // The native token ticker for Sepolia
};


export const CHAINS_CONFIG = {
    "0x1": Ethereum,
    "0x13881": MumbaiTestnet,
    "0xa86a":  Avalanche,
    "0x89":  Polygon,
    "0xaa36a7": Sepolia
};

export const chainOptions = [
    {
      label: "Ethereum",
      value: "0x1",
    },
    {
      label: "Mumbai Testnet",
      value: "0x13881",
    },
    {
      label: "Polygon",
      value: "0x89",
    },
    {
      label: "Avalanche",
      value: "0xa86a",
    },
    {
        label: "Sepolia",
        value: "0xaa36a7"
    }
  ]