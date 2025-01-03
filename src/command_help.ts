import { getCommands } from "./commands.js";

export function commandHelp() {
  const commands = getCommands();
  console.log("Welcome to the Pokedex!");
  console.log("Usage:\n");

  for (const key in commands) {
    console.log(`${commands[key].name}: ${commands[key].description}`);
  }
}
