import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getUser, getEmail, logout } from "./api";
import { useNavigate } from "react-router-dom";

export default function SocialProfileSimple() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const storedEmail = getEmail();
  const navigate = useNavigate();

  if (
    storedEmail === "" ||
    storedEmail === "undefined" ||
    storedEmail === undefined
  ) {
    navigate("/login");
  }

  useEffect(() => {
    getUser().then((info) => {
      const name = `${info.first_name} ${info.last_name}`;
      setFullName(name);
      setEmail(info.email);
    });
  }, []);

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <Center py={6}>
      <Box
        maxW={"540px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"xl"}
        p={6}
        textAlign={"center"}
      >
        <Avatar
          size={"x2"}
          src={
            "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
          }
          alt={"Avatar Alt"}
          mb={4}
          pos={"relative"}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: "green.300",
            border: "2px solid white",
            rounded: "full",
            pos: "absolute",
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {fullName}
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          {email}
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #art
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #photography
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #music
          </Badge>
        </Stack>

        <Stack mt={16} direction={"row"} spacing={4}>
          <Button flex={1} fontSize={"sm"} rounded={"full"} colorScheme={"red"} onClick={handleLogout}>
            Log out
          </Button>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            onClick={() => navigate("/editProfile")}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
            Edit Profile
        
            </Button>
          </Stack>
        </Box>
      </Center>
    );
  }