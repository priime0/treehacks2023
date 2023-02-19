import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function CallToActionWithIllustration() {
  const navigate = useNavigate(); 
  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Empower change.{' '}< br />
          <Text as={'span'} color={'blue.400'}>
           Donate to non-profits today.
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
        Your donation to nonprofits can support crucial programs that address important social and environmental issues, and make a lasting impact in people's lives. By contributing even a small amount, you have the power to make a real difference in the world.
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'blue'}
            bg={'blue.400'}
            _hover={{ bg: 'blue.500' }} 
            onClick={() => navigate('/view')}>
            Donate today
          </Button>
          <Button rounded={'full'} px={6} onClick={() => navigate('/about')}>
            Learn more
          </Button>
        </Stack>
        <img style={{ width: 510.53, height: 410.74 }} src={require('./donateArt.png')} />
      </Stack>
    </Container>
  );
};