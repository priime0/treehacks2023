import * as React from 'react'
import ProfileLayout from './profileLayout'
import CallToActionWithIllustration from './illustrationCTA'
import Navbar from './navbar'
import Footer from './footer'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function ViewProfilePage() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Navbar />
      <ProfileLayout />
      <Footer />
    </ChakraProvider>
  )
}
export default ViewProfilePage;
