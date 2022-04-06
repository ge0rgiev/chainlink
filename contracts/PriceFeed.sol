//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "./interfaces/AggregatorV3Interface.sol";

contract PriceFeed {
    AggregatorV3Interface private priceFeed;

    constructor(address _priceFeed) {
        priceFeed = AggregatorV3Interface(_priceFeed);
    }

    function getLatestPrice() public view returns (int256 price) {
        (
            /*uint80 roundID*/,
            price,
            /*uint256 startedAt*/,
            /*uint256 timeStamp*/,
            /*uint80 answeredInRound*/
        ) = priceFeed.latestRoundData();
    }
}
