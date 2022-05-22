import { Card, Grid, Link } from "@nextui-org/react";
import { FC } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

interface Props {
  pokemonID: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ pokemonID }) => {
  const router = useRouter();

  const onFavoriteClicked = () => {
    router.push(`/pokemon/${pokemonID}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemonID}>
      <Card
        hoverable
        clickable
        css={{ padding: 10 }}
        onClick={onFavoriteClicked}
      >
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonID}.svg`}
          width={"100%"}
          height={140}
        />
      </Card>
    </Grid>
  );
};
