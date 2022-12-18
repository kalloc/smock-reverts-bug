// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.16;


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
    constructor() {
        b = address(0x0000000000FFe8B47B3e2130213B802212439497);
    }

    function test() public returns(bool) {
        return B(b).test() > 0;
    }

}
