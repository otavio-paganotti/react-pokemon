import Card from '@/components/ui/Card';
import { PokemonItem } from '@/types';

const GenericList = <T extends PokemonItem>({ items }: { items: T[] }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {!items.length && (
          <div className="flex justify-center w-full">
            Nenhum item existente.
          </div>
        )}
        {items && items.map((item, index) => <Card key={index} item={item} />)}
      </div>
    </>
  );
};

export default GenericList;
