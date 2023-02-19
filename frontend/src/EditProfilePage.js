import * as React from 'react'
import EditSocialProfile from './profileEditLayout.js'
import CallToActionWithIllustration from './illustrationCTA'
import Navbar from './navbar'
import Footer from './footer'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function EditProfilePage() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Navbar />
      <EditSocialProfile />
      <Footer />
    </ChakraProvider>
  )
}
export default EditProfilePage;
