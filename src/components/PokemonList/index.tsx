import { Grid } from "@chakra-ui/react";

interface IPokemonList {
  children: JSX.Element;
}

export const PokemonList = ({ children }: IPokemonList) => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
      {children}
    </Grid>
  );
};
