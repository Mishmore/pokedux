import { useEffect } from "react";

import { Center, Container, Flex, Image, Tag } from "@chakra-ui/react";
import { Searchbar } from "./components/Searchbar";
import { PokemonCard } from "./components/PokemonCard";
import { PokemonList } from "./components/PokemonList";
import logo from "./assets/logo.svg";
import { getPokemonList } from "./api";
import { PokemonState } from "./reducers/pokemon";
import { getPokemonWithDetails } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import { AppThunkDispatch } from "./main";

function App() {
  const pokemons = useSelector((state: PokemonState) => state.pokemons);
  const dispatch: AppThunkDispatch = useDispatch<AppThunkDispatch>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemonList();
      dispatch(getPokemonWithDetails(data.results.map((elm) => elm.url)));
    };

    fetchData();
  }, [dispatch]);

  return (
    <Container maxW="1024px" p={6}>
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
