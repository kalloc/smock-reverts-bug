/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { A, AInterface } from "../A";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "b",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "test",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b0319166effe8b47b3e2130213b802212439497179055610187806100416000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80634df7e3d01461003b578063f8a8fd6d14610085575b600080fd5b60005461005b9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b61008d61009d565b604051901515815260200161007c565b60008054604080517ff8a8fd6d0000000000000000000000000000000000000000000000000000000081529051839273ffffffffffffffffffffffffffffffffffffffff169163f8a8fd6d916004808301926020929190829003018187875af115801561010e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101329190610138565b13905090565b60006020828403121561014a57600080fd5b505191905056fea2646970667358221220c03775b141cc23a7c9170da7cd39aa6de79f66d36cd7c88ebff0bbd41cb92bb364736f6c63430008110033";

type AConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class A__factory extends ContractFactory {
  constructor(...args: AConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<A> {
    return super.deploy(overrides || {}) as Promise<A>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): A {
    return super.attach(address) as A;
  }
  override connect(signer: Signer): A__factory {
    return super.connect(signer) as A__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AInterface {
    return new utils.Interface(_abi) as AInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): A {
    return new Contract(address, _abi, signerOrProvider) as A;
  }
}
