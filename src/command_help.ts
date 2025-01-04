import { State } from "./state";

export function commandHelp(state: State) {
  const commands = state.commands;
  console.log("Welcome to the Pokedex!");
  console.log("Usage:\n");

  for (const key in commands) {
    console.log(`${commands[key].name}: ${commands[key].description}`);
  }
}
