import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  Stack,
  Badge,
  Link,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Nonprofit(props) {
  const { name, website, image, description, tags } = props.info;
  const colorValue = useColorModeValue("gray.50", "gray.800");
  return (
    <Card width={"100%"} padding={"2em"}>
      <CardHeader>
        <Heading size="md">{name}</Heading>
      </CardHeader>
      <CardBody>
        <Stack direction={"column"} gap={"2"}>
          <Stack
            align={"center"}
            maxW={"100%"}
            justify={"left"}
            direction={"row"}
            mb={6}
            overflowX={"scroll"}
          >
            {tags.map((t) => {
              return (
                <Badge px={2} py={1} bg={colorValue}>
                  {t}
                </Badge>
              );
            })}
          </Stack>
          <Link href={website} fontWeight={"bold"}>
            {website}
          </Link>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
}
