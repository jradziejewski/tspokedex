import { State } from "./state";

export async function commandMapb(state: State) {
  try {
    if (!state.prevLocationsURL) {
      console.log("Already at the beginning");
      return;
    }
    const shallowLocations = await state.pokeapi.fetchLocations(
      state.prevLocationsURL as string,
    );

    state.nextLocationsURL = shallowLocations.next;
    state.prevLocationsURL = shallowLocations.previous;

    for (const location of shallowLocations.results) {
      console.log(location.name);
    }
  } catch (err) {
    console.log(`An error occurred while listing locations: ${err}`);
  }
}
