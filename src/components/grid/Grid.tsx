import Paginator from './Paginator';
import List from './List';
import { useLoader } from '@/hooks';
import { useEffect, useState } from 'react';
import { PokemonItem, Response } from '@/types';

const GenericGrid = <T extends PokemonItem>({ module }: {
  module: (page?: number) => Promise<Response<T>>
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
      page: 1
    }
  });

  const [
    loader,
    data,
    isLoading,
   ] = useLoader<Response<T>>(initial);

  useEffect(() => {
    loader(module);
  }, []);

  const page = (page: number) => {
    if (isLoading) return;

    loader(() => module(page));
  };

  return (
    <>
      <div>
        {isLoading && <div>Loading...</div>}
        <div className="p-4 h-screen-minus-56 grid grid-cols-1 content-between gap-4">
          {!isLoading && (<><List items={data?.results} /></>)}
          <Paginator pagination={data?.pagination} page={page} />
        </div>
      </div>
    </>
  )
};

export default GenericGrid;
