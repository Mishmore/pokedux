import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Text,
} from "@chakra-ui/react";

interface IPokemonCard {
  name: string;
  url: string;
}

export const PokemonCard = ({ name, url }: IPokemonCard) => {
  return (
    <Card>
      <CardHeader>{name}</CardHeader>
      <CardBody>
        <Image src="" />
        <Text>description</Text>
      </CardBody>
    </Card>
  );
};
