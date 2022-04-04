import { Record, String } from "runtypes";

export const EnvVarsRecord = Record({
  // Hardhat Configuration
  MAINNET_FORK_URL: String,
  REPORT_GAS: String,

  // Chainlink Price Feeds
  ETH_USD: String,
  BTC_USD: String,
});

const env = () => EnvVarsRecord.check(process.env);

export { env };
