export function cleanInput(input: string): string[] {
	return input === "" ? [] : input.toLowerCase().trim().split(/\s+/);
}
