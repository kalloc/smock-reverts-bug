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
    constructor(address dep) {
        b = dep;
    }

    function test() public returns(bool) {
        return B(b).test() > 0;
    }

}
