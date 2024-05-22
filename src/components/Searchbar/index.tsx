import { SearchIcon } from "@chakra-ui/icons";
import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";

export const Searchbar = () => {
  return (
    <InputGroup>
      <Input placeholder="Enter amount" />
      <InputRightElement>
        <SearchIcon color="green.500" />
      </InputRightElement>
    </InputGroup>
  );
};
