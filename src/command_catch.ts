import { State } from "./state";

export async function commandCatch(state: State, name: string) {
  if (!name) {
    throw new Error("you must provide a pokemon name");
  }
  const pokemon = await state.pokeapi.fetchPokemon(name);
  console.log(`Throwing a Pokeball at ${pokemon.name}...`);
  const chance = Math.floor(Math.random() * pokemon.base_experience);

  if (chance > 40) {
    state.pokedex[pokemon.name] = pokemon;
    console.log(`${pokemon.name} was caught!`);
  } else {
    console.log(`${pokemon.name} escaped!`);
  }
}
