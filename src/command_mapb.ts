import { State } from "./state";

export async function commandMapb(state: State) {
  if (!state.prevLocationsURL) {
    throw new Error("Already at the beginning");
  }

  const shallowLocations = await state.pokeapi.fetchLocations(
    state.prevLocationsURL as string,
  );

  state.nextLocationsURL = shallowLocations.next;
  state.prevLocationsURL = shallowLocations.previous;

  for (const location of shallowLocations.results) {
    console.log(location.name);
  }
}
