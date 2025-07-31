import { GraphQLClient } from "graphql-request";
import { getSdk } from "./graphql";

type AstroblockSdkNetwork = "mainnet" | "testnet";

export function createAstroblockSdk(network: AstroblockSdkNetwork) {
  const client = new GraphQLClient(
    `https://astroblock-explorer-${network}.up.railway.app`,
  );

  return getSdk(client);
}
