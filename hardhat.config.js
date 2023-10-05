require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },

  solidity: {
    compilers: [{ version: "0.5.16" }, { version: "0.8.17" }],
  },
};
