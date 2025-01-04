import { State } from "./state.js";

export async function startREPL(state: State) {
  const { rl, commands } = state;

  rl.prompt();

  rl.on("line", async (input) => {
    const words = cleanInput(input);
    if (words.length === 0) {
      rl.prompt();
      return;
    }

    const cmdName = words[0];
    const cmd = commands[cmdName];
    if (!cmd) {
      console.log(
        `Unknown command: "${cmdName}". Type "help" for a list of commands.`,
      );
      rl.prompt();
      return;
    }

    try {
      await cmd.callback(state);
    } catch (e) {
      console.log((e as Error).message);
      rl.prompt();
    }
  });
}

export function cleanInput(input: string): string[] {
  return input === "" ? [] : input.toLowerCase().trim().split(/\s+/);
}
