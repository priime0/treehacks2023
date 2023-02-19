import { useParams } from "react-router-dom";
import {
  ChakraProvider,
  Text,
  Center,
  Heading,
  Box,
  Link,
  Stack,
  Badge,
  Flex,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useToast,
} from "@chakra-ui/react";
import Navbar from "./navbar";
import Footer from "./footer";
import { getNonprofit } from "./api";
import { useEffect, useState } from "react";

export default function Donate() {
  const npUuid = useParams().uuid;

  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [donationAmount, setDonationAmount] = useState(0);
  const toast = useToast();

  function handleDonation() {
    if (donationAmount <= 0) {
      toast({
        title: "Donation Failed",
        description: "Please donate at least $1",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    toast({
      title: "Donation Received!",
      description: `${name} has received your donation of $${donationAmount}`,
      status: "success",
      duration: 10000,
      isClosable: true,
    });
    setDonationAmount(0);
  }

  useEffect(() => {
    getNonprofit(npUuid).then((nonprofit) => {
      if (nonprofit === null) {
        return;
      }
      setName(nonprofit.name);
      setWebsite(nonprofit.website);
      setImage(nonprofit.image);
      setDescription(nonprofit.description);
      setTags(nonprofit.tags);
    });
  });

  if (tags?.length !== 0) {
    return (
      <ChakraProvider>
        <Navbar />
        <Box backgroundColor={"#F7F7FA"}>
          <Center>
            <Stack maxW={"3xl"} width={"100%"} py={"2em"} flexDir={"column"}>
              <Heading>{name}</Heading>
              <Link href={website} fontWeight={"bold"}>
                {website}
              </Link>
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
                    <Badge px={2} py={1} bg={"blue.100"} borderRadius={"md"}>
                      {t}
                    </Badge>
                  );
                })}
              </Stack>
              <Text>{description}</Text>
              <Flex
                dir={"row"}
                alignItems={"center"}
                justify={"space-between"}
                pt={8}
                pb={4}
              >
                <Text fontSize={"lg"}>Donation Amount:</Text>
                <Flex
                  dir={"row"}
                  gap={3}
                  alignItems={"center"}
                  justify={"center"}
                >
                  <Text fontSize={"xl"} as={"b"}>
                    $
                  </Text>
                  <NumberInput
                    min={0}
                    precision={0}
                    step={10}
                    value={donationAmount}
                    onChange={(v) => {
                      try {
                        setDonationAmount(Number(v));
                      } catch (e) {}
                    }}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Flex>
              </Flex>
              <Button colorScheme={"blue"} onClick={handleDonation}>
                Donate
              </Button>
            </Stack>
          </Center>
        </Box>
        <Footer />
      </ChakraProvider>
    );
  } else {
    return (
      <ChakraProvider>
        <Navbar />
        <Footer />
      </ChakraProvider>
    );
  }
}
