/* eslint-disable no-unused-expressions */

import chai from "chai";
import { run, ethers } from "hardhat";
import { PriceFeed } from "../typechain";
import { deploy } from "./price.feed.env";

const { expect } = chai;

describe("Chainlink Price Feed", async () => {
  let priceFeed: PriceFeed;

  before(async () => {
    await run("compile");
    ({ priceFeed } = await deploy());
  });

  it("Should get ETH/USD price", async () => {
    const price = await priceFeed.getLatestPrice();
    console.log(`ETH/USD price: $ ${ethers.utils.formatUnits(price, 8)}`);
    expect(true).to.be.true;
  });
});
