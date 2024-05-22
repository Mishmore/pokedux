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
  image: string;
  children: JSX.Element;
}

export const PokemonCard = ({ name, image, children }: IPokemonCard) => {
  return (
    <Card>
      <CardHeader>
        <Text>{name}</Text>
      </CardHeader>
      <CardBody>
        <Image src={image} alt={name} />
      </CardBody>
      <CardFooter>{children}</CardFooter>
    </Card>
  );
};
