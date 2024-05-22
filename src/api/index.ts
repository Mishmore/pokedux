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
interface PokemonDetailsResponse {
  abilities: Array<{
    ability: { name: string; url: string; is_hidden: boolean };
  }>;
  sprites: {
    front_default: string;
  };
}

export const getPokemonList = async (): Promise<PokemonListResponse> => {
  try {
    const response: AxiosResponse<PokemonListResponse> = await instance.get(
      "pokemon"
    );
    return response.data;
  } catch (e) {
    console.error("Error in GET pokemon:", e);
    throw new Error("Error in GET pokemon");
  }
};

export const getPokemonDetails = async (
  url: string
): Promise<PokemonDetailsResponse> => {
  try {
    const response: AxiosResponse<PokemonDetailsResponse> = await instance.get(
      url
    );
    return response.data;
  } catch (e) {
    console.error("Error in GET pokemon details:", e);
    throw new Error("Error in GET pokemon details");
  }
};
