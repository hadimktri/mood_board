import {
  Container,
  Card,
  Image,
  Group,
  Button,
  createStyles,
} from "@mantine/core";
import { IImage } from "./App";

const useStyles = createStyles((theme) => ({
  cards: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "center",
  },
  card: {
    width: "19%",

    backgroundColor: theme.colors.gray[3],
  },
  lower: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
}));

interface Props {
  images: IImage[];
  HandleShifts: (ixd: number, L: string | void) => void;
}

const Cards = ({ images, HandleShifts }: Props) => {
  const { classes } = useStyles();
  return (
    <Container className={classes.cards} size="xl">
      {images.map((image: IImage) => (
        <Card
          withBorder
          radius="md"
          p="md"
          className={classes.card}
          key={image.id}
        >
          <Card.Section>
            <Image src={image.url} height={180} />
          </Card.Section>
          <Group mt="xs" className={classes.lower}>
            <Button
              onClick={() => HandleShifts(images.indexOf(image), "L")}
              disabled={images.indexOf(image) == 0}
              radius="md"
              size="xs"
              variant="gradient"
              gradient={{ from: "grey", to: "cyan",deg: 150 }}
            >
              Left
            </Button>
            <Button
              onClick={() => HandleShifts(images.indexOf(image))}
              disabled={images.indexOf(image) == images.length - 1}
              radius="md"
              variant="gradient"
              gradient={{ from: "teal", to: "lime", deg: 105 }}
              size="xs"
            >
              Right
            </Button>
          </Group>
        </Card>
      ))}
    </Container>
  );
};
export default Cards;
