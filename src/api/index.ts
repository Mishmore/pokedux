import axios, { AxiosInstance, AxiosResponse } from "axios";

const POKEMON_API_URL = "https://pokeapi.co/api/v2/";

const instance: AxiosInstance = axios.create({
  baseURL: POKEMON_API_URL,
});

interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<{ name: string; url: string }>;
}

export const getPokemonList = async (): Promise<PokemonListResponse> => {
  try {
    const response: AxiosResponse<PokemonListResponse> = await instance.get(
      "pokemon?offset=20&limit=20"
    );
    return response.data;
  } catch (error) {
    console.error("Error in GET pokemon:", error);
    throw new Error("Error in GET pokemon");
  }
};
