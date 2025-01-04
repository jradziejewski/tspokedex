import { State } from "./state";

export async function commandMap(state: State) {
  try {
    const shallowLocations = await state.pokeapi.fetchLocations(
      state.nextLocationsURL as string,
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
