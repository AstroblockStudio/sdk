import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type Drop = {
  __typename?: 'Drop';
  data?: Maybe<Scalars['JSON']['output']>;
  decision: Decision;
  dropId: Scalars['String']['output'];
  dropSetting?: Maybe<DropSetting>;
  player?: Maybe<Player>;
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['String']['output'];
};

export type DropFilter = {
  AND?: InputMaybe<Array<InputMaybe<DropFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DropFilter>>>;
  decision?: InputMaybe<Decision>;
  decision_in?: InputMaybe<Array<InputMaybe<Decision>>>;
  decision_not?: InputMaybe<Decision>;
  decision_not_in?: InputMaybe<Array<InputMaybe<Decision>>>;
  dropId?: InputMaybe<Scalars['String']['input']>;
  dropId_contains?: InputMaybe<Scalars['String']['input']>;
  dropId_ends_with?: InputMaybe<Scalars['String']['input']>;
  dropId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dropId_not?: InputMaybe<Scalars['String']['input']>;
  dropId_not_contains?: InputMaybe<Scalars['String']['input']>;
  dropId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  dropId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dropId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  dropId_starts_with?: InputMaybe<Scalars['String']['input']>;
  player?: InputMaybe<Scalars['String']['input']>;
  player_contains?: InputMaybe<Scalars['String']['input']>;
  player_ends_with?: InputMaybe<Scalars['String']['input']>;
  player_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  player_not?: InputMaybe<Scalars['String']['input']>;
  player_not_contains?: InputMaybe<Scalars['String']['input']>;
  player_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  player_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  player_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  player_starts_with?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  transactionHash?: InputMaybe<Scalars['String']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['String']['input']>;
  transactionHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  transactionHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  transactionHash_not?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  transactionHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transactionHash_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type DropPage = {
  __typename?: 'DropPage';
  items: Array<Drop>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DropSetting = {
  __typename?: 'DropSetting';
  cargoOwner?: Maybe<Scalars['String']['output']>;
  dropAmount?: Maybe<Scalars['BigInt']['output']>;
  drops?: Maybe<DropPage>;
  id: Scalars['String']['output'];
  timeOfArrival?: Maybe<Scalars['BigInt']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  tokenDecimals?: Maybe<Scalars['Int']['output']>;
  tokenName?: Maybe<Scalars['String']['output']>;
  tokenSymbol?: Maybe<Scalars['String']['output']>;
};


export type DropSettingDropsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<DropFilter>;
};

export type DropSettingFilter = {
  AND?: InputMaybe<Array<InputMaybe<DropSettingFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DropSettingFilter>>>;
  cargoOwner?: InputMaybe<Scalars['String']['input']>;
  cargoOwner_contains?: InputMaybe<Scalars['String']['input']>;
  cargoOwner_ends_with?: InputMaybe<Scalars['String']['input']>;
  cargoOwner_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cargoOwner_not?: InputMaybe<Scalars['String']['input']>;
  cargoOwner_not_contains?: InputMaybe<Scalars['String']['input']>;
  cargoOwner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  cargoOwner_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cargoOwner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  cargoOwner_starts_with?: InputMaybe<Scalars['String']['input']>;
  dropAmount?: InputMaybe<Scalars['BigInt']['input']>;
  dropAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  dropAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  dropAmount_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  dropAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  dropAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  dropAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  dropAmount_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  timeOfArrival?: InputMaybe<Scalars['BigInt']['input']>;
  timeOfArrival_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timeOfArrival_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timeOfArrival_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  timeOfArrival_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timeOfArrival_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timeOfArrival_not?: InputMaybe<Scalars['BigInt']['input']>;
  timeOfArrival_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  token?: InputMaybe<Scalars['String']['input']>;
  tokenDecimals?: InputMaybe<Scalars['Int']['input']>;
  tokenDecimals_gt?: InputMaybe<Scalars['Int']['input']>;
  tokenDecimals_gte?: InputMaybe<Scalars['Int']['input']>;
  tokenDecimals_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  tokenDecimals_lt?: InputMaybe<Scalars['Int']['input']>;
  tokenDecimals_lte?: InputMaybe<Scalars['Int']['input']>;
  tokenDecimals_not?: InputMaybe<Scalars['Int']['input']>;
  tokenDecimals_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  tokenName?: InputMaybe<Scalars['String']['input']>;
  tokenName_contains?: InputMaybe<Scalars['String']['input']>;
  tokenName_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tokenName_not?: InputMaybe<Scalars['String']['input']>;
  tokenName_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tokenName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenName_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_contains?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tokenSymbol_not?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tokenSymbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type DropSettingPage = {
  __typename?: 'DropSettingPage';
  items: Array<DropSetting>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Entity = {
  __typename?: 'Entity';
  discoveredAt?: Maybe<Scalars['BigInt']['output']>;
  discoveredBy?: Maybe<Player>;
  entityType?: Maybe<EntityType>;
  id: Scalars['BigInt']['output'];
  module?: Maybe<Scalars['String']['output']>;
  moduleName?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  playersAnchored?: Maybe<PlayerPage>;
  quadrantX?: Maybe<Scalars['Int']['output']>;
  quadrantY?: Maybe<Scalars['Int']['output']>;
  radius?: Maybe<Scalars['BigInt']['output']>;
  type?: Maybe<Scalars['JSON']['output']>;
  x?: Maybe<Scalars['BigInt']['output']>;
  y?: Maybe<Scalars['BigInt']['output']>;
};


export type EntityPlayersAnchoredArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<PlayerFilter>;
};

export type EntityFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntityFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntityFilter>>>;
  discoveredAt?: InputMaybe<Scalars['BigInt']['input']>;
  discoveredAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  discoveredAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  discoveredAt_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  discoveredAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  discoveredAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  discoveredAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  discoveredAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  discoveredBy?: InputMaybe<Scalars['String']['input']>;
  discoveredBy_contains?: InputMaybe<Scalars['String']['input']>;
  discoveredBy_ends_with?: InputMaybe<Scalars['String']['input']>;
  discoveredBy_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  discoveredBy_not?: InputMaybe<Scalars['String']['input']>;
  discoveredBy_not_contains?: InputMaybe<Scalars['String']['input']>;
  discoveredBy_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  discoveredBy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  discoveredBy_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  discoveredBy_starts_with?: InputMaybe<Scalars['String']['input']>;
  entityType?: InputMaybe<EntityType>;
  entityType_in?: InputMaybe<Array<InputMaybe<EntityType>>>;
  entityType_not?: InputMaybe<EntityType>;
  entityType_not_in?: InputMaybe<Array<InputMaybe<EntityType>>>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  id_gt?: InputMaybe<Scalars['BigInt']['input']>;
  id_gte?: InputMaybe<Scalars['BigInt']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  id_lt?: InputMaybe<Scalars['BigInt']['input']>;
  id_lte?: InputMaybe<Scalars['BigInt']['input']>;
  id_not?: InputMaybe<Scalars['BigInt']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  module?: InputMaybe<Scalars['String']['input']>;
  moduleName?: InputMaybe<Scalars['String']['input']>;
  moduleName_contains?: InputMaybe<Scalars['String']['input']>;
  moduleName_ends_with?: InputMaybe<Scalars['String']['input']>;
  moduleName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  moduleName_not?: InputMaybe<Scalars['String']['input']>;
  moduleName_not_contains?: InputMaybe<Scalars['String']['input']>;
  moduleName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  moduleName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  moduleName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  moduleName_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_contains?: InputMaybe<Scalars['String']['input']>;
  module_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  module_not?: InputMaybe<Scalars['String']['input']>;
  module_not_contains?: InputMaybe<Scalars['String']['input']>;
  module_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  module_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  module_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  module_starts_with?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  quadrantX?: InputMaybe<Scalars['Int']['input']>;
  quadrantX_gt?: InputMaybe<Scalars['Int']['input']>;
  quadrantX_gte?: InputMaybe<Scalars['Int']['input']>;
  quadrantX_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  quadrantX_lt?: InputMaybe<Scalars['Int']['input']>;
  quadrantX_lte?: InputMaybe<Scalars['Int']['input']>;
  quadrantX_not?: InputMaybe<Scalars['Int']['input']>;
  quadrantX_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  quadrantY?: InputMaybe<Scalars['Int']['input']>;
  quadrantY_gt?: InputMaybe<Scalars['Int']['input']>;
  quadrantY_gte?: InputMaybe<Scalars['Int']['input']>;
  quadrantY_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  quadrantY_lt?: InputMaybe<Scalars['Int']['input']>;
  quadrantY_lte?: InputMaybe<Scalars['Int']['input']>;
  quadrantY_not?: InputMaybe<Scalars['Int']['input']>;
  quadrantY_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  radius?: InputMaybe<Scalars['BigInt']['input']>;
  radius_gt?: InputMaybe<Scalars['BigInt']['input']>;
  radius_gte?: InputMaybe<Scalars['BigInt']['input']>;
  radius_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  radius_lt?: InputMaybe<Scalars['BigInt']['input']>;
  radius_lte?: InputMaybe<Scalars['BigInt']['input']>;
  radius_not?: InputMaybe<Scalars['BigInt']['input']>;
  radius_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  x?: InputMaybe<Scalars['BigInt']['input']>;
  x_gt?: InputMaybe<Scalars['BigInt']['input']>;
  x_gte?: InputMaybe<Scalars['BigInt']['input']>;
  x_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  x_lt?: InputMaybe<Scalars['BigInt']['input']>;
  x_lte?: InputMaybe<Scalars['BigInt']['input']>;
  x_not?: InputMaybe<Scalars['BigInt']['input']>;
  x_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  y?: InputMaybe<Scalars['BigInt']['input']>;
  y_gt?: InputMaybe<Scalars['BigInt']['input']>;
  y_gte?: InputMaybe<Scalars['BigInt']['input']>;
  y_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  y_lt?: InputMaybe<Scalars['BigInt']['input']>;
  y_lte?: InputMaybe<Scalars['BigInt']['input']>;
  y_not?: InputMaybe<Scalars['BigInt']['input']>;
  y_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
};

export type EntityPage = {
  __typename?: 'EntityPage';
  items: Array<Entity>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type GameStats = {
  __typename?: 'GameStats';
  id: Scalars['String']['output'];
  totalDistanceTraveled: Scalars['BigInt']['output'];
  totalFuelBurned: Scalars['BigInt']['output'];
  totalFuelDeposited: Scalars['BigInt']['output'];
  totalLoots: Scalars['Int']['output'];
  totalPlayers: Scalars['Int']['output'];
  totalStarsDiscovered: Scalars['Int']['output'];
};

export type GameStatsFilter = {
  AND?: InputMaybe<Array<InputMaybe<GameStatsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GameStatsFilter>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  totalDistanceTraveled?: InputMaybe<Scalars['BigInt']['input']>;
  totalDistanceTraveled_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDistanceTraveled_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDistanceTraveled_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  totalDistanceTraveled_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDistanceTraveled_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDistanceTraveled_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalDistanceTraveled_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  totalFuelBurned?: InputMaybe<Scalars['BigInt']['input']>;
  totalFuelBurned_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalFuelBurned_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalFuelBurned_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  totalFuelBurned_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalFuelBurned_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalFuelBurned_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalFuelBurned_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  totalFuelDeposited?: InputMaybe<Scalars['BigInt']['input']>;
  totalFuelDeposited_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalFuelDeposited_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalFuelDeposited_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  totalFuelDeposited_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalFuelDeposited_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalFuelDeposited_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalFuelDeposited_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  totalLoots?: InputMaybe<Scalars['Int']['input']>;
  totalLoots_gt?: InputMaybe<Scalars['Int']['input']>;
  totalLoots_gte?: InputMaybe<Scalars['Int']['input']>;
  totalLoots_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  totalLoots_lt?: InputMaybe<Scalars['Int']['input']>;
  totalLoots_lte?: InputMaybe<Scalars['Int']['input']>;
  totalLoots_not?: InputMaybe<Scalars['Int']['input']>;
  totalLoots_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  totalPlayers?: InputMaybe<Scalars['Int']['input']>;
  totalPlayers_gt?: InputMaybe<Scalars['Int']['input']>;
  totalPlayers_gte?: InputMaybe<Scalars['Int']['input']>;
  totalPlayers_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  totalPlayers_lt?: InputMaybe<Scalars['Int']['input']>;
  totalPlayers_lte?: InputMaybe<Scalars['Int']['input']>;
  totalPlayers_not?: InputMaybe<Scalars['Int']['input']>;
  totalPlayers_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  totalStarsDiscovered?: InputMaybe<Scalars['Int']['input']>;
  totalStarsDiscovered_gt?: InputMaybe<Scalars['Int']['input']>;
  totalStarsDiscovered_gte?: InputMaybe<Scalars['Int']['input']>;
  totalStarsDiscovered_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  totalStarsDiscovered_lt?: InputMaybe<Scalars['Int']['input']>;
  totalStarsDiscovered_lte?: InputMaybe<Scalars['Int']['input']>;
  totalStarsDiscovered_not?: InputMaybe<Scalars['Int']['input']>;
  totalStarsDiscovered_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type GameStatsPage = {
  __typename?: 'GameStatsPage';
  items: Array<GameStats>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LootEvent = {
  __typename?: 'LootEvent';
  amount?: Maybe<Scalars['BigInt']['output']>;
  id: Scalars['String']['output'];
  player?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['BigInt']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  tokenDecimals?: Maybe<Scalars['Int']['output']>;
  tokenName?: Maybe<Scalars['String']['output']>;
  tokenSymbol?: Maybe<Scalars['String']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
};

export type LootEventFilter = {
  AND?: InputMaybe<Array<InputMaybe<LootEventFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LootEventFilter>>>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  player?: InputMaybe<Scalars['String']['input']>;
  player_contains?: InputMaybe<Scalars['String']['input']>;
  player_ends_with?: InputMaybe<Scalars['String']['input']>;
  player_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  player_not?: InputMaybe<Scalars['String']['input']>;
  player_not_contains?: InputMaybe<Scalars['String']['input']>;
  player_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  player_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  player_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  player_starts_with?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  token?: InputMaybe<Scalars['String']['input']>;
  tokenDecimals?: InputMaybe<Scalars['Int']['input']>;
  tokenDecimals_gt?: InputMaybe<Scalars['Int']['input']>;
  tokenDecimals_gte?: InputMaybe<Scalars['Int']['input']>;
  tokenDecimals_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  tokenDecimals_lt?: InputMaybe<Scalars['Int']['input']>;
  tokenDecimals_lte?: InputMaybe<Scalars['Int']['input']>;
  tokenDecimals_not?: InputMaybe<Scalars['Int']['input']>;
  tokenDecimals_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  tokenName?: InputMaybe<Scalars['String']['input']>;
  tokenName_contains?: InputMaybe<Scalars['String']['input']>;
  tokenName_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tokenName_not?: InputMaybe<Scalars['String']['input']>;
  tokenName_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tokenName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenName_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_contains?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tokenSymbol_not?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tokenSymbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  transactionHash?: InputMaybe<Scalars['String']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['String']['input']>;
  transactionHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  transactionHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  transactionHash_not?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  transactionHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transactionHash_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type LootEventPage = {
  __typename?: 'LootEventPage';
  items: Array<LootEvent>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LootTokenRange = {
  __typename?: 'LootTokenRange';
  enabled: Scalars['Boolean']['output'];
  max?: Maybe<Scalars['BigInt']['output']>;
  min?: Maybe<Scalars['BigInt']['output']>;
  token: Scalars['String']['output'];
  tokenDecimals?: Maybe<Scalars['Int']['output']>;
  tokenName?: Maybe<Scalars['String']['output']>;
  tokenSymbol?: Maybe<Scalars['String']['output']>;
};

export type LootTokenRangeFilter = {
  AND?: InputMaybe<Array<InputMaybe<LootTokenRangeFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LootTokenRangeFilter>>>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  enabled_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  enabled_not?: InputMaybe<Scalars['Boolean']['input']>;
  enabled_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  max?: InputMaybe<Scalars['BigInt']['input']>;
  max_gt?: InputMaybe<Scalars['BigInt']['input']>;
  max_gte?: InputMaybe<Scalars['BigInt']['input']>;
  max_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  max_lt?: InputMaybe<Scalars['BigInt']['input']>;
  max_lte?: InputMaybe<Scalars['BigInt']['input']>;
  max_not?: InputMaybe<Scalars['BigInt']['input']>;
  max_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  min?: InputMaybe<Scalars['BigInt']['input']>;
  min_gt?: InputMaybe<Scalars['BigInt']['input']>;
  min_gte?: InputMaybe<Scalars['BigInt']['input']>;
  min_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  min_lt?: InputMaybe<Scalars['BigInt']['input']>;
  min_lte?: InputMaybe<Scalars['BigInt']['input']>;
  min_not?: InputMaybe<Scalars['BigInt']['input']>;
  min_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  token?: InputMaybe<Scalars['String']['input']>;
  tokenDecimals?: InputMaybe<Scalars['Int']['input']>;
  tokenDecimals_gt?: InputMaybe<Scalars['Int']['input']>;
  tokenDecimals_gte?: InputMaybe<Scalars['Int']['input']>;
  tokenDecimals_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  tokenDecimals_lt?: InputMaybe<Scalars['Int']['input']>;
  tokenDecimals_lte?: InputMaybe<Scalars['Int']['input']>;
  tokenDecimals_not?: InputMaybe<Scalars['Int']['input']>;
  tokenDecimals_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  tokenName?: InputMaybe<Scalars['String']['input']>;
  tokenName_contains?: InputMaybe<Scalars['String']['input']>;
  tokenName_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tokenName_not?: InputMaybe<Scalars['String']['input']>;
  tokenName_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tokenName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenName_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_contains?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tokenSymbol_not?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tokenSymbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type LootTokenRangePage = {
  __typename?: 'LootTokenRangePage';
  items: Array<LootTokenRange>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Meta = {
  __typename?: 'Meta';
  status?: Maybe<Scalars['JSON']['output']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Player = {
  __typename?: 'Player';
  address: Scalars['String']['output'];
  allTimeLootCount: Scalars['BigInt']['output'];
  anchoredTo?: Maybe<Entity>;
  anchoredToStarId?: Maybe<Scalars['BigInt']['output']>;
  arrivingAt?: Maybe<Scalars['BigInt']['output']>;
  createdAt?: Maybe<Scalars['BigInt']['output']>;
  discoveredCount: Scalars['BigInt']['output'];
  drops?: Maybe<DropPage>;
  ens?: Maybe<Scalars['JSON']['output']>;
  fid?: Maybe<Scalars['String']['output']>;
  holding: Scalars['BigInt']['output'];
  lastLootedDay?: Maybe<Scalars['BigInt']['output']>;
  lastMoveTransactionHash?: Maybe<Scalars['String']['output']>;
  lastMovedAt?: Maybe<Scalars['BigInt']['output']>;
  lastWormholeUsedAt?: Maybe<Scalars['BigInt']['output']>;
  lootCount: Scalars['BigInt']['output'];
  lootStreak: Scalars['BigInt']['output'];
  pfpUrl?: Maybe<Scalars['String']['output']>;
  previousX?: Maybe<Scalars['BigInt']['output']>;
  previousY?: Maybe<Scalars['BigInt']['output']>;
  quadrantX?: Maybe<Scalars['Int']['output']>;
  quadrantY?: Maybe<Scalars['Int']['output']>;
  speed?: Maybe<Scalars['BigInt']['output']>;
  totalBurned: Scalars['BigInt']['output'];
  totalDistanceTraveled: Scalars['BigInt']['output'];
  username?: Maybe<Scalars['String']['output']>;
  x?: Maybe<Scalars['BigInt']['output']>;
  y?: Maybe<Scalars['BigInt']['output']>;
};


export type PlayerDropsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<DropFilter>;
};

export type PlayerFilter = {
  AND?: InputMaybe<Array<InputMaybe<PlayerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PlayerFilter>>>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_contains?: InputMaybe<Scalars['String']['input']>;
  address_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  address_not?: InputMaybe<Scalars['String']['input']>;
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  address_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  address_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_starts_with?: InputMaybe<Scalars['String']['input']>;
  allTimeLootCount?: InputMaybe<Scalars['BigInt']['input']>;
  allTimeLootCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  allTimeLootCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  allTimeLootCount_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  allTimeLootCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  allTimeLootCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  allTimeLootCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  allTimeLootCount_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  anchoredToStarId?: InputMaybe<Scalars['BigInt']['input']>;
  anchoredToStarId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  anchoredToStarId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  anchoredToStarId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  anchoredToStarId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  anchoredToStarId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  anchoredToStarId_not?: InputMaybe<Scalars['BigInt']['input']>;
  anchoredToStarId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  arrivingAt?: InputMaybe<Scalars['BigInt']['input']>;
  arrivingAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  arrivingAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  arrivingAt_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  arrivingAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  arrivingAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  arrivingAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  arrivingAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  createdAt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  discoveredCount?: InputMaybe<Scalars['BigInt']['input']>;
  discoveredCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  discoveredCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  discoveredCount_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  discoveredCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  discoveredCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  discoveredCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  discoveredCount_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  fid?: InputMaybe<Scalars['String']['input']>;
  fid_contains?: InputMaybe<Scalars['String']['input']>;
  fid_ends_with?: InputMaybe<Scalars['String']['input']>;
  fid_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fid_not?: InputMaybe<Scalars['String']['input']>;
  fid_not_contains?: InputMaybe<Scalars['String']['input']>;
  fid_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  fid_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fid_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  fid_starts_with?: InputMaybe<Scalars['String']['input']>;
  holding?: InputMaybe<Scalars['BigInt']['input']>;
  holding_gt?: InputMaybe<Scalars['BigInt']['input']>;
  holding_gte?: InputMaybe<Scalars['BigInt']['input']>;
  holding_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  holding_lt?: InputMaybe<Scalars['BigInt']['input']>;
  holding_lte?: InputMaybe<Scalars['BigInt']['input']>;
  holding_not?: InputMaybe<Scalars['BigInt']['input']>;
  holding_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  lastLootedDay?: InputMaybe<Scalars['BigInt']['input']>;
  lastLootedDay_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastLootedDay_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastLootedDay_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  lastLootedDay_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastLootedDay_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastLootedDay_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastLootedDay_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  lastMoveTransactionHash?: InputMaybe<Scalars['String']['input']>;
  lastMoveTransactionHash_contains?: InputMaybe<Scalars['String']['input']>;
  lastMoveTransactionHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  lastMoveTransactionHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lastMoveTransactionHash_not?: InputMaybe<Scalars['String']['input']>;
  lastMoveTransactionHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  lastMoveTransactionHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  lastMoveTransactionHash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lastMoveTransactionHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  lastMoveTransactionHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  lastMovedAt?: InputMaybe<Scalars['BigInt']['input']>;
  lastMovedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastMovedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastMovedAt_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  lastMovedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastMovedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastMovedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastMovedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  lastWormholeUsedAt?: InputMaybe<Scalars['BigInt']['input']>;
  lastWormholeUsedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastWormholeUsedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastWormholeUsedAt_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  lastWormholeUsedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastWormholeUsedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastWormholeUsedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastWormholeUsedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  lootCount?: InputMaybe<Scalars['BigInt']['input']>;
  lootCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lootCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lootCount_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  lootCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lootCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lootCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  lootCount_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  lootStreak?: InputMaybe<Scalars['BigInt']['input']>;
  lootStreak_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lootStreak_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lootStreak_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  lootStreak_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lootStreak_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lootStreak_not?: InputMaybe<Scalars['BigInt']['input']>;
  lootStreak_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  pfpUrl?: InputMaybe<Scalars['String']['input']>;
  pfpUrl_contains?: InputMaybe<Scalars['String']['input']>;
  pfpUrl_ends_with?: InputMaybe<Scalars['String']['input']>;
  pfpUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pfpUrl_not?: InputMaybe<Scalars['String']['input']>;
  pfpUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  pfpUrl_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pfpUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pfpUrl_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pfpUrl_starts_with?: InputMaybe<Scalars['String']['input']>;
  previousX?: InputMaybe<Scalars['BigInt']['input']>;
  previousX_gt?: InputMaybe<Scalars['BigInt']['input']>;
  previousX_gte?: InputMaybe<Scalars['BigInt']['input']>;
  previousX_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  previousX_lt?: InputMaybe<Scalars['BigInt']['input']>;
  previousX_lte?: InputMaybe<Scalars['BigInt']['input']>;
  previousX_not?: InputMaybe<Scalars['BigInt']['input']>;
  previousX_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  previousY?: InputMaybe<Scalars['BigInt']['input']>;
  previousY_gt?: InputMaybe<Scalars['BigInt']['input']>;
  previousY_gte?: InputMaybe<Scalars['BigInt']['input']>;
  previousY_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  previousY_lt?: InputMaybe<Scalars['BigInt']['input']>;
  previousY_lte?: InputMaybe<Scalars['BigInt']['input']>;
  previousY_not?: InputMaybe<Scalars['BigInt']['input']>;
  previousY_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  quadrantX?: InputMaybe<Scalars['Int']['input']>;
  quadrantX_gt?: InputMaybe<Scalars['Int']['input']>;
  quadrantX_gte?: InputMaybe<Scalars['Int']['input']>;
  quadrantX_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  quadrantX_lt?: InputMaybe<Scalars['Int']['input']>;
  quadrantX_lte?: InputMaybe<Scalars['Int']['input']>;
  quadrantX_not?: InputMaybe<Scalars['Int']['input']>;
  quadrantX_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  quadrantY?: InputMaybe<Scalars['Int']['input']>;
  quadrantY_gt?: InputMaybe<Scalars['Int']['input']>;
  quadrantY_gte?: InputMaybe<Scalars['Int']['input']>;
  quadrantY_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  quadrantY_lt?: InputMaybe<Scalars['Int']['input']>;
  quadrantY_lte?: InputMaybe<Scalars['Int']['input']>;
  quadrantY_not?: InputMaybe<Scalars['Int']['input']>;
  quadrantY_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  speed?: InputMaybe<Scalars['BigInt']['input']>;
  speed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  speed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  speed_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  speed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  speed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  speed_not?: InputMaybe<Scalars['BigInt']['input']>;
  speed_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  totalBurned?: InputMaybe<Scalars['BigInt']['input']>;
  totalBurned_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBurned_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBurned_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  totalBurned_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBurned_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBurned_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalBurned_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  totalDistanceTraveled?: InputMaybe<Scalars['BigInt']['input']>;
  totalDistanceTraveled_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDistanceTraveled_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDistanceTraveled_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  totalDistanceTraveled_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDistanceTraveled_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDistanceTraveled_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalDistanceTraveled_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  username?: InputMaybe<Scalars['String']['input']>;
  username_contains?: InputMaybe<Scalars['String']['input']>;
  username_ends_with?: InputMaybe<Scalars['String']['input']>;
  username_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  username_not?: InputMaybe<Scalars['String']['input']>;
  username_not_contains?: InputMaybe<Scalars['String']['input']>;
  username_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  username_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  username_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  username_starts_with?: InputMaybe<Scalars['String']['input']>;
  x?: InputMaybe<Scalars['BigInt']['input']>;
  x_gt?: InputMaybe<Scalars['BigInt']['input']>;
  x_gte?: InputMaybe<Scalars['BigInt']['input']>;
  x_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  x_lt?: InputMaybe<Scalars['BigInt']['input']>;
  x_lte?: InputMaybe<Scalars['BigInt']['input']>;
  x_not?: InputMaybe<Scalars['BigInt']['input']>;
  x_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  y?: InputMaybe<Scalars['BigInt']['input']>;
  y_gt?: InputMaybe<Scalars['BigInt']['input']>;
  y_gte?: InputMaybe<Scalars['BigInt']['input']>;
  y_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  y_lt?: InputMaybe<Scalars['BigInt']['input']>;
  y_lte?: InputMaybe<Scalars['BigInt']['input']>;
  y_not?: InputMaybe<Scalars['BigInt']['input']>;
  y_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
};

export type PlayerPage = {
  __typename?: 'PlayerPage';
  items: Array<Player>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PlayerWeeklyLoot = {
  __typename?: 'PlayerWeeklyLoot';
  lootCount: Scalars['BigInt']['output'];
  player?: Maybe<Player>;
  week: Scalars['Int']['output'];
};

export type PlayerWeeklyLootFilter = {
  AND?: InputMaybe<Array<InputMaybe<PlayerWeeklyLootFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PlayerWeeklyLootFilter>>>;
  lootCount?: InputMaybe<Scalars['BigInt']['input']>;
  lootCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lootCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lootCount_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  lootCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lootCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lootCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  lootCount_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  player?: InputMaybe<Scalars['String']['input']>;
  player_contains?: InputMaybe<Scalars['String']['input']>;
  player_ends_with?: InputMaybe<Scalars['String']['input']>;
  player_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  player_not?: InputMaybe<Scalars['String']['input']>;
  player_not_contains?: InputMaybe<Scalars['String']['input']>;
  player_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  player_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  player_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  player_starts_with?: InputMaybe<Scalars['String']['input']>;
  week?: InputMaybe<Scalars['Int']['input']>;
  week_gt?: InputMaybe<Scalars['Int']['input']>;
  week_gte?: InputMaybe<Scalars['Int']['input']>;
  week_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  week_lt?: InputMaybe<Scalars['Int']['input']>;
  week_lte?: InputMaybe<Scalars['Int']['input']>;
  week_not?: InputMaybe<Scalars['Int']['input']>;
  week_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type PlayerWeeklyLootPage = {
  __typename?: 'PlayerWeeklyLootPage';
  items: Array<PlayerWeeklyLoot>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  _meta?: Maybe<Meta>;
  drop?: Maybe<Drop>;
  dropSetting?: Maybe<DropSetting>;
  dropSettings: DropSettingPage;
  drops: DropPage;
  entity?: Maybe<Entity>;
  entitys: EntityPage;
  gameStats?: Maybe<GameStats>;
  gameStatss: GameStatsPage;
  lootEvent?: Maybe<LootEvent>;
  lootEvents: LootEventPage;
  lootTokenRange?: Maybe<LootTokenRange>;
  lootTokenRanges: LootTokenRangePage;
  player?: Maybe<Player>;
  playerWeeklyLoot?: Maybe<PlayerWeeklyLoot>;
  playerWeeklyLoots: PlayerWeeklyLootPage;
  players: PlayerPage;
  story?: Maybe<Story>;
  storys: StoryPage;
  tokenLootStat?: Maybe<TokenLootStat>;
  tokenLootStats: TokenLootStatPage;
  undiscoveredStar?: Maybe<UndiscoveredStar>;
  undiscoveredStars: UndiscoveredStarPage;
  worldSettings?: Maybe<WorldSettings>;
  worldSettingss: WorldSettingsPage;
};


export type QueryDropArgs = {
  dropId: Scalars['String']['input'];
  player: Scalars['String']['input'];
  timestamp: Scalars['BigInt']['input'];
};


export type QueryDropSettingArgs = {
  id: Scalars['String']['input'];
};


export type QueryDropSettingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<DropSettingFilter>;
};


export type QueryDropsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<DropFilter>;
};


export type QueryEntityArgs = {
  id: Scalars['BigInt']['input'];
};


export type QueryEntitysArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<EntityFilter>;
};


export type QueryGameStatsArgs = {
  id: Scalars['String']['input'];
};


export type QueryGameStatssArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<GameStatsFilter>;
};


export type QueryLootEventArgs = {
  id: Scalars['String']['input'];
};


export type QueryLootEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<LootEventFilter>;
};


export type QueryLootTokenRangeArgs = {
  token: Scalars['String']['input'];
};


export type QueryLootTokenRangesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<LootTokenRangeFilter>;
};


export type QueryPlayerArgs = {
  address: Scalars['String']['input'];
};


export type QueryPlayerWeeklyLootArgs = {
  player: Scalars['String']['input'];
  week: Scalars['Float']['input'];
};


export type QueryPlayerWeeklyLootsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<PlayerWeeklyLootFilter>;
};


export type QueryPlayersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<PlayerFilter>;
};


export type QueryStoryArgs = {
  id: Scalars['BigInt']['input'];
};


export type QueryStorysArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<StoryFilter>;
};


export type QueryTokenLootStatArgs = {
  token: Scalars['String']['input'];
};


export type QueryTokenLootStatsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TokenLootStatFilter>;
};


