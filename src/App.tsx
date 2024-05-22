import { useEffect } from "react";

import { Center, Container, Flex, Image } from "@chakra-ui/react";
import { Searchbar } from "./components/Searchbar";
import { PokemonCard } from "./components/PokemonCard";
import { PokemonList } from "./components/PokemonList";
import logo from "./assets/logo.svg";
import { getPokemonList } from "./api";
import { PokemonState } from "./reducers/pokemon";
import { setPokemons } from "./actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const pokemons = useSelector((state: PokemonState) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemonList();
      dispatch(setPokemons(data.results));
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
              <PokemonCard key={elm.name} name={elm.name} url={elm.url} />
            ))}
          </>
        </PokemonList>
      </Flex>
    </Container>
  );
}

export default App;
