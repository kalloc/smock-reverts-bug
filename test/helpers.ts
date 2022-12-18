/**
 * @type import('hardhat/config').HardhatUserConfig
 */
import "@nomiclabs/hardhat-ethers";
import {BigNumber, BigNumberish} from "ethers";
import { ethers } from "hardhat";

export const toBytes32 = (bn: BigNumber) => {
    return ethers.utils.hexlify(ethers.utils.zeroPad(bn.toHexString(), 32));
};

export const setStorageAt = async (address: String, slot: String, value: String) => {

    await ethers.provider.send("hardhat_setStorageAt", [address, slot, value]);
    await ethers.provider.send("evm_mine", []); // Just mines to the next block
};

export let deployContract = async function (contractName: string, constructorArgs: Array<string|number>) {
    let factory;
    try {
        factory = await ethers.getContractFactory(contractName);
    } catch (e) {
        factory = await ethers.getContractFactory(contractName + 'UpgradeableWithInit');
    }
    let contract = await factory.deploy(...(constructorArgs || []));
    await contract.deployed();
    return contract;
};

export let getCurrentTimestamp = async () => {
    // getting timestamp
    const blockNumBefore = await ethers.provider.getBlockNumber();
    const blockBefore = await ethers.provider.getBlock(blockNumBefore);
    return blockBefore.timestamp;
}
