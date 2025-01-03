import process from "node:process";
import * as readline from "node:readline";
import { getCommands } from "./commands.js";

export function startREPL() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });

  rl.prompt();

  rl.on("line", async (input) => {
    const words = cleanInput(input);
    if (words.length === 0) {
      rl.prompt();
      return;
    } else {
      try {
        const cmdName = words[0];
        const commands = getCommands();
        const cmd = commands[cmdName];
        cmd.callback(commands);
        rl.prompt();
      } catch {
        console.log("Unknown command");
        rl.prompt();
      }
    }
  });
}

export function cleanInput(input: string): string[] {
  return input === "" ? [] : input.toLowerCase().trim().split(/\s+/);
}
