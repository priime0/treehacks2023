import { Box, Text, Flex } from "@chakra-ui/react";

export default function Donation(props) {
  const { name, amount, index } = props;

  return (
    <Box w={"100%"} backgroundColor={"#F7F7FA"} padding={3} rounded={"lg"} boxShadow={"sm"}>
      <Flex flexDir={"row"} justify={"space-between"}>
        <Text>{index}. <Text as='b'>{name}</Text></Text>
        <Text>${amount}</Text>
      </Flex>
    </Box>
  );
}
