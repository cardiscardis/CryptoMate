import express from "express";
import Moralis from "moralis";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

// Start Moralis
Moralis.start({
  apiKey: process.env.MORALIS_KEY, // Add fallback for debugging
}).then(() => {
  console.log("Moralis started successfully");
});

const app = express();
app.use(cors());
app.use(express.json());

// Define endpoints
app.get("/getTokens", async (req, res) => {
  try {
    const { userAddress, chain } = req.query;

    const tokens = await Moralis.EvmApi.token.getWalletTokenBalances({
      chain: chain,
      address: userAddress,
    });

    const nfts = await Moralis.EvmApi.nft.getWalletNFTs({
      chain: chain,
      address: userAddress,
      mediaItems: true,
    });

    const myNfts = nfts.raw.result.map((e) => {
      if (
        e?.media?.media_collection?.high?.url &&
        !e.possible_spam &&
        e?.media?.category !== "video"
      ) {
        return e["media"]["media_collection"]["high"]["url"];
      }
    });

    const balance = await Moralis.EvmApi.balance.getNativeBalance({
      chain: chain,
      address: userAddress,
    });

    const jsonResponse = {
      tokens: tokens.raw,
      nfts: myNfts,
      balance: balance.raw.balance / 10 ** 18,
    };

    return res.status(200).json(jsonResponse);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred" });
  }
});

// Export as a serverless function
const server = app;

export default (req, res) => {
  return server(req, res); 
};
