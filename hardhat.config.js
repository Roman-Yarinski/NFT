require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');
require('@nomiclabs/hardhat-waffle');
require('hardhat-deploy');

{ ROPSTEN_PRIVATE_KEY,  ROPSTEN_PROVIDER_URL } require('./env');


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    // private: {
    //   url: 'http://52.12.224.224:8545',
    //   chainId: 1337,
    //   accounts: [PRIVATE_NETWORK_PRIVATE_KEY],
    // },
    ropsten: {
      url: ROPSTEN_PROVIDER_URL,
      chainId: 3,
      accounts: [ROPSTEN_PRIVATE_KEY],
      gasPrice: 3000000000,
    },
    // rinkeby: {
    //   url: RINKEBY_PROVIDER_URL,
    //   chainId: 4,
    //   accounts: [RINKEBY_PRIVATE_KEY],
    //   gasPrice: 3000000000,
    // },
    // main: {
    //   url: MAINNET_PROVIDER_URL,
    //   chainId: 1,
    //   accounts: [MAINNET_PRIVATE_KEY],
    //   gasPrice: 40000000000,
    // },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "TVHC8TX5TTYPBQFQ5E9GWT8QN74CSK5T3H",
  },
  namedAccounts: {
    deployer: 0,
  },
};

