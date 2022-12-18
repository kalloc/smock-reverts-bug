import "@nomicfoundation/hardhat-toolbox";
import { FakeContract, smock } from '@defi-wonderland/smock';
import { ethers, network, artifacts } from "hardhat";
import { expect } from 'chai';
import * as chai from "chai";
// @ts-ignore
import { constants } from  "@openzeppelin/test-helpers";
import { A as Contract, B, A__factory as ContractFactory } from "../typechain";

const { ZERO_ADDRESS } = constants;
const B_ADDRESS = "0x0000000000FFe8B47B3e2130213B802212439497";

chai.should(); // if you like should syntax
chai.use(smock.matchers);


let factory: ContractFactory;
let contract: Contract;
let fakeB: FakeContract<B>;

const createTestSuite = ({ name }: { name: string }) =>
    function () {
        before(async () => {
            factory = await ethers.getContractFactory(name) as ContractFactory;
            contract = await factory.deploy() as Contract;
            await contract.deployed();
        });

        context(`${name}`, function () {
            beforeEach(async function() {
                fakeB = await smock.fake("B", {address: B_ADDRESS});
            });

            it("should be reverted with message", async function() {
                fakeB.test.reverts(`Message`);
                await expect(contract.test())
                    .to.be.revertedWith("Message");
            });
        });
    };

describe("Test", createTestSuite({ name: "A"}));


