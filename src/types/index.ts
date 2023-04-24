export type Nullable<T = unknown> = T | null;

export interface PokemonItem {
  name: string;
  url: string;
  id: number;
  content: Pokemon;
}

export interface Response<T> {
  count: number;
  next: Nullable<string>;
  previous: Nullable<string>;
  results: T[];
  pagination: {
    firstPage: number;
    lastPage: number;
    nextPage: number;
    prevPage: number;
    nextPages: number[];
    prevPages: number[];
    page: number;
  };
}

export interface Sprites {
  back_default: string;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Species;
}

export interface Type {
  slot: number;
  type: Species;
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: Species;
  version_group: Species;
}

export interface Move {
  move: Species;
  version_group_details: VersionGroupDetail[];
}

export interface VersionDetail {
  rarity: number;
  version: Species;
}

export interface Species {
  name: string;
  url: string;
}

export interface HeldItem {
  item: Species;
  version_details: VersionDetail[];
}

export interface GameIndex {
  game_index: number;
}

export interface Ability {
  ability: Species;
  is_hidden: boolean;
  slot: number;
}

export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: Species[];
  game_indices: GameIndex[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: unknown[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

export interface IPagination {
  firstPage: number;
  lastPage: number;
  nextPages: number[];
  prevPages: number[];
  nextPage: number;
  prevPage: number;
  page: number;
}
