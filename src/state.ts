import { createInterface, type Interface } from "node:readline";
import process from "node:process";
import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => void;
};

export type State = {
  rl: Interface;
  commands: Record<string, CLICommand>;
};

export function initState(): State {
  return {
    rl: createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: "Pokedex > ",
    }),
    commands: getCommands(),
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
  };
}
