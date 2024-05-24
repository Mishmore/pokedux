import { useEffect } from "react";

import { Center, Container, Flex, Image, Spinner, Tag } from "@chakra-ui/react";
import { Searchbar } from "./components/Searchbar";
import { PokemonCard } from "./components/PokemonCard";
import { PokemonList } from "./components/PokemonList";
import logo from "./assets/logo.svg";

import { useDispatch, useSelector } from "react-redux";
import { AppThunkDispatch, RootState } from "./main";
import { fetchPokemonWithDetails } from "./slices/pokemons";

function App() {
  const pokemons = useSelector((state: RootState) => state.pokemons.pokemons);
  const dispatch: AppThunkDispatch = useDispatch<AppThunkDispatch>();

  useEffect(() => {
    dispatch(fetchPokemonWithDetails());
  }, [dispatch]);

  return (
    <Container maxW="1024px" p={6}>
      <Spinner size="xl" />

      <Flex direction="column" gap={6}>
        <Center>
          <Image src={logo} w={60} />
        </Center>

        <Searchbar />
        <PokemonList>
          <>
            {pokemons.map((elm) => (
              <PokemonCard
                key={elm.name}
                name={elm.name}
                image={elm.sprites.front_default}
              >
                <Flex gap={4}>
                  {elm.abilitiesList &&
                    elm.abilitiesList.map((elm, i) => (
                      <Tag key={elm + i}>{elm}</Tag>
                    ))}
                </Flex>
              </PokemonCard>
            ))}
          </>
        </PokemonList>
      </Flex>
    </Container>
  );
}

export default App;
