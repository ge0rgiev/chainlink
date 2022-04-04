import { env as getEnv } from "../env";

const env = getEnv();

const chainlink = {
  feeds: {
    ETH_USD: env.ETH_USD,
    BTC_USD: env.BTC_USD,
  },
};

export { chainlink };
