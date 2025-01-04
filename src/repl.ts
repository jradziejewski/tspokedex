import { State } from "./state.js";

export function startREPL(state: State) {
  const { rl, commands } = state;

  rl.prompt();

  rl.on("line", async (input) => {
    const words = cleanInput(input);
    if (words.length === 0) {
      rl.prompt();
      return;
    } else {
      try {
        const cmdName = words[0];
        const cmd = commands[cmdName];
        cmd.callback(state);
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
