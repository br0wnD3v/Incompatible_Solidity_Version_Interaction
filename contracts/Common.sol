//SPDX-License-Identifier:MIT
pragma solidity ^0.8.17;

import "./IUniswap.sol";

contract Common {
    IUniswap uniswapContract;

    constructor(address olderUniswap) {
        uniswapContract = IUniswap(olderUniswap);
    }

    function getValue() public view returns (uint256) {
        return uniswapContract.getDataOlder();
    }
}
