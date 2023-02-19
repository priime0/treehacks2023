import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
} from "@chakra-ui/react";

import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getUsers } from "./api";
import Donation from "./Donation";

const IMAGE =
  "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ";

export default function ProductSimple() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    getUsers().then((allUsers) => {
      const namesDonations = Object.values(allUsers).map((user) => {
        const total = user.donations.reduce((t, x) => t + x[1], 0);
        const name = `${user.first_name} ${user.last_name}`;
        return [name, total];
      });
      namesDonations.sort((a, b) => b[1] - a[1]);
      setDonations(namesDonations);
    });
  }, []);

  return (
    <Center py={12}>
      <Flex flexDir={"column"}>
        <Heading pb={8}>Leaderboard</Heading>
        <Stack maxW={"3xl"} minW={"xl"}>
          {donations
            .filter((donation) => donation[1] !== 0)
            .map((donation, i) => {
              return (
                <Donation
                  index={i + 1}
                  name={donation[0]}
                  amount={donation[1]}
                />
              );
            })}
        </Stack>
      </Flex>
    </Center>
  );
}
