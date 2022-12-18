import "@nomicfoundation/hardhat-toolbox";

import { types, task } from "hardhat/config";
import "hardhat-tracer";
import "hardhat-dependency-compiler";
import "hardhat-deploy";

require('dotenv').config();

let { 
    PRIVATE_KEY,
    ETHERSCAN_RINKEBY_TOKEN,
    ETHERSCAN_POLYGON_TOKEN,
    ALCHEMY_POLYGON_TOKEN,
    ALCHEMY_RINKEBY_TOKEN,
} = process.env;

const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

let networks = {
    hardhat: {},
};
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: {
        version: "0.8.17",
        settings: {
            optimizer: {
                enabled: true,
                runs: 1337
            },
            outputSelection: {
                "*": {
                    "*": ["storageLayout"]
                }
            }
        }
    },
    defaultNetwork: "hardhat",
    networks: networks,
    namedAccounts: {
        deployer: 0,
        admin1: 1,
    },
    plugins: ['solidity-coverage'],
    typechain: {
        outDir: './typechain',
        target: 'ethers-v5',
        alwaysGenerateOverloads: false, // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
        externalArtifacts: ['externalArtifacts/*.json'], // optional array of glob patterns with external artifacts to process (for example external libs from node_modules)
    },
};


