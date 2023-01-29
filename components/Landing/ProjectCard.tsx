import {
  createStyles,
  Card,
  Image,
  ActionIcon,
  Group,
  Text,
  Avatar,
  Badge,
  Container,
} from '@mantine/core';
import { IconHeart, IconBookmark, IconShare } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    margin: 'auto',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  footer: {
    padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
    marginTop: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  authorLayout: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const exCard1 = {
  image:
    'https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
  category1: 'limited',
  category2: 'newly added',
  title: '',
  footer: '50 FLOW',
  token: {
    symbol: 'FLOW',
    value: '21',
    logo: 'https://gateway.pinata.cloud/ipfs/QmZcX1whdiWQXwj7mkYH7WPMLpiG9XVLhem2VKXACdrmRC',
  },
  author: {
    name: 'Poke Friends',
    description: 'by Little George',
    image:
      'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
  },
};

const exCard2 = {
  image:
    'https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
  category1: 'verified',
  category2: 'newly added',
  title: '',
  footer: '100 FLOW',
  token: {
    symbol: 'FLOW',
    value: '33',
    logo: 'https://gateway.pinata.cloud/ipfs/QmZcX1whdiWQXwj7mkYH7WPMLpiG9XVLhem2VKXACdrmRC',
  },
  author: {
    name: 'Poke Friends',
    description: 'by Little George',
    image:
      'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
  },
};

interface ProjectCardProps {
  image: string;
  category1: string;
  category2: string;
  title: string;
  footer: string;
  token: {
    symbol: string;
    value: string;
    logo: string;
  },
  author: {
    name: string;
    description: string;
    image: string;
  };
}

export function ProjectCard({
  image,
  category1,
  category2,
  token,
  title,
  footer,
  author,
}: ProjectCardProps) {
  const { classes, theme } = useStyles();

  return (
    <Card withBorder p="md" radius="md" className={classes.card}>
      <Card.Section mb="sm">
        <Image src={image} alt={title} height={180} />
      </Card.Section>

      <Card.Section>
        <Group mt="md" className={classes.authorLayout}>
          <div>
            <Avatar src={author.image} radius="sm" />
            <Text weight={500}>{author.name}</Text>
            <Text size="xs" color="dimmed">
              {author.description}
            </Text>
          </div>
        </Group>
      </Card.Section>

      <Card.Section className={classes.footer}>
        <Group position="apart">
          <Text size="xs" color="dimmed">
            {footer}
          </Text>
          <Group spacing={0}>
            <ActionIcon>
              <IconHeart size={18} color={theme.colors.red[6]} stroke={1.5} />
            </ActionIcon>
            <ActionIcon>
              <IconBookmark size={18} color={theme.colors.yellow[6]} stroke={1.5} />
            </ActionIcon>
            <ActionIcon>
              <IconShare size={16} color={theme.colors.blue[6]} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Group>
      </Card.Section>
    </Card>
  );
}

export function FeaturedProjects() {
  return (
    <Container>
      <ProjectCard {...exCard1} />
      <ProjectCard {...exCard2} />
    </Container>
  );
}
