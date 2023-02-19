import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  Stack,
  Badge,
  Link,
  Flex,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Nonprofit(props) {
  const navigate = useNavigate();
  const { name, uuid, website, description, tags } = props.info;
  const colorValue = useColorModeValue("gray.50", "gray.800");

  function handleRedirect() {
    const target = `/donate/${uuid}`;
    navigate(target);
  }

  return (
    <Card width={"100%"} px={"0.8em"} pb={"1em"} pt={"0.5em"}>
      <CardHeader>
        <Flex flexDir={"row"} justify={"space-between"} alignItems={"center"}>
          <Heading size="md">{name}</Heading>
          <Button colorScheme={"blue"} onClick={handleRedirect}>Donate</Button>
        </Flex>
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
