import { State } from "./state";

export async function commandInspect(state: State, name: string) {
  if (!name) {
    throw new Error("you must provide a pokemon name");
  }

  const pokemon = state.pokedex[name];

  if (pokemon) {
    console.log(`Name: ${pokemon.name}
Height: ${pokemon.height}
Weight: ${pokemon.weight}`);
    console.log("Stats: ");
    for (const entry of pokemon.stats) {
      console.log(` - ${entry.stat.name}: ${entry.base_stat}`);
    }
    console.log("Types: ");
    for (const entry of pokemon.types) {
      console.log(` - ${entry.type.name}`);
    }
  } else {
    console.log("You must catch it first");
  }
}
