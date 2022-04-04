//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

interface IAggregatorProxy {
    function latestAnswer() external view returns (uint256);
}
