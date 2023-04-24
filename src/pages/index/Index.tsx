import Grid from '@/components/grid/Grid';
import Container from '@/components/base/Container';

import { Pokemon } from '@/api';

export default function IndexPage() {
  return (
    <>
      <Container>
        <Grid module={Pokemon.getPokemons} />
      </Container>
    </>
  );
}
