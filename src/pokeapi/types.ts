export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<Location>;
};

export type Location = {
  name: string;
  url: string;
};

export type LocationDetails = {
  id: number;
  name: string;
  game_index: number;
  encounter_method_rates: Array<any>;
  location: Location;
  names: Array<any>;
  pokemon_encounters: Array<PokemonEncounter>;
};

export type PokemonEncounter = {
  pokemon: Pokemon;
  version_details: Array<any>;
};

export type Pokemon = {
  name: string;
  url: string;
};
