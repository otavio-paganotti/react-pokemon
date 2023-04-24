import { http } from '@/api';
import { Pokemon, PokemonItem, Response } from '@/types';

const extractId = (url: string): number => {
  const id = url.split('/').filter(Boolean).pop();
  return id ? parseInt(id, 10) : 0;
};

const getNextPages = (page: number, count: number): number[] => {
  // get next 4 pages if page is 1
  // get next 2 pages if page is gte 2

  const pages = [];
  const lastPage = Math.ceil(count / 10);

  if (page === lastPage) {
    return [];
  }

  if (page === lastPage - 1) {
    pages.push(lastPage);
    return pages;
  }

  if (page === 1) {
    for (let i = 1; i <= 4; i++) {
      if (i === lastPage) {
        break;
      }
      pages.push(i + 1);
    }
    return pages;
  }

  if (page >= 2) {
    for (let i = 1; i <= 2; i++) {
      if (i === lastPage) {
        break;
      }
      pages.push(page + i);
    }
    return pages;
  }

  return [];
};

const getPrevPages = (page: number, count: number): number[] => {
  // get prev 4 pages if page is lastPage
  // get prev 2 pages if page is lte lastPage - 1

  const pages = [];

  if (page === Math.ceil(count / 10)) {
    pages.push(page - 4);
    pages.push(page - 3);
    pages.push(page - 2);
    pages.push(page - 1);
    return pages;
  }

  if (page === 1) {
    return [];
  }

  if (page === 2) {
    pages.push(1);
    return pages;
  }

  if (page >= 3) {
    pages.push(page - 2);
    pages.push(page - 1);
    return pages;
  }

  return [];
};

export const getPokemon = async (id: number): Promise<Pokemon> => {
  const { data } = await http.get<Pokemon>(`/pokemon/${id}`);
  return data;
};

export const getPokemons = async (page = 1): Promise<Response<PokemonItem>> => {
  const { data } = await http.get<Response<PokemonItem>>('/pokemon', {
    params: {
      limit: 10,
      offset: 0 + (page - 1) * 10,
    },
  });

  const results = await Promise.all(
    data.results.map(async (item: PokemonItem) => ({
      ...item,
      id: extractId(item.url),
      content: await getPokemon(extractId(item.url)),
    }))
  );

  return {
    ...data,
    results,
    pagination: {
      firstPage: 1,
      lastPage: Math.ceil(data.count / 10),
      nextPage: page === data.count ? page + 1 : page,
      prevPage: page !== 1 ? page - 1 : page,
      nextPages: getNextPages(page, data.count),
      prevPages: getPrevPages(page, data.count),
      page,
    },
  };
};
