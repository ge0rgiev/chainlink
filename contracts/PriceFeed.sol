//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "./interfaces/IAggregatorProxy.sol";

contract PriceFeed {
    function getPrice(address priceFeed) public view returns (uint256) {
        return IAggregatorProxy(priceFeed).latestAnswer();
    }
}
