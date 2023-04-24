import { PokemonItem } from '../../src/types';

export const pokemon: PokemonItem = {
  name: 'bulbasaur',
  url: 'https://pokeapi.co/api/v2/pokemon/1/',
  id: 1,
  content: {
    id: 1,
    name: 'bulbasaur',
    base_experience: 64,
    height: 7,
    is_default: true,
    order: 1,
    weight: 69,
    abilities: [
      {
        ability: {
          name: 'overgrow',
          url: 'https://pokeapi.co/api/v2/ability/65/'
        },
        is_hidden: false,
        slot: 1
      },
      {
        ability: {
          name: 'chlorophyll',
          url: 'https://pokeapi.co/api/v2/ability/34/'
        },
        is_hidden: true,
        slot: 3
      },
    ],
    forms: [
      {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon-form/1/'
      },
    ],
    game_indices: [
      {
        game_index: 1,
      },
    ],
    held_items: [
      {
        item: {
          name: 'master-ball',
          url: 'https://pokeapi.co/api/v2/item/1/'
        },
        version_details: [
          {
            rarity: 5,
            version: {
              name: 'red',
              url: 'https://pokeapi.co/api/v2/version/1/'
            },
          },
        ],
      },
    ],
    location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/1/encounters',
    moves: [
      {
        move: {
          name: 'razor-wind',
          url: 'https://pokeapi.co/api/v2/move/13/'
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: 'machine',
              url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
            },
            version_group: {
              name: 'red-blue',
              url: 'https://pokeapi.co/api/v2/version-group/1/'
            },
          },
        ],
      },
    ],
    species: {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon-species/1/'
    },
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
    },
    stats: [
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/'
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/'
        },
      },
    ],
    past_types: [],
  }
};
