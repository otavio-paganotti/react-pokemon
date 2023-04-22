import { useParams } from "react-router-dom";

export default function () {
  const params = useParams();

  return (
    <>
      <div>First :id content.  ID = {params.id}</div>
    </>
  )
}