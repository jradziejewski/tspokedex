import { createInterface, type Interface } from "node:readline";
import process from "node:process";
import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
import { PokeAPI } from "./pokeapi/pokeapi.js";
import { commandMap } from "./command_map.js";
import { commandMapb } from "./command_mapb.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => Promise<void>;
};

export type State = {
  rl: Interface;
  commands: Record<string, CLICommand>;
  pokeapi: PokeAPI;
  nextLocationsURL: string | null;
  prevLocationsURL: string | null;
};

export function initState(): State {
  return {
    rl: createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: "Pokedex > ",
    }),
    commands: getCommands(),
    pokeapi: new PokeAPI(),
    nextLocationsURL: null,
    prevLocationsURL: null,
  };
}

function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    map: {
      name: "map",
      description: "Displays names of next 20 locations",
      callback: commandMap,
    },
    mapb: {
      name: "mapb",
      description: "Displays names of previous 20 locations",
      callback: commandMapb,
    },
  };
}
