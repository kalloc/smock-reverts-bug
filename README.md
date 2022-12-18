

# The feature reverting with message is not working yet

Expected successful revert with a message for the nested contract call. 

Using very simple contracts:
```solidity
contract B {
    int counter;
    function test()
    public 
    returns(int) {
        counter+=1;
        return counter;
    }
}

contract A {
    address public b;
    constructor(address dep) {
        b = dep;
    }

    function test() public returns(bool) {
        return B(b).test() > 0;
    }

}
```

Example test below:
```typescript
fakeB.test.reverts(`Message`);
await expect(contract.test())
    .to.be.revertedWith("Message");
```


But got error:

```bash
$ hardhat test


  Test
    A
      1) should be reverted with message


  0 passing (684ms)
  1 failing

  1) Test
       A
         should be reverted with message:
     AssertionError: Expected transaction to be reverted with reason 'Message', but it reverted without a reason
      at processTicksAndRejections (node:internal/process/task_queues:96:5)
      at Context.<anonymous> (test/alphazilla.ts:36:17)



info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

Update: reported https://github.com/defi-wonderland/smock/issues/152
