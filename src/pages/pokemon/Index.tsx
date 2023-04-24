import { Pokemon as PokemonApi } from '@/api';
import Card from '@/components/ui/Card';
import { useLoader } from '@/hooks';
import { Pokemon } from '@/types';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function PokemonPage() {
  const params = useParams();

  const [loader, data, isLoading] = useLoader<Pokemon>({} as Pokemon);

  useEffect(() => {
    loader(() => PokemonApi.getPokemon(Number(params.id)));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  const getXAttack = () =>
    data.stats?.find((stat) => stat.stat.name === 'special-attack')?.base_stat;
  const getXDefense = () =>
    data.stats?.find((stat) => stat.stat.name === 'special-defense')?.base_stat;
  const getSpeed = () =>
    data.stats?.find((stat) => stat.stat.name === 'speed')?.base_stat;

  const getUrl = (id: number) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <>
      <div className="p-4 max-w-3xl mx-auto grid grid-cols-1 gap-4">
        <h1 className="text-4xl text-center">Pokemon</h1>
        <p className="text-center">This is the Pokemon page</p>
        {!isLoading && (
          <>
            <Card
              item={{
                id: data.id,
                url: getUrl(data.id),
                name: data.name,
                content: data,
              }}
              noLink={true}
            >
              <div className="px-2 pb-2">
                <p>Ataque especial: {getXAttack()}</p>
                <p>Defesa especial: {getXDefense()}</p>
                <p>Velocidade: {getSpeed()}</p>
              </div>
            </Card>
          </>
        )}
      </div>
    </>
  );
}
