import { useEffect } from "react";

import { Center, Container, Flex, Image } from "@chakra-ui/react";
import { Searchbar } from "./components/Searchbar";
import { PokemonCard } from "./components/PokemonCard";
import { PokemonList } from "./components/PokemonList";
import logo from "./assets/logo.svg";
import { getPokemonList } from "./api";
import { PokemonState } from "./reducers/pokemon";
import { setPokemons as setPokemonsAction } from "./actions";
import { connect } from "react-redux";

interface Pokemon {
  name: string;
  url: string;
}

function App({
  pokemons,
  setPokemons,
}: {
  pokemons: Pokemon[];
  setPokemons: (value: Pokemon[]) => void;
}) {
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemonList();
      setTimeout(() => {
        setPokemons(data.results);
      }, 3000);
    };

    fetchData();
  }, []);

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

const mapStateToProps = (state: PokemonState) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value: Pokemon[]) => dispatch(setPokemonsAction(value)),
});

const AppWithState = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppWithState;
