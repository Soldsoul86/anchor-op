require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    opSepolia: {
      url: process.env.OP_SEPOLIA_RPC,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};

