import { ethers } from "hardhat";

import { chainlink } from "../utils/constants";

const data = { chainlink };

const prepareDeploy = (data: any) => async () => {
  const {
    chainlink: { feeds },
  } = data;

  const priceFeed = await (
    await ethers.getContractFactory("PriceFeed")
  ).deploy(feeds.ETH_USD);

  return { priceFeed };
};

const deploy = prepareDeploy(data);

export { deploy, data };
