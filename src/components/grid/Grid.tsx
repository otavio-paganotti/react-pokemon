import Paginator from './Paginator';
import List from './List';
import { useLoader } from '@/hooks';
import { useEffect, useState } from 'react';
import { PokemonItem, Response } from '@/types';

const GenericGrid = <T extends PokemonItem>({
  module,
}: {
  module: (page?: number) => Promise<Response<T>>;
}) => {
  const [initial] = useState<Response<T>>({
    count: 0,
    next: null,
    previous: null,
    results: [],
    pagination: {
      firstPage: 1,
      lastPage: 1,
      nextPage: 1,
      prevPage: 1,
      nextPages: [1],
      prevPages: [1],
      page: 1,
    },
  });

  const [loader, data, isLoading] = useLoader<Response<T>>(initial);

  useEffect(() => {
    loader(module);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const page = (page: number) => {
    if (isLoading) return;

    loader(() => module(page));
  };

  const handleSearch = () => {
    loader(() =>
      Promise.resolve({
        count: 0,
        next: null,
        previous: null,
        results: [],
        pagination: {
          firstPage: 0,
          lastPage: 0,
          nextPage: 0,
          prevPage: 0,
          nextPages: [0],
          prevPages: [0],
          page: 0,
        },
      })
    );
  };

  const handleClearSearch = () => {
    loader(module);
  };

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      <div className="p-4 h-screen-minus-56 grid grid-cols-1 content-between gap-4">
        {!isLoading && (
          <>
            <div className="flex gap-4 justify-between">
              <input
                type="search"
                className="w-full px-4 py-2"
                placeholder="Busque o Pokémon..."
              />
              <button
                className="px-4 py-2 text-white"
                onClick={handleSearch}
                style={{ backgroundColor: 'blue' }}
              >
                Buscar
              </button>
              <button
                className="px-4 py-2"
                onClick={handleClearSearch}
                style={{ backgroundColor: 'gray', color: 'black' }}
              >
                Limpar
              </button>
            </div>
            <List items={data?.results} />
          </>
        )}
        <Paginator pagination={data?.pagination} page={page} />
      </div>
    </div>
  );
};

export default GenericGrid;
