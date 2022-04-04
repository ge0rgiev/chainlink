import { ethers } from "hardhat";

import { chainlink } from "../utils/constants";

const data = { chainlink };

const prepareDeploy = (data: any) => async () => {
  const priceFeed = await (
    await ethers.getContractFactory("PriceFeed")
  ).deploy();
  return { priceFeed };
};

const deploy = prepareDeploy(data);

export { deploy, data };
