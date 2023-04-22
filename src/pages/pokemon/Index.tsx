import { useParams } from "react-router-dom";

export default function PokemonPage () {
  const params = useParams();

  return (
    <>
      <div>First :id content.  ID = {params.id}</div>
    </>
  )
}