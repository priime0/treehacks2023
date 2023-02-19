import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import Navbar from './navbar'

export default function blogPostWithImage() {
  return (
    <Center py={6}>
      <Box
        maxW={'1000px'}
        w={'full'}
        bg={'white'}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'250px'}
          bg={'white.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <center><Image
            src={
              "/team.jpg"
            }
            width="1300" height="250"
            layout={'fill'}
          /></center>
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            ABOUT US
          </Text>
          <Heading
            color={'gray.700'}
            fontSize={'2xl'}
            fontFamily={'body'}>
            Who We Are
          </Heading>
          <Text color={'gray.500'}>
          At our core, we believe that everyone has the power to make a positive impact on the world, and that charitable giving is one of the most powerful ways to do so. That's why we created an application that helps users find nonprofit organizations that align with their values and make it easy to donate to these organizations.
          <br /><br />
          We understand that it can be overwhelming to sift through the thousands of nonprofit organizations out there, each with their own mission and impact goals. That's why we designed our app to make it simple and easy for users to find organizations that resonate with them and make a difference in the areas they care about most.
          <br /><br />
          But our love for donating goes beyond just creating an app. We truly believe in the power of giving back and the impact it can have on the world. We've seen firsthand the transformative effects of charitable donations, and we believe that everyone has something to give, no matter how small.
          <br /><br />
          Through our app, we hope to inspire a culture of giving and empower individuals to make a difference in their own way. We believe that by working together and supporting the causes we care about, we can create a brighter future for all.
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={'/happyPerson.jpg'}
            alt={'Author'}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>The GiveBack Team</Text>
            <Text color={'gray.500'}>Feb 19, 2022 · 6min read</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}