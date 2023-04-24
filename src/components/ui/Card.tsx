import { PokemonItem } from "@/types";
import clsx from "clsx";
import { ReactNode } from "react";
import { Link } from 'react-router-dom';

interface IProps<T> {
  children?: ReactNode;
  item: T;
  noLink?: boolean;
}

const Card = <T extends PokemonItem>({ item, children, noLink }: IProps<T>) => {
  const getHP = () => item.content.stats?.find(stat => stat.stat.name === 'hp')?.base_stat;
  const getAttack = () => item.content.stats?.find(stat => stat.stat.name === 'attack')?.base_stat;
  const getDefense = () => item.content.stats?.find(stat => stat.stat.name === 'defense')?.base_stat;

  return (
    <div className="bg-white">
      <div className="flex justify-center">
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`} />
      </div>

      <div className="p-4 flex flex-col gap-4">
        <div className="bg-primary">
          <div className="p-2 flex justify-between">
            <h2 className="font-bold capitalize">{item.name}</h2>
            <span>HP: {getHP()}</span>
          </div>
          <div className={clsx("px-2 pt-2", !noLink ? "pb-2" : "")}>
            <p>Ataque: {getAttack()}</p>
            <p>Defesa: {getDefense()}</p>
          </div>
          {children}
        </div>
        {!noLink && (<div className="flex justify-center">
          <Link to={`/${item.id}`} className="bg-primary text-white px-4">Access Pokemon</Link>
        </div>)}
      </div>
    </div>
  )
}

export default Card
