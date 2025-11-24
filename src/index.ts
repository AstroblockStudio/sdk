import { GraphQLClient } from "graphql-request";
import { getSdk } from "./graphql";

type AstroblockSdkNetwork = "mainnet" | "testnet";

export function createAstroblockSdk(network: AstroblockSdkNetwork) {
  const client = new GraphQLClient(
    network === "mainnet" ? "https://astroblock.marble.live" :
    `https://astroblock-explorer-${network}.up.railway.app`,
  );

  return getSdk(client);
}
