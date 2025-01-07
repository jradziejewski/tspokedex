# Pokemon CLI

A command-line interface Pokedex application that lets you explore Pokemon locations, catch Pokemon, and manage your collection using the PokeAPI.

## Features

- Browse Pokemon locations with pagination
- Explore Pokemon available in specific locations
- Catch Pokemon to add to your collection
- Inspect detailed information about caught Pokemon
- View your Pokedex collection
- Interactive command-line interface
- Caching system for API responses

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pokemon-cli
```

2. Install dependencies:
```bash
npm install
```

3. Run the application:
```bash
npm start
```

## Commands

- `help`: Display a list of available commands
- `map`: Show the next 20 locations
- `mapb`: Show the previous 20 locations
- `explore <location_name>`: Display Pokemon available in a specific location
- `catch <pokemon_name>`: Attempt to catch a Pokemon
- `inspect <pokemon_name>`: View details of a caught Pokemon
- `pokedex`: View all Pokemon in your collection
- `exit`: Close the application

## Usage Example

```bash
Pokedex > map
[Displays 20 location names]

Pokedex > explore canalave-city
Pokemon in canalave-city:
- pikachu
- charizard
...

Pokedex > catch pikachu
Throwing a Pokeball at pikachu...
Got it! pikachu was caught!

Pokedex > inspect pikachu
[Displays Pokemon details]
```

## Caching System

The application implements an efficient caching system to minimize API calls and improve performance:

### Cache Implementation

- Uses a generic `Cache` class that can store any type of data
- Each cache entry includes:
  - The cached value
  - A timestamp (`createdAt`)
- Implements automatic cache invalidation through a reap loop

### Cache Features

- **Automatic Cleanup**: Stale entries are automatically removed based on a configurable interval
- **Type Safety**: Fully typed with TypeScript generics
- **Memory Efficient**: Uses Map data structure for O(1) lookups
- **Configurable TTL**: Cache duration can be adjusted through the constructor

### API Integration

The PokeAPI class uses the cache for three main endpoints:
- Location listings (`/location-area`)
- Individual location details
- Pokemon information

Each API response is automatically cached to prevent redundant network requests.

## Project Structure

- `state.ts`: Contains the application state and initialization
- `command_*.ts`: Individual command implementations
- `pokeapi/`: PokeAPI integration
- `types.ts`: TypeScript type definitions
- `pokecache.ts`: Cache implementation for API responses

## Technical Details

- Built with TypeScript
- Uses Node.js readline for CLI interface
- Integrates with PokeAPI for Pokemon data
- Implements command pattern for extensibility
- Includes error handling and input validation
- Features an efficient caching system with automatic cleanup

## Dependencies

- Node.js
- TypeScript
- node:readline
- PokeAPI (via HTTP)

## Development

1. Install development dependencies:
```bash
npm install --save-dev typescript @types/node
```

2. Run in development mode:
```bash
npm run dev
```

3. Build the project:
```bash
npm run build
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
