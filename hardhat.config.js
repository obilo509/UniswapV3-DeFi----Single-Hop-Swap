require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.7.6",
  networks: {
    hardhat: {
      forking: {
        url: "https://eth-rinkeby.alchemyapi.io/v2/dAKreoGhIVtuAlR5eniHdnKsxxvEBpTj"
      }
    }
  }
};
