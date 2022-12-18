import "@nomicfoundation/hardhat-toolbox";
import { FakeContract, smock } from '@defi-wonderland/smock';
import { ethers, network, artifacts } from "hardhat";
import { expect } from 'chai';
import * as chai from "chai";
import { A as Contract, B, A__factory as ContractFactory } from "../typechain";


chai.should(); // if you like should syntax
chai.use(smock.matchers);


let factory: ContractFactory;
let contract: Contract;
let fakeB: FakeContract<B>;

const createTestSuite = ({ name }: { name: string }) =>
    function () {
        before(async () => {
            factory = await ethers.getContractFactory(name) as ContractFactory;
            fakeB = await smock.fake("B");
            contract = await factory.deploy(fakeB.address) as Contract;
            await contract.deployed();
        });

        context(`${name}`, function () {
            it("should be reverted with message", async function() {
                fakeB.test.reverts(`Message`);
                await expect(contract.test())
                    .to.be.revertedWith("Message");
            });
        });
    };

describe("Test", createTestSuite({ name: "A"}));


