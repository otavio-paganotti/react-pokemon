import { http } from "@/api";
import { Pokemon, PokemonItem, Response } from "@/types";

export const getPokemon = async (id: number): Promise<Pokemon> => {
  const { data } = await http.get<Pokemon>(`/pokemon/${id}`);
  return data;
};

export const getPokemons = async (): Promise<Response<PokemonItem>> => {
  const { data } = await http.get<Response<PokemonItem>>("/pokemon");
  return data;
}