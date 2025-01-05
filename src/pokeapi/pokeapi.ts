import { Cache } from "./pokecache.js";
import { type ShallowLocations, type LocationDetails } from "./types.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  #cache = new Cache(9999);

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL ?? `${PokeAPI.baseURL}/location-area?offset=0&limit=20`;
    const cached = this.#cache.get<ShallowLocations>(url);

    if (cached !== undefined) {
      return cached;
    }

    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
    });

    if (!response.ok) {
      throw new Error(`Non-200 status code ${response.status}`);
    }

    const data: ShallowLocations = await response.json();

    this.#cache.add<ShallowLocations>(url, data);

    return data;
  }

  async fetchLocation(name: string): Promise<LocationDetails> {
    const url = `${PokeAPI.baseURL}/location-area/${name}`;
    const cached = this.#cache.get<LocationDetails>(url);

    if (cached !== undefined) {
      return cached;
    }

    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
    });

    if (!response.ok) {
      throw new Error(`Non-200 status code ${response.status}`);
    }

    const data: LocationDetails = await response.json();

    this.#cache.add<LocationDetails>(url, data);

    return data;
  }
}
