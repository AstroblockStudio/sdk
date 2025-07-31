# Astroblock SDK

A TypeScript SDK for querying Astroblock game data via GraphQL.

## Installation

```bash
npm install astroblock-sdk
```

## Usage

```typescript
import { createAstroblockSdk } from 'astroblock-sdk';

// Create SDK instance
const sdk = createAstroblockSdk('mainnet'); // or 'testnet'

// Query player data
const player = await sdk.player({ address: "0x..." });

// Stars
const stars = await sdk.entitys({
    where: {
        entityType: EntityType.Star
    },
    limit: 500
})

// Query loot events
const loot = await sdk.lootEvents({ limit: 10 });
```

## Available Methods

The SDK provides methods to query:
- Players and their positions
- Game statistics and world data
- Loot events and token information
- Entities (Stars, Wormholes, ...)
- Drops and cargo data

All methods are fully typed and support filtering and pagination options.

## License

ISC