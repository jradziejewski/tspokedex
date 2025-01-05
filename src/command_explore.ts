import { State } from "./state";

export async function commandExplore(state: State, name: string) {
  if (!name) {
    throw new Error("you must provide a location name");
  }
  const location = await state.pokeapi.fetchLocation(name);
  console.log(`Exploring ${location.name}...`);
  for (const encounter of location.pokemon_encounters) {
    console.log(`- ${encounter.pokemon.name}`);
  }
}
