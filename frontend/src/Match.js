import {
  Box,
  ChakraProvider,
  Center,
  Stack,
  Heading,
  Text,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";
import Navbar from "./navbar";
import Footer from "./footer";
import { useState } from "react";
import { match } from "./api";
import Nonprofit from "./Nonprofit";

export default function Match() {
  const [description, setDescription] = useState("");
  const [matched, setMatched] = useState(false);
  const [npinfo, setNonprofit] = useState(null);
  const toast = useToast();

  async function handleMatch() {
    if (description.length <= 5) {
      toast({
        title: "Description!",
        description: "Please type more about what you're looking for",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    const nonprofit = await match(description);
    if (nonprofit !== null) {
      setMatched(true);
      setNonprofit(nonprofit);
    }
  }

  return (
    <ChakraProvider>
      <Navbar />
      <Box backgroundColor={"#F7F7FA"}>
        <Center flexDir={"column"}>
          <Stack
            maxW={"3xl"}
            width={"100%"}
            py={"2em"}
            flexDir={"column"}
            gap={4}
          >
            <Heading>Match</Heading>
            <Text>
              Enter a description of what you're looking for in a non-profit,
              and our state-of-the-art algorithm will match you with a company
              that best matches your ideals! This presents the perfect
              opportunity to donate to a non-profit whose values align most
              closely to your own.
            </Text>
            <Textarea
              rows={3}
              resize={"vertical"}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></Textarea>
            <Button colorScheme={"blue"} onClick={handleMatch}>Match Me</Button>
          </Stack>
          {
            matched ?
          <Stack
            maxW={"3xl"}
            width={"100%"}
            py={"2em"}
            flexDir={"column"}
            gap={4}
          >
            <Nonprofit info={npinfo} />
          </Stack>
            : <Text />
          }
        </Center>
      </Box>
      <Footer />
    </ChakraProvider>
  );
}
