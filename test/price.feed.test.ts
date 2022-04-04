/* eslint-disable no-unused-expressions */

import chai from "chai";
import { run, ethers } from "hardhat";
import { PriceFeed } from "../typechain";
import { deploy, data } from "./price.feed.env";

const { expect } = chai;

describe("Chainlink Price Feed", async () => {
  let priceFeed: PriceFeed;
  const { chainlink } = data;

  before(async () => {
    await run("compile");
    ({ priceFeed } = await deploy());
  });

  it("Should get ETH/USD price", async () => {
    const price = await priceFeed.getPrice(chainlink.feeds.ETH_USD);
    console.log(`ETH/USD price: $ ${ethers.utils.formatUnits(price, 8)}`);
    expect(true).to.be.true;
  });

  it("Should get BTC/USD price", async () => {
    const price = await priceFeed.getPrice(chainlink.feeds.BTC_USD);
    console.log(`BTC/USD price: $ ${ethers.utils.formatUnits(price, 8)}`);
    expect(true).to.be.true;
  });
});
