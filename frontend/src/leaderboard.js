import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';

  import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
  } from '@chakra-ui/react'
  
  const IMAGE =
    "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ";
  
  export default function ProductSimple() {
    return (
      <Center py={12}>
<OrderedList>
  <ListItem>John Adams - $6,000,000</ListItem>
  <ListItem>Alex Jones - $5,000,000</ListItem>
  <ListItem>Ashley Walker - $4,000,000</ListItem>
  <ListItem>Devin Dove - $3,000,000</ListItem>
  <ListItem>Gavin Read - $2,000,000</ListItem>
  <ListItem>Johnny Walt - $1,000,000</ListItem>
</OrderedList>
      </Center>
    );
  }