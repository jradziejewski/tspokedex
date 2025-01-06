import { Cache } from "./pokecache.js";
import {
  type ShallowLocations,
  type ShallowLocation,
  type Pokemon,
} from "./types.js";

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

  async fetchLocation(name: string): Promise<ShallowLocation> {
    const url = `${PokeAPI.baseURL}/location-area/${name}`;
    const cached = this.#cache.get<ShallowLocation>(url);

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

    const data: ShallowLocation = await response.json();

    this.#cache.add<ShallowLocation>(url, data);

    return data;
  }

  async fetchPokemon(name: string): Promise<Pokemon> {
    const url = `${PokeAPI.baseURL}/pokemon/${name}`;
    const cached = this.#cache.get<Pokemon>(url);

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

    const data: Pokemon = await response.json();

    this.#cache.add<Pokemon>(url, data);

    return data;
  }
}