export type QueryUndiscoveredStarArgs = {
  id: Scalars['BigInt']['input'];
};


export type QueryUndiscoveredStarsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<UndiscoveredStarFilter>;
};


export type QueryWorldSettingsArgs = {
  id: Scalars['String']['input'];
};


export type QueryWorldSettingssArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<WorldSettingsFilter>;
};

export type Story = {
  __typename?: 'Story';
  coin?: Maybe<Scalars['String']['output']>;
  creator?: Maybe<Scalars['String']['output']>;
  creatorPlayer?: Maybe<Player>;
  entity?: Maybe<Entity>;
  entityId?: Maybe<Scalars['BigInt']['output']>;
  id: Scalars['BigInt']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  prompt?: Maybe<Scalars['String']['output']>;
  status?: Maybe<StoryStatus>;
  symbol?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['BigInt']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
};

export type StoryFilter = {
  AND?: InputMaybe<Array<InputMaybe<StoryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<StoryFilter>>>;
  coin?: InputMaybe<Scalars['String']['input']>;
  coin_contains?: InputMaybe<Scalars['String']['input']>;
  coin_ends_with?: InputMaybe<Scalars['String']['input']>;
  coin_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  coin_not?: InputMaybe<Scalars['String']['input']>;
  coin_not_contains?: InputMaybe<Scalars['String']['input']>;
  coin_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  coin_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  coin_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  coin_starts_with?: InputMaybe<Scalars['String']['input']>;
  creator?: InputMaybe<Scalars['String']['input']>;
  creator_contains?: InputMaybe<Scalars['String']['input']>;
  creator_ends_with?: InputMaybe<Scalars['String']['input']>;
  creator_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  creator_not?: InputMaybe<Scalars['String']['input']>;
  creator_not_contains?: InputMaybe<Scalars['String']['input']>;
  creator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  creator_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  creator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  creator_starts_with?: InputMaybe<Scalars['String']['input']>;
  entityId?: InputMaybe<Scalars['BigInt']['input']>;
  entityId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  entityId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  entityId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  entityId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  entityId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  entityId_not?: InputMaybe<Scalars['BigInt']['input']>;
  entityId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  id_gt?: InputMaybe<Scalars['BigInt']['input']>;
  id_gte?: InputMaybe<Scalars['BigInt']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  id_lt?: InputMaybe<Scalars['BigInt']['input']>;
  id_lte?: InputMaybe<Scalars['BigInt']['input']>;
  id_not?: InputMaybe<Scalars['BigInt']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  image?: InputMaybe<Scalars['String']['input']>;
  image_contains?: InputMaybe<Scalars['String']['input']>;
  image_ends_with?: InputMaybe<Scalars['String']['input']>;
  image_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_not?: InputMaybe<Scalars['String']['input']>;
  image_not_contains?: InputMaybe<Scalars['String']['input']>;
  image_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  image_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  image_starts_with?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  prompt?: InputMaybe<Scalars['String']['input']>;
  prompt_contains?: InputMaybe<Scalars['String']['input']>;
  prompt_ends_with?: InputMaybe<Scalars['String']['input']>;
  prompt_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  prompt_not?: InputMaybe<Scalars['String']['input']>;
  prompt_not_contains?: InputMaybe<Scalars['String']['input']>;
  prompt_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  prompt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  prompt_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  prompt_starts_with?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<StoryStatus>;
  status_in?: InputMaybe<Array<InputMaybe<StoryStatus>>>;
  status_not?: InputMaybe<StoryStatus>;
  status_not_in?: InputMaybe<Array<InputMaybe<StoryStatus>>>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  transactionHash?: InputMaybe<Scalars['String']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['String']['input']>;
  transactionHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  transactionHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  transactionHash_not?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  transactionHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transactionHash_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type StoryPage = {
  __typename?: 'StoryPage';
  items: Array<Story>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TokenLootStat = {
  __typename?: 'TokenLootStat';
  timesLooted: Scalars['BigInt']['output'];
  token: Scalars['String']['output'];
  totalAmountLooted: Scalars['BigInt']['output'];
};

export type TokenLootStatFilter = {
  AND?: InputMaybe<Array<InputMaybe<TokenLootStatFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TokenLootStatFilter>>>;
  timesLooted?: InputMaybe<Scalars['BigInt']['input']>;
  timesLooted_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timesLooted_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timesLooted_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  timesLooted_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timesLooted_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timesLooted_not?: InputMaybe<Scalars['BigInt']['input']>;
  timesLooted_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  totalAmountLooted?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountLooted_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountLooted_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountLooted_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  totalAmountLooted_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountLooted_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountLooted_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountLooted_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
};

export type TokenLootStatPage = {
  __typename?: 'TokenLootStatPage';
  items: Array<TokenLootStat>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UndiscoveredStar = {
  __typename?: 'UndiscoveredStar';
  gameX?: Maybe<Scalars['Int']['output']>;
  gameY?: Maybe<Scalars['Int']['output']>;
  height?: Maybe<Scalars['BigInt']['output']>;
  id: Scalars['BigInt']['output'];
  name?: Maybe<Scalars['String']['output']>;
  quadrantX?: Maybe<Scalars['Int']['output']>;
  quadrantY?: Maybe<Scalars['Int']['output']>;
  radius?: Maybe<Scalars['BigInt']['output']>;
  type?: Maybe<Scalars['JSON']['output']>;
  width?: Maybe<Scalars['BigInt']['output']>;
  x?: Maybe<Scalars['BigInt']['output']>;
  y?: Maybe<Scalars['BigInt']['output']>;
};

export type UndiscoveredStarFilter = {
  AND?: InputMaybe<Array<InputMaybe<UndiscoveredStarFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<UndiscoveredStarFilter>>>;
  gameX?: InputMaybe<Scalars['Int']['input']>;
  gameX_gt?: InputMaybe<Scalars['Int']['input']>;
  gameX_gte?: InputMaybe<Scalars['Int']['input']>;
  gameX_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  gameX_lt?: InputMaybe<Scalars['Int']['input']>;
  gameX_lte?: InputMaybe<Scalars['Int']['input']>;
  gameX_not?: InputMaybe<Scalars['Int']['input']>;
  gameX_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  gameY?: InputMaybe<Scalars['Int']['input']>;
  gameY_gt?: InputMaybe<Scalars['Int']['input']>;
  gameY_gte?: InputMaybe<Scalars['Int']['input']>;
  gameY_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  gameY_lt?: InputMaybe<Scalars['Int']['input']>;
  gameY_lte?: InputMaybe<Scalars['Int']['input']>;
  gameY_not?: InputMaybe<Scalars['Int']['input']>;
  gameY_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height?: InputMaybe<Scalars['BigInt']['input']>;
  height_gt?: InputMaybe<Scalars['BigInt']['input']>;
  height_gte?: InputMaybe<Scalars['BigInt']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  height_lt?: InputMaybe<Scalars['BigInt']['input']>;
  height_lte?: InputMaybe<Scalars['BigInt']['input']>;
  height_not?: InputMaybe<Scalars['BigInt']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  id?: InputMaybe<Scalars['BigInt']['input']>;
  id_gt?: InputMaybe<Scalars['BigInt']['input']>;
  id_gte?: InputMaybe<Scalars['BigInt']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  id_lt?: InputMaybe<Scalars['BigInt']['input']>;
  id_lte?: InputMaybe<Scalars['BigInt']['input']>;
  id_not?: InputMaybe<Scalars['BigInt']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  quadrantX?: InputMaybe<Scalars['Int']['input']>;
  quadrantX_gt?: InputMaybe<Scalars['Int']['input']>;
  quadrantX_gte?: InputMaybe<Scalars['Int']['input']>;
  quadrantX_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  quadrantX_lt?: InputMaybe<Scalars['Int']['input']>;
  quadrantX_lte?: InputMaybe<Scalars['Int']['input']>;
  quadrantX_not?: InputMaybe<Scalars['Int']['input']>;
  quadrantX_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  quadrantY?: InputMaybe<Scalars['Int']['input']>;
  quadrantY_gt?: InputMaybe<Scalars['Int']['input']>;
  quadrantY_gte?: InputMaybe<Scalars['Int']['input']>;
  quadrantY_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  quadrantY_lt?: InputMaybe<Scalars['Int']['input']>;
  quadrantY_lte?: InputMaybe<Scalars['Int']['input']>;
  quadrantY_not?: InputMaybe<Scalars['Int']['input']>;
  quadrantY_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  radius?: InputMaybe<Scalars['BigInt']['input']>;
  radius_gt?: InputMaybe<Scalars['BigInt']['input']>;
  radius_gte?: InputMaybe<Scalars['BigInt']['input']>;
  radius_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  radius_lt?: InputMaybe<Scalars['BigInt']['input']>;
  radius_lte?: InputMaybe<Scalars['BigInt']['input']>;
  radius_not?: InputMaybe<Scalars['BigInt']['input']>;
  radius_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  width?: InputMaybe<Scalars['BigInt']['input']>;
  width_gt?: InputMaybe<Scalars['BigInt']['input']>;
  width_gte?: InputMaybe<Scalars['BigInt']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  width_lt?: InputMaybe<Scalars['BigInt']['input']>;
  width_lte?: InputMaybe<Scalars['BigInt']['input']>;
  width_not?: InputMaybe<Scalars['BigInt']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  x?: InputMaybe<Scalars['BigInt']['input']>;
  x_gt?: InputMaybe<Scalars['BigInt']['input']>;
  x_gte?: InputMaybe<Scalars['BigInt']['input']>;
  x_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  x_lt?: InputMaybe<Scalars['BigInt']['input']>;
  x_lte?: InputMaybe<Scalars['BigInt']['input']>;
  x_not?: InputMaybe<Scalars['BigInt']['input']>;
  x_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  y?: InputMaybe<Scalars['BigInt']['input']>;
  y_gt?: InputMaybe<Scalars['BigInt']['input']>;
  y_gte?: InputMaybe<Scalars['BigInt']['input']>;
  y_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  y_lt?: InputMaybe<Scalars['BigInt']['input']>;
  y_lte?: InputMaybe<Scalars['BigInt']['input']>;
  y_not?: InputMaybe<Scalars['BigInt']['input']>;
  y_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
};

export type UndiscoveredStarPage = {
  __typename?: 'UndiscoveredStarPage';
  items: Array<UndiscoveredStar>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type WorldSettings = {
  __typename?: 'WorldSettings';
  baseSpeed?: Maybe<Scalars['BigInt']['output']>;
  baseStarMetadataURI?: Maybe<Scalars['String']['output']>;
  burnAddress?: Maybe<Scalars['String']['output']>;
  fuel?: Maybe<Scalars['String']['output']>;
  fuelDecimals?: Maybe<Scalars['Int']['output']>;
  fuelName?: Maybe<Scalars['String']['output']>;
  fuelSymbol?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['BigInt']['output']>;
  id: Scalars['String']['output'];
  speedBurningFactor?: Maybe<Scalars['BigInt']['output']>;
  speedHoldingFactor?: Maybe<Scalars['BigInt']['output']>;
  width?: Maybe<Scalars['BigInt']['output']>;
  wormholeCooldown?: Maybe<Scalars['BigInt']['output']>;
  wormholeSpeedMultiplier?: Maybe<Scalars['BigInt']['output']>;
};

export type WorldSettingsFilter = {
  AND?: InputMaybe<Array<InputMaybe<WorldSettingsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<WorldSettingsFilter>>>;
  baseSpeed?: InputMaybe<Scalars['BigInt']['input']>;
  baseSpeed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  baseSpeed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  baseSpeed_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  baseSpeed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  baseSpeed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  baseSpeed_not?: InputMaybe<Scalars['BigInt']['input']>;
  baseSpeed_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  baseStarMetadataURI?: InputMaybe<Scalars['String']['input']>;
  baseStarMetadataURI_contains?: InputMaybe<Scalars['String']['input']>;
  baseStarMetadataURI_ends_with?: InputMaybe<Scalars['String']['input']>;
  baseStarMetadataURI_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  baseStarMetadataURI_not?: InputMaybe<Scalars['String']['input']>;
  baseStarMetadataURI_not_contains?: InputMaybe<Scalars['String']['input']>;
  baseStarMetadataURI_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  baseStarMetadataURI_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  baseStarMetadataURI_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  baseStarMetadataURI_starts_with?: InputMaybe<Scalars['String']['input']>;
  burnAddress?: InputMaybe<Scalars['String']['input']>;
  burnAddress_contains?: InputMaybe<Scalars['String']['input']>;
  burnAddress_ends_with?: InputMaybe<Scalars['String']['input']>;
  burnAddress_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  burnAddress_not?: InputMaybe<Scalars['String']['input']>;
  burnAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  burnAddress_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  burnAddress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  burnAddress_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  burnAddress_starts_with?: InputMaybe<Scalars['String']['input']>;
  fuel?: InputMaybe<Scalars['String']['input']>;
  fuelDecimals?: InputMaybe<Scalars['Int']['input']>;
  fuelDecimals_gt?: InputMaybe<Scalars['Int']['input']>;
  fuelDecimals_gte?: InputMaybe<Scalars['Int']['input']>;
  fuelDecimals_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  fuelDecimals_lt?: InputMaybe<Scalars['Int']['input']>;
  fuelDecimals_lte?: InputMaybe<Scalars['Int']['input']>;
  fuelDecimals_not?: InputMaybe<Scalars['Int']['input']>;
  fuelDecimals_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  fuelName?: InputMaybe<Scalars['String']['input']>;
  fuelName_contains?: InputMaybe<Scalars['String']['input']>;
  fuelName_ends_with?: InputMaybe<Scalars['String']['input']>;
  fuelName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fuelName_not?: InputMaybe<Scalars['String']['input']>;
  fuelName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fuelName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  fuelName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fuelName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  fuelName_starts_with?: InputMaybe<Scalars['String']['input']>;
  fuelSymbol?: InputMaybe<Scalars['String']['input']>;
  fuelSymbol_contains?: InputMaybe<Scalars['String']['input']>;
  fuelSymbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  fuelSymbol_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fuelSymbol_not?: InputMaybe<Scalars['String']['input']>;
  fuelSymbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  fuelSymbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  fuelSymbol_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fuelSymbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  fuelSymbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  fuel_contains?: InputMaybe<Scalars['String']['input']>;
  fuel_ends_with?: InputMaybe<Scalars['String']['input']>;
  fuel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fuel_not?: InputMaybe<Scalars['String']['input']>;
  fuel_not_contains?: InputMaybe<Scalars['String']['input']>;
  fuel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  fuel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fuel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  fuel_starts_with?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['BigInt']['input']>;
  height_gt?: InputMaybe<Scalars['BigInt']['input']>;
  height_gte?: InputMaybe<Scalars['BigInt']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  height_lt?: InputMaybe<Scalars['BigInt']['input']>;
  height_lte?: InputMaybe<Scalars['BigInt']['input']>;
  height_not?: InputMaybe<Scalars['BigInt']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  speedBurningFactor?: InputMaybe<Scalars['BigInt']['input']>;
  speedBurningFactor_gt?: InputMaybe<Scalars['BigInt']['input']>;
  speedBurningFactor_gte?: InputMaybe<Scalars['BigInt']['input']>;
  speedBurningFactor_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  speedBurningFactor_lt?: InputMaybe<Scalars['BigInt']['input']>;
  speedBurningFactor_lte?: InputMaybe<Scalars['BigInt']['input']>;
  speedBurningFactor_not?: InputMaybe<Scalars['BigInt']['input']>;
  speedBurningFactor_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  speedHoldingFactor?: InputMaybe<Scalars['BigInt']['input']>;
  speedHoldingFactor_gt?: InputMaybe<Scalars['BigInt']['input']>;
  speedHoldingFactor_gte?: InputMaybe<Scalars['BigInt']['input']>;
  speedHoldingFactor_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  speedHoldingFactor_lt?: InputMaybe<Scalars['BigInt']['input']>;
  speedHoldingFactor_lte?: InputMaybe<Scalars['BigInt']['input']>;
  speedHoldingFactor_not?: InputMaybe<Scalars['BigInt']['input']>;
  speedHoldingFactor_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  width?: InputMaybe<Scalars['BigInt']['input']>;
  width_gt?: InputMaybe<Scalars['BigInt']['input']>;
  width_gte?: InputMaybe<Scalars['BigInt']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  width_lt?: InputMaybe<Scalars['BigInt']['input']>;
  width_lte?: InputMaybe<Scalars['BigInt']['input']>;
  width_not?: InputMaybe<Scalars['BigInt']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  wormholeCooldown?: InputMaybe<Scalars['BigInt']['input']>;
  wormholeCooldown_gt?: InputMaybe<Scalars['BigInt']['input']>;
  wormholeCooldown_gte?: InputMaybe<Scalars['BigInt']['input']>;
  wormholeCooldown_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  wormholeCooldown_lt?: InputMaybe<Scalars['BigInt']['input']>;
  wormholeCooldown_lte?: InputMaybe<Scalars['BigInt']['input']>;
  wormholeCooldown_not?: InputMaybe<Scalars['BigInt']['input']>;
  wormholeCooldown_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  wormholeSpeedMultiplier?: InputMaybe<Scalars['BigInt']['input']>;
  wormholeSpeedMultiplier_gt?: InputMaybe<Scalars['BigInt']['input']>;
  wormholeSpeedMultiplier_gte?: InputMaybe<Scalars['BigInt']['input']>;
  wormholeSpeedMultiplier_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  wormholeSpeedMultiplier_lt?: InputMaybe<Scalars['BigInt']['input']>;
  wormholeSpeedMultiplier_lte?: InputMaybe<Scalars['BigInt']['input']>;
  wormholeSpeedMultiplier_not?: InputMaybe<Scalars['BigInt']['input']>;
  wormholeSpeedMultiplier_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
};

export type WorldSettingsPage = {
  __typename?: 'WorldSettingsPage';
  items: Array<WorldSettings>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export enum Decision {
  Burn = 'Burn',
  Return = 'Return',
  Steal = 'Steal'
}

export enum EntityType {
  Star = 'STAR',
  Wormhole = 'WORMHOLE'
}

export enum StoryStatus {
  Finalized = 'Finalized',
  Pending = 'Pending'
}

export type UndiscoveredStarQueryVariables = Exact<{
  id: Scalars['BigInt']['input'];
}>;


export type UndiscoveredStarQuery = { __typename?: 'Query', undiscoveredStar?: { __typename?: 'UndiscoveredStar', id: any, x?: any | null, y?: any | null, quadrantX?: number | null, quadrantY?: number | null, gameX?: number | null, gameY?: number | null, width?: any | null, height?: any | null, radius?: any | null, name?: string | null, type?: any | null } | null };

export type UndiscoveredStarsQueryVariables = Exact<{
  where?: InputMaybe<UndiscoveredStarFilter>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type UndiscoveredStarsQuery = { __typename?: 'Query', undiscoveredStars: { __typename?: 'UndiscoveredStarPage', totalCount: number, items: Array<{ __typename?: 'UndiscoveredStar', id: any, x?: any | null, y?: any | null, quadrantX?: number | null, quadrantY?: number | null, gameX?: number | null, gameY?: number | null, width?: any | null, height?: any | null, radius?: any | null, name?: string | null, type?: any | null }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type GameStatsQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GameStatsQuery = { __typename?: 'Query', gameStats?: { __typename?: 'GameStats', id: string, totalPlayers: number, totalLoots: number, totalStarsDiscovered: number, totalDistanceTraveled: any, totalFuelDeposited: any, totalFuelBurned: any } | null };

export type GameStatssQueryVariables = Exact<{
  where?: InputMaybe<GameStatsFilter>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GameStatssQuery = { __typename?: 'Query', gameStatss: { __typename?: 'GameStatsPage', totalCount: number, items: Array<{ __typename?: 'GameStats', id: string, totalPlayers: number, totalLoots: number, totalStarsDiscovered: number, totalDistanceTraveled: any, totalFuelDeposited: any, totalFuelBurned: any }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type PlayerQueryVariables = Exact<{
  address: Scalars['String']['input'];
  player_drops_where?: InputMaybe<DropFilter>;
  player_drops_orderBy?: InputMaybe<Scalars['String']['input']>;
  player_drops_orderDirection?: InputMaybe<Scalars['String']['input']>;
  player_drops_before?: InputMaybe<Scalars['String']['input']>;
  player_drops_after?: InputMaybe<Scalars['String']['input']>;
  player_drops_limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type PlayerQuery = { __typename?: 'Query', player?: { __typename?: 'Player', address: string, previousX?: any | null, previousY?: any | null, x?: any | null, y?: any | null, quadrantX?: number | null, quadrantY?: number | null, speed?: any | null, arrivingAt?: any | null, lastMovedAt?: any | null, lastWormholeUsedAt?: any | null, lastMoveTransactionHash?: string | null, totalDistanceTraveled: any, holding: any, totalBurned: any, discoveredCount: any, lastLootedDay?: any | null, lootCount: any, allTimeLootCount: any, lootStreak: any, fid?: string | null, pfpUrl?: string | null, username?: string | null, ens?: any | null, createdAt?: any | null, drops?: { __typename?: 'DropPage', totalCount: number } | null, anchoredTo?: { __typename?: 'Entity', id: any, x?: any | null, y?: any | null, quadrantX?: number | null, quadrantY?: number | null, radius?: any | null, discoveredAt?: any | null, name?: string | null, type?: any | null } | null } | null };

export type PlayersQueryVariables = Exact<{
  where?: InputMaybe<PlayerFilter>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type PlayersQuery = { __typename?: 'Query', players: { __typename?: 'PlayerPage', totalCount: number, items: Array<{ __typename?: 'Player', address: string, previousX?: any | null, previousY?: any | null, x?: any | null, y?: any | null, quadrantX?: number | null, quadrantY?: number | null, speed?: any | null, arrivingAt?: any | null, lastMovedAt?: any | null, lastWormholeUsedAt?: any | null, lastMoveTransactionHash?: string | null, totalDistanceTraveled: any, holding: any, totalBurned: any, discoveredCount: any, lastLootedDay?: any | null, lootCount: any, allTimeLootCount: any, lootStreak: any, fid?: string | null, pfpUrl?: string | null, username?: string | null, ens?: any | null, createdAt?: any | null, anchoredTo?: { __typename?: 'Entity', id: any, x?: any | null, y?: any | null, quadrantX?: number | null, quadrantY?: number | null, radius?: any | null, discoveredAt?: any | null, name?: string | null, type?: any | null } | null }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type PlayerWeeklyLootQueryVariables = Exact<{
  player: Scalars['String']['input'];
  week: Scalars['Float']['input'];
}>;


export type PlayerWeeklyLootQuery = { __typename?: 'Query', playerWeeklyLoot?: { __typename?: 'PlayerWeeklyLoot', week: number, lootCount: any, player?: { __typename?: 'Player', address: string, previousX?: any | null, previousY?: any | null, x?: any | null, y?: any | null, quadrantX?: number | null, quadrantY?: number | null, speed?: any | null, arrivingAt?: any | null, lastMovedAt?: any | null, lastMoveTransactionHash?: string | null, totalDistanceTraveled: any, holding: any, totalBurned: any, discoveredCount: any, lastLootedDay?: any | null, lootCount: any, allTimeLootCount: any, lootStreak: any, fid?: string | null, pfpUrl?: string | null, username?: string | null, ens?: any | null, createdAt?: any | null } | null } | null };

export type PlayerWeeklyLootsQueryVariables = Exact<{
  where?: InputMaybe<PlayerWeeklyLootFilter>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type PlayerWeeklyLootsQuery = { __typename?: 'Query', playerWeeklyLoots: { __typename?: 'PlayerWeeklyLootPage', totalCount: number, items: Array<{ __typename?: 'PlayerWeeklyLoot', week: number, lootCount: any, player?: { __typename?: 'Player', address: string, previousX?: any | null, previousY?: any | null, x?: any | null, y?: any | null, quadrantX?: number | null, quadrantY?: number | null, speed?: any | null, arrivingAt?: any | null, lastMovedAt?: any | null, lastMoveTransactionHash?: string | null, totalDistanceTraveled: any, holding: any, totalBurned: any, discoveredCount: any, lastLootedDay?: any | null, lootCount: any, allTimeLootCount: any, lootStreak: any, fid?: string | null, pfpUrl?: string | null, username?: string | null, ens?: any | null, createdAt?: any | null } | null }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type WorldSettingsQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type WorldSettingsQuery = { __typename?: 'Query', worldSettings?: { __typename?: 'WorldSettings', id: string, width?: any | null, height?: any | null, baseStarMetadataURI?: string | null, fuel?: string | null, fuelSymbol?: string | null, fuelName?: string | null, fuelDecimals?: number | null, burnAddress?: string | null, baseSpeed?: any | null, speedBurningFactor?: any | null, speedHoldingFactor?: any | null, wormholeSpeedMultiplier?: any | null, wormholeCooldown?: any | null } | null };

export type WorldSettingssQueryVariables = Exact<{
  where?: InputMaybe<WorldSettingsFilter>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type WorldSettingssQuery = { __typename?: 'Query', worldSettingss: { __typename?: 'WorldSettingsPage', totalCount: number, items: Array<{ __typename?: 'WorldSettings', id: string, width?: any | null, height?: any | null, baseStarMetadataURI?: string | null, fuel?: string | null, fuelSymbol?: string | null, fuelName?: string | null, fuelDecimals?: number | null, burnAddress?: string | null, baseSpeed?: any | null, speedBurningFactor?: any | null, speedHoldingFactor?: any | null, wormholeSpeedMultiplier?: any | null, wormholeCooldown?: any | null }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type EntityQueryVariables = Exact<{
  id: Scalars['BigInt']['input'];
  entity_playersAnchored_where?: InputMaybe<PlayerFilter>;
  entity_playersAnchored_orderBy?: InputMaybe<Scalars['String']['input']>;
  entity_playersAnchored_orderDirection?: InputMaybe<Scalars['String']['input']>;
  entity_playersAnchored_before?: InputMaybe<Scalars['String']['input']>;
  entity_playersAnchored_after?: InputMaybe<Scalars['String']['input']>;
  entity_playersAnchored_limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type EntityQuery = { __typename?: 'Query', entity?: { __typename?: 'Entity', id: any, x?: any | null, y?: any | null, quadrantX?: number | null, quadrantY?: number | null, radius?: any | null, entityType?: EntityType | null, module?: string | null, moduleName?: string | null, discoveredAt?: any | null, name?: string | null, type?: any | null, discoveredBy?: { __typename?: 'Player', address: string, previousX?: any | null, previousY?: any | null, x?: any | null, y?: any | null, quadrantX?: number | null, quadrantY?: number | null, speed?: any | null, arrivingAt?: any | null, lastMovedAt?: any | null, lastWormholeUsedAt?: any | null, lastMoveTransactionHash?: string | null, totalDistanceTraveled: any, holding: any, totalBurned: any, discoveredCount: any, lastLootedDay?: any | null, lootCount: any, allTimeLootCount: any, lootStreak: any, fid?: string | null, pfpUrl?: string | null, username?: string | null, ens?: any | null, createdAt?: any | null } | null, playersAnchored?: { __typename?: 'PlayerPage', totalCount: number, items: Array<{ __typename?: 'Player', address: string, anchoredToStarId?: any | null, previousX?: any | null, previousY?: any | null, x?: any | null, y?: any | null, quadrantX?: number | null, quadrantY?: number | null, speed?: any | null, arrivingAt?: any | null, lastMovedAt?: any | null, lastWormholeUsedAt?: any | null, lastMoveTransactionHash?: string | null, totalDistanceTraveled: any, holding: any, totalBurned: any, discoveredCount: any, lastLootedDay?: any | null, lootCount: any, allTimeLootCount: any, lootStreak: any, fid?: string | null, pfpUrl?: string | null, username?: string | null, ens?: any | null, createdAt?: any | null }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } | null } | null };

export type EntitysQueryVariables = Exact<{
  where?: InputMaybe<EntityFilter>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  entitys_items_items_playersAnchored_where?: InputMaybe<PlayerFilter>;
  entitys_items_items_playersAnchored_orderBy?: InputMaybe<Scalars['String']['input']>;
  entitys_items_items_playersAnchored_orderDirection?: InputMaybe<Scalars['String']['input']>;
  entitys_items_items_playersAnchored_before?: InputMaybe<Scalars['String']['input']>;
  entitys_items_items_playersAnchored_after?: InputMaybe<Scalars['String']['input']>;
  entitys_items_items_playersAnchored_limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type EntitysQuery = { __typename?: 'Query', entitys: { __typename?: 'EntityPage', totalCount: number, items: Array<{ __typename?: 'Entity', id: any, x?: any | null, y?: any | null, quadrantX?: number | null, quadrantY?: number | null, radius?: any | null, discoveredAt?: any | null, name?: string | null, type?: any | null, module?: string | null, moduleName?: string | null, entityType?: EntityType | null, discoveredBy?: { __typename?: 'Player', address: string, anchoredToStarId?: any | null, previousX?: any | null, previousY?: any | null, x?: any | null, y?: any | null, quadrantX?: number | null, quadrantY?: number | null, speed?: any | null, arrivingAt?: any | null, lastMovedAt?: any | null, lastWormholeUsedAt?: any | null, lastMoveTransactionHash?: string | null, totalDistanceTraveled: any, holding: any, totalBurned: any, discoveredCount: any, lastLootedDay?: any | null, lootCount: any, allTimeLootCount: any, lootStreak: any, fid?: string | null, pfpUrl?: string | null, username?: string | null, ens?: any | null, createdAt?: any | null } | null, playersAnchored?: { __typename?: 'PlayerPage', totalCount: number, items: Array<{ __typename?: 'Player', address: string, anchoredToStarId?: any | null, previousX?: any | null, previousY?: any | null, x?: any | null, y?: any | null, quadrantX?: number | null, quadrantY?: number | null, speed?: any | null, arrivingAt?: any | null, lastMovedAt?: any | null, lastMoveTransactionHash?: string | null, totalDistanceTraveled: any, holding: any, totalBurned: any, discoveredCount: any, lastLootedDay?: any | null, lootCount: any, allTimeLootCount: any, lootStreak: any, fid?: string | null, pfpUrl?: string | null, username?: string | null, ens?: any | null, createdAt?: any | null }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } | null }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type LootEventQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type LootEventQuery = { __typename?: 'Query', lootEvent?: { __typename?: 'LootEvent', id: string, player?: string | null, token?: string | null, tokenName?: string | null, tokenSymbol?: string | null, tokenDecimals?: number | null, amount?: any | null, timestamp?: any | null } | null };

export type LootEventsQueryVariables = Exact<{
  where?: InputMaybe<LootEventFilter>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type LootEventsQuery = { __typename?: 'Query', lootEvents: { __typename?: 'LootEventPage', totalCount: number, items: Array<{ __typename?: 'LootEvent', id: string, player?: string | null, token?: string | null, tokenName?: string | null, tokenSymbol?: string | null, tokenDecimals?: number | null, amount?: any | null, timestamp?: any | null }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type LootTokenRangeQueryVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type LootTokenRangeQuery = { __typename?: 'Query', lootTokenRange?: { __typename?: 'LootTokenRange', token: string, tokenName?: string | null, tokenSymbol?: string | null, tokenDecimals?: number | null, enabled: boolean, min?: any | null, max?: any | null } | null };

export type LootTokenRangesQueryVariables = Exact<{
  where?: InputMaybe<LootTokenRangeFilter>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type LootTokenRangesQuery = { __typename?: 'Query', lootTokenRanges: { __typename?: 'LootTokenRangePage', totalCount: number, items: Array<{ __typename?: 'LootTokenRange', token: string, tokenName?: string | null, tokenSymbol?: string | null, tokenDecimals?: number | null, enabled: boolean, min?: any | null, max?: any | null }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type TokenLootStatQueryVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type TokenLootStatQuery = { __typename?: 'Query', tokenLootStat?: { __typename?: 'TokenLootStat', token: string, totalAmountLooted: any, timesLooted: any } | null };

export type TokenLootStatsQueryVariables = Exact<{
  where?: InputMaybe<TokenLootStatFilter>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type TokenLootStatsQuery = { __typename?: 'Query', tokenLootStats: { __typename?: 'TokenLootStatPage', totalCount: number, items: Array<{ __typename?: 'TokenLootStat', token: string, totalAmountLooted: any, timesLooted: any }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type DropSettingQueryVariables = Exact<{
  id: Scalars['String']['input'];
  dropSetting_drops_where?: InputMaybe<DropFilter>;
  dropSetting_drops_orderBy?: InputMaybe<Scalars['String']['input']>;
  dropSetting_drops_orderDirection?: InputMaybe<Scalars['String']['input']>;
  dropSetting_drops_before?: InputMaybe<Scalars['String']['input']>;
  dropSetting_drops_after?: InputMaybe<Scalars['String']['input']>;
  dropSetting_drops_limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type DropSettingQuery = { __typename?: 'Query', dropSetting?: { __typename?: 'DropSetting', id: string, token?: string | null, tokenName?: string | null, tokenSymbol?: string | null, tokenDecimals?: number | null, dropAmount?: any | null, cargoOwner?: string | null, timeOfArrival?: any | null, drops?: { __typename?: 'DropPage', totalCount: number } | null } | null };

export type DropSettingsQueryVariables = Exact<{
  where?: InputMaybe<DropSettingFilter>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type DropSettingsQuery = { __typename?: 'Query', dropSettings: { __typename?: 'DropSettingPage', totalCount: number, items: Array<{ __typename?: 'DropSetting', id: string, token?: string | null, tokenName?: string | null, tokenSymbol?: string | null, tokenDecimals?: number | null, dropAmount?: any | null, cargoOwner?: string | null, timeOfArrival?: any | null }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type DropQueryVariables = Exact<{
  dropId: Scalars['String']['input'];
  player: Scalars['String']['input'];
  timestamp: Scalars['BigInt']['input'];
}>;


export type DropQuery = { __typename?: 'Query', drop?: { __typename?: 'Drop', data?: any | null, dropId: string, decision: Decision, timestamp: any, transactionHash: string, player?: { __typename?: 'Player', address: string, previousX?: any | null, previousY?: any | null, x?: any | null, y?: any | null, quadrantX?: number | null, quadrantY?: number | null, speed?: any | null, arrivingAt?: any | null, lastMovedAt?: any | null, lastMoveTransactionHash?: string | null, totalDistanceTraveled: any, holding: any, totalBurned: any, discoveredCount: any, lastLootedDay?: any | null, lootCount: any, allTimeLootCount: any, lootStreak: any, fid?: string | null, pfpUrl?: string | null, username?: string | null, ens?: any | null, createdAt?: any | null } | null, dropSetting?: { __typename?: 'DropSetting', id: string, token?: string | null, tokenName?: string | null, tokenSymbol?: string | null, tokenDecimals?: number | null, dropAmount?: any | null, cargoOwner?: string | null, timeOfArrival?: any | null } | null } | null };

export type DropsQueryVariables = Exact<{
  where?: InputMaybe<DropFilter>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type DropsQuery = { __typename?: 'Query', drops: { __typename?: 'DropPage', totalCount: number, items: Array<{ __typename?: 'Drop', data?: any | null, dropId: string, decision: Decision, timestamp: any, transactionHash: string }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type StoryQueryVariables = Exact<{
  id: Scalars['BigInt']['input'];
}>;


export type StoryQuery = { __typename?: 'Query', story?: { __typename?: 'Story', id: any, entityId?: any | null, creator?: string | null, title?: string | null, prompt?: string | null, transactionHash?: string | null, timestamp?: any | null, coin?: string | null, image?: string | null, name?: string | null, status?: StoryStatus | null, symbol?: string | null, entity?: { __typename?: 'Entity', id: any, x?: any | null, y?: any | null, quadrantX?: number | null, quadrantY?: number | null, radius?: any | null, discoveredAt?: any | null, name?: string | null, type?: any | null, entityType?: EntityType | null, module?: string | null, moduleName?: string | null } | null, creatorPlayer?: { __typename?: 'Player', address: string, anchoredToStarId?: any | null, previousX?: any | null, previousY?: any | null, x?: any | null, y?: any | null, quadrantX?: number | null, quadrantY?: number | null, speed?: any | null, arrivingAt?: any | null, lastMovedAt?: any | null, lastWormholeUsedAt?: any | null, lastMoveTransactionHash?: string | null, totalDistanceTraveled: any, holding: any, totalBurned: any, discoveredCount: any, lastLootedDay?: any | null, lootCount: any, allTimeLootCount: any, lootStreak: any, fid?: string | null, pfpUrl?: string | null, username?: string | null, ens?: any | null, createdAt?: any | null } | null } | null };

export type StorysQueryVariables = Exact<{
  where?: InputMaybe<StoryFilter>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type StorysQuery = { __typename?: 'Query', storys: { __typename?: 'StoryPage', totalCount: number, items: Array<{ __typename?: 'Story', id: any, entityId?: any | null, creator?: string | null, status?: StoryStatus | null, title?: string | null, prompt?: string | null, transactionHash?: string | null, timestamp?: any | null, coin?: string | null, image?: string | null, name?: string | null, symbol?: string | null, entity?: { __typename?: 'Entity', id: any, x?: any | null, y?: any | null, quadrantX?: number | null, quadrantY?: number | null, radius?: any | null, discoveredAt?: any | null, name?: string | null, type?: any | null, entityType?: EntityType | null, module?: string | null, moduleName?: string | null } | null, creatorPlayer?: { __typename?: 'Player', address: string, anchoredToStarId?: any | null, previousX?: any | null, previousY?: any | null, x?: any | null, y?: any | null, quadrantX?: number | null, quadrantY?: number | null, speed?: any | null, arrivingAt?: any | null, lastMovedAt?: any | null, lastWormholeUsedAt?: any | null, lastMoveTransactionHash?: string | null, totalDistanceTraveled: any, holding: any, totalBurned: any, discoveredCount: any, lastLootedDay?: any | null, lootCount: any, allTimeLootCount: any, lootStreak: any, fid?: string | null, pfpUrl?: string | null, username?: string | null, ens?: any | null, createdAt?: any | null } | null }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };


export const UndiscoveredStarDocument = gql`
    query undiscoveredStar($id: BigInt!) {
  undiscoveredStar(id: $id) {
    id
    x
    y
    quadrantX
    quadrantY
    gameX
    gameY
    width
    height
    radius
    name
    type
  }
}
    `;
export const UndiscoveredStarsDocument = gql`
    query undiscoveredStars($where: UndiscoveredStarFilter, $orderBy: String, $orderDirection: String, $before: String, $after: String, $limit: Int) {
  undiscoveredStars(
    where: $where
    orderBy: $orderBy
    orderDirection: $orderDirection
    before: $before
    after: $after
    limit: $limit
  ) {
    items {
      id
      x
      y
      quadrantX
      quadrantY
      gameX
      gameY
      width
      height
      radius
      name
      type
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    totalCount
  }
}
    `;
export const GameStatsDocument = gql`
    query gameStats($id: String!) {
  gameStats(id: $id) {
    id
    totalPlayers
    totalLoots
    totalStarsDiscovered
    totalDistanceTraveled
    totalFuelDeposited
    totalFuelBurned
  }
}
    `;
export const GameStatssDocument = gql`
    query gameStatss($where: GameStatsFilter, $orderBy: String, $orderDirection: String, $before: String, $after: String, $limit: Int) {
  gameStatss(
    where: $where
    orderBy: $orderBy
    orderDirection: $orderDirection
    before: $before
    after: $after
    limit: $limit
  ) {
    items {
      id
      totalPlayers
      totalLoots
      totalStarsDiscovered
      totalDistanceTraveled
      totalFuelDeposited
      totalFuelBurned
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    totalCount
  }
}
    `;
export const PlayerDocument = gql`
    query player($address: String!, $player_drops_where: DropFilter, $player_drops_orderBy: String, $player_drops_orderDirection: String, $player_drops_before: String, $player_drops_after: String, $player_drops_limit: Int) {
  player(address: $address) {
    address
    previousX
    previousY
    x
    y
    quadrantX
    quadrantY
    speed
    arrivingAt
    lastMovedAt
    lastWormholeUsedAt
    lastMoveTransactionHash
    totalDistanceTraveled
    holding
    totalBurned
    discoveredCount
    lastLootedDay
    lootCount
    allTimeLootCount
    lootStreak
    fid
    pfpUrl
    username
    ens
    createdAt
    drops(
      where: $player_drops_where
      orderBy: $player_drops_orderBy
      orderDirection: $player_drops_orderDirection
      before: $player_drops_before
      after: $player_drops_after
      limit: $player_drops_limit
    ) {
      totalCount
    }
    anchoredTo {
      id
      x
      y
      quadrantX
      quadrantY
      radius
      discoveredAt
      name
      type
    }
  }
}
    `;
export const PlayersDocument = gql`
    query players($where: PlayerFilter, $orderBy: String, $orderDirection: String, $before: String, $after: String, $limit: Int) {
  players(
    where: $where
    orderBy: $orderBy
    orderDirection: $orderDirection
    before: $before
    after: $after
    limit: $limit
  ) {
    items {
      address
      previousX
      previousY
      x
      y
      quadrantX
      quadrantY
      speed
      arrivingAt
      lastMovedAt
      lastWormholeUsedAt
      lastMoveTransactionHash
      totalDistanceTraveled
      holding
      totalBurned
      discoveredCount
      lastLootedDay
      lootCount
      allTimeLootCount
      lootStreak
      fid
      pfpUrl
      username
      ens
      createdAt
      anchoredTo {
        id
        x
        y
        quadrantX
        quadrantY
        radius
        discoveredAt
        name
        type
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    totalCount
  }
}
    `;
export const PlayerWeeklyLootDocument = gql`
    query playerWeeklyLoot($player: String!, $week: Float!) {
  playerWeeklyLoot(player: $player, week: $week) {
    player {
      address
      previousX
      previousY
      x
      y
      quadrantX
      quadrantY
      speed
      arrivingAt
      lastMovedAt
      lastMoveTransactionHash
      totalDistanceTraveled
      holding
      totalBurned
      discoveredCount
      lastLootedDay
      lootCount
      allTimeLootCount
      lootStreak
      fid
      pfpUrl
      username
      ens
      createdAt
    }
    week
    lootCount
  }
}
    `;
export const PlayerWeeklyLootsDocument = gql`
    query playerWeeklyLoots($where: PlayerWeeklyLootFilter, $orderBy: String, $orderDirection: String, $before: String, $after: String, $limit: Int) {
  playerWeeklyLoots(
    where: $where
    orderBy: $orderBy
    orderDirection: $orderDirection
    before: $before
    after: $after
    limit: $limit
  ) {
    items {
      player {
        address
        previousX
        previousY
        x
        y
        quadrantX
        quadrantY
        speed
        arrivingAt
        lastMovedAt
        lastMoveTransactionHash
        totalDistanceTraveled
        holding
        totalBurned
        discoveredCount
        lastLootedDay
        lootCount
        allTimeLootCount
        lootStreak
        fid
        pfpUrl
        username
        ens
        createdAt
      }
      week
      lootCount
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    totalCount
  }
}
    `;
export const WorldSettingsDocument = gql`
    query worldSettings($id: String!) {
  worldSettings(id: $id) {
    id
    width
    height
    baseStarMetadataURI
    fuel
    fuelSymbol
    fuelName
    fuelDecimals
    burnAddress
    baseSpeed
    speedBurningFactor
    speedHoldingFactor
    wormholeSpeedMultiplier
    wormholeCooldown
  }
}
    `;
export const WorldSettingssDocument = gql`
    query worldSettingss($where: WorldSettingsFilter, $orderBy: String, $orderDirection: String, $before: String, $after: String, $limit: Int) {
  worldSettingss(
    where: $where
    orderBy: $orderBy
    orderDirection: $orderDirection
    before: $before
    after: $after
    limit: $limit
  ) {
    items {
      id
      width
      height
      baseStarMetadataURI
      fuel
      fuelSymbol
      fuelName
      fuelDecimals
      burnAddress
      baseSpeed
      speedBurningFactor
      speedHoldingFactor
      wormholeSpeedMultiplier
      wormholeCooldown
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    totalCount
  }
}
    `;
export const EntityDocument = gql`
    query entity($id: BigInt!, $entity_playersAnchored_where: PlayerFilter, $entity_playersAnchored_orderBy: String, $entity_playersAnchored_orderDirection: String, $entity_playersAnchored_before: String, $entity_playersAnchored_after: String, $entity_playersAnchored_limit: Int) {
  entity(id: $id) {
    id
    x
    y
    quadrantX
    quadrantY
    radius
    entityType
    module
    moduleName
    discoveredBy {
      address
      previousX
      previousY
      x
      y
      quadrantX
      quadrantY
      speed
      arrivingAt
      lastMovedAt
      lastWormholeUsedAt
      lastMoveTransactionHash
      totalDistanceTraveled
      holding
      totalBurned
      discoveredCount
      lastLootedDay
      lootCount
      allTimeLootCount
      lootStreak
      fid
      pfpUrl
      username
      ens
      createdAt
    }
    discoveredAt
    name
    type
    playersAnchored(
      where: $entity_playersAnchored_where
      orderBy: $entity_playersAnchored_orderBy
      orderDirection: $entity_playersAnchored_orderDirection
      before: $entity_playersAnchored_before
      after: $entity_playersAnchored_after
      limit: $entity_playersAnchored_limit
    ) {
      items {
        address
        anchoredToStarId
        previousX
        previousY
        x
        y
        quadrantX
        quadrantY
        speed
        arrivingAt
        lastMovedAt
        lastWormholeUsedAt
        lastMoveTransactionHash
        totalDistanceTraveled
        holding
        totalBurned
        discoveredCount
        lastLootedDay
        lootCount
        allTimeLootCount
        lootStreak
        fid
        pfpUrl
        username
        ens
        createdAt
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      totalCount
    }
  }
}
    `;
export const EntitysDocument = gql`
    query entitys($where: EntityFilter, $orderBy: String, $orderDirection: String, $before: String, $after: String, $limit: Int, $entitys_items_items_playersAnchored_where: PlayerFilter, $entitys_items_items_playersAnchored_orderBy: String, $entitys_items_items_playersAnchored_orderDirection: String, $entitys_items_items_playersAnchored_before: String, $entitys_items_items_playersAnchored_after: String, $entitys_items_items_playersAnchored_limit: Int) {
  entitys(
    where: $where
    orderBy: $orderBy
    orderDirection: $orderDirection
    before: $before
    after: $after
    limit: $limit
  ) {
    items {
      id
      x
      y
      quadrantX
      quadrantY
      radius
      discoveredAt
      name
      type
      module
      moduleName
      discoveredBy {
        address
        anchoredToStarId
        previousX
        previousY
        x
        y
        quadrantX
        quadrantY
        speed
        arrivingAt
        lastMovedAt
        lastWormholeUsedAt
        lastMoveTransactionHash
        totalDistanceTraveled
        holding
        totalBurned
        discoveredCount
        lastLootedDay
        lootCount
        allTimeLootCount
        lootStreak
        fid
        pfpUrl
        username
        ens
        createdAt
      }
      entityType
      playersAnchored(
        where: $entitys_items_items_playersAnchored_where
        orderBy: $entitys_items_items_playersAnchored_orderBy
        orderDirection: $entitys_items_items_playersAnchored_orderDirection
        before: $entitys_items_items_playersAnchored_before
        after: $entitys_items_items_playersAnchored_after
        limit: $entitys_items_items_playersAnchored_limit
      ) {
        items {
          address
          anchoredToStarId
          previousX
          previousY
          x
          y
          quadrantX
          quadrantY
          speed
          arrivingAt
          lastMovedAt
          lastMoveTransactionHash
          totalDistanceTraveled
          holding
          totalBurned
          discoveredCount
          lastLootedDay
          lootCount
          allTimeLootCount
          lootStreak
          fid
          pfpUrl
          username
          ens
          createdAt
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
        totalCount
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    totalCount
  }
}
    `;
export const LootEventDocument = gql`
    query lootEvent($id: String!) {
  lootEvent(id: $id) {
    id
    player
    token
    tokenName
    tokenSymbol
    tokenDecimals
    amount
    timestamp
  }
}
    `;
export const LootEventsDocument = gql`
    query lootEvents($where: LootEventFilter, $orderBy: String, $orderDirection: String, $before: String, $after: String, $limit: Int) {
  lootEvents(
    where: $where
    orderBy: $orderBy
    orderDirection: $orderDirection
    before: $before
    after: $after
    limit: $limit
  ) {
    items {
      id
      player
      token
      tokenName
      tokenSymbol
      tokenDecimals
      amount
      timestamp
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    totalCount
  }
}
    `;
export const LootTokenRangeDocument = gql`
    query lootTokenRange($token: String!) {
  lootTokenRange(token: $token) {
    token
    tokenName
    tokenSymbol
    tokenDecimals
    enabled
    min
    max
  }
}
    `;
export const LootTokenRangesDocument = gql`
    query lootTokenRanges($where: LootTokenRangeFilter, $orderBy: String, $orderDirection: String, $before: String, $after: String, $limit: Int) {
  lootTokenRanges(
    where: $where
    orderBy: $orderBy
    orderDirection: $orderDirection
    before: $before
    after: $after
    limit: $limit
  ) {
    items {
      token
      tokenName
      tokenSymbol
      tokenDecimals
      enabled
      min
      max
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    totalCount
  }
}
    `;
export const TokenLootStatDocument = gql`
    query tokenLootStat($token: String!) {
  tokenLootStat(token: $token) {
    token
    totalAmountLooted
    timesLooted
  }
}
    `;
export const TokenLootStatsDocument = gql`
    query tokenLootStats($where: TokenLootStatFilter, $orderBy: String, $orderDirection: String, $before: String, $after: String, $limit: Int) {
  tokenLootStats(
    where: $where
    orderBy: $orderBy
    orderDirection: $orderDirection
    before: $before
    after: $after
    limit: $limit
  ) {
    items {
      token
      totalAmountLooted
      timesLooted
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    totalCount
  }
}
    `;
export const DropSettingDocument = gql`
    query dropSetting($id: String!, $dropSetting_drops_where: DropFilter, $dropSetting_drops_orderBy: String, $dropSetting_drops_orderDirection: String, $dropSetting_drops_before: String, $dropSetting_drops_after: String, $dropSetting_drops_limit: Int) {
  dropSetting(id: $id) {
    id
    token
    tokenName
    tokenSymbol
    tokenDecimals
    dropAmount
    cargoOwner
    timeOfArrival
    drops(
      where: $dropSetting_drops_where
      orderBy: $dropSetting_drops_orderBy
      orderDirection: $dropSetting_drops_orderDirection
      before: $dropSetting_drops_before
      after: $dropSetting_drops_after
      limit: $dropSetting_drops_limit
    ) {
      totalCount
    }
  }
}
    `;
export const DropSettingsDocument = gql`
    query dropSettings($where: DropSettingFilter, $orderBy: String, $orderDirection: String, $before: String, $after: String, $limit: Int) {
  dropSettings(
    where: $where
    orderBy: $orderBy
    orderDirection: $orderDirection
    before: $before
    after: $after
    limit: $limit
  ) {
    items {
      id
      token
      tokenName
      tokenSymbol
      tokenDecimals
      dropAmount
      cargoOwner
      timeOfArrival
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    totalCount
  }
}
    `;
export const DropDocument = gql`
    query drop($dropId: String!, $player: String!, $timestamp: BigInt!) {
  drop(dropId: $dropId, player: $player, timestamp: $timestamp) {
    data
    dropId
    player {
      address
      previousX
      previousY
      x
      y
      quadrantX
      quadrantY
      speed
      arrivingAt
      lastMovedAt
      lastMoveTransactionHash
      totalDistanceTraveled
      holding
      totalBurned
      discoveredCount
      lastLootedDay
      lootCount
      allTimeLootCount
      lootStreak
      fid
      pfpUrl
      username
      ens
      createdAt
    }
    decision
    timestamp
    transactionHash
    dropSetting {
      id
      token
      tokenName
      tokenSymbol
      tokenDecimals
      dropAmount
      cargoOwner
      timeOfArrival
    }
  }
}
    `;
export const DropsDocument = gql`
    query drops($where: DropFilter, $orderBy: String, $orderDirection: String, $before: String, $after: String, $limit: Int) {
  drops(
    where: $where
    orderBy: $orderBy
    orderDirection: $orderDirection
    before: $before
    after: $after
    limit: $limit
  ) {
    items {
      data
      dropId
      decision
      timestamp
      transactionHash
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    totalCount
  }
}
    `;
export const StoryDocument = gql`
    query story($id: BigInt!) {
  story(id: $id) {
    id
    entityId
    creator
    title
    prompt
    transactionHash
    timestamp
    coin
    image
    name
    status
    symbol
    entity {
      id
      x
      y
      quadrantX
      quadrantY
      radius
      discoveredAt
      name
      type
      entityType
      module
      moduleName
    }
    creatorPlayer {
      address
      anchoredToStarId
      previousX
      previousY
      x
      y
      quadrantX
      quadrantY
      speed
      arrivingAt
      lastMovedAt
      lastWormholeUsedAt
      lastMoveTransactionHash
      totalDistanceTraveled
      holding
      totalBurned
      discoveredCount
      lastLootedDay
      lootCount
      allTimeLootCount
      lootStreak
      fid
      pfpUrl
      username
      ens
      createdAt
    }
  }
}
    `;
export const StorysDocument = gql`
    query storys($where: StoryFilter, $orderBy: String, $orderDirection: String, $before: String, $after: String, $limit: Int) {
  storys(
    where: $where
    orderBy: $orderBy
    orderDirection: $orderDirection
    before: $before
    after: $after
    limit: $limit
  ) {
    items {
      id
      entityId
      creator
      status
      entity {
        id
        x
        y
        quadrantX
        quadrantY
        radius
        discoveredAt
        name
        type
        entityType
        module
        moduleName
      }
      creatorPlayer {
        address
        anchoredToStarId
        previousX
        previousY
        x
        y
        quadrantX
        quadrantY
        speed
        arrivingAt
        lastMovedAt
        lastWormholeUsedAt
        lastMoveTransactionHash
        totalDistanceTraveled
        holding
        totalBurned
        discoveredCount
        lastLootedDay
        lootCount
        allTimeLootCount
        lootStreak
        fid
        pfpUrl
        username
        ens
        createdAt
      }
      title
      prompt
      transactionHash
      timestamp
      coin
      image
      name
      symbol
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    totalCount
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    undiscoveredStar(variables: UndiscoveredStarQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UndiscoveredStarQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UndiscoveredStarQuery>(UndiscoveredStarDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'undiscoveredStar', 'query', variables);
    },
    undiscoveredStars(variables?: UndiscoveredStarsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UndiscoveredStarsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UndiscoveredStarsQuery>(UndiscoveredStarsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'undiscoveredStars', 'query', variables);
    },
    gameStats(variables: GameStatsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GameStatsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GameStatsQuery>(GameStatsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'gameStats', 'query', variables);
    },
    gameStatss(variables?: GameStatssQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GameStatssQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GameStatssQuery>(GameStatssDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'gameStatss', 'query', variables);
    },
    player(variables: PlayerQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PlayerQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PlayerQuery>(PlayerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'player', 'query', variables);
    },
    players(variables?: PlayersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PlayersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PlayersQuery>(PlayersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'players', 'query', variables);
    },
    playerWeeklyLoot(variables: PlayerWeeklyLootQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PlayerWeeklyLootQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PlayerWeeklyLootQuery>(PlayerWeeklyLootDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'playerWeeklyLoot', 'query', variables);
    },
    playerWeeklyLoots(variables?: PlayerWeeklyLootsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PlayerWeeklyLootsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PlayerWeeklyLootsQuery>(PlayerWeeklyLootsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'playerWeeklyLoots', 'query', variables);
    },
    worldSettings(variables: WorldSettingsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<WorldSettingsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<WorldSettingsQuery>(WorldSettingsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'worldSettings', 'query', variables);
    },
    worldSettingss(variables?: WorldSettingssQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<WorldSettingssQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<WorldSettingssQuery>(WorldSettingssDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'worldSettingss', 'query', variables);
    },
    entity(variables: EntityQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<EntityQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<EntityQuery>(EntityDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'entity', 'query', variables);
    },
    entitys(variables?: EntitysQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<EntitysQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<EntitysQuery>(EntitysDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'entitys', 'query', variables);
    },
    lootEvent(variables: LootEventQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<LootEventQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LootEventQuery>(LootEventDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'lootEvent', 'query', variables);
    },
    lootEvents(variables?: LootEventsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<LootEventsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LootEventsQuery>(LootEventsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'lootEvents', 'query', variables);
    },
    lootTokenRange(variables: LootTokenRangeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<LootTokenRangeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LootTokenRangeQuery>(LootTokenRangeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'lootTokenRange', 'query', variables);
    },
    lootTokenRanges(variables?: LootTokenRangesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<LootTokenRangesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LootTokenRangesQuery>(LootTokenRangesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'lootTokenRanges', 'query', variables);
    },
    tokenLootStat(variables: TokenLootStatQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<TokenLootStatQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TokenLootStatQuery>(TokenLootStatDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'tokenLootStat', 'query', variables);
    },
    tokenLootStats(variables?: TokenLootStatsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<TokenLootStatsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TokenLootStatsQuery>(TokenLootStatsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'tokenLootStats', 'query', variables);
    },
    dropSetting(variables: DropSettingQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DropSettingQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<DropSettingQuery>(DropSettingDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'dropSetting', 'query', variables);
    },
    dropSettings(variables?: DropSettingsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DropSettingsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<DropSettingsQuery>(DropSettingsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'dropSettings', 'query', variables);
    },
    drop(variables: DropQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DropQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<DropQuery>(DropDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'drop', 'query', variables);
    },
    drops(variables?: DropsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DropsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<DropsQuery>(DropsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'drops', 'query', variables);
    },
    story(variables: StoryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<StoryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StoryQuery>(StoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'story', 'query', variables);
    },
    storys(variables?: StorysQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<StorysQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StorysQuery>(StorysDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'storys', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;