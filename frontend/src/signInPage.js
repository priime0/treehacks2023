import * as React from 'react'
import SplitScreen from './splitScreen'
import SignInPage from './signIn'
import Navbar from './navbar'
import Footer from './footer'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

export default function SigninPage() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Navbar />
      <SignInPage />
      <Footer />
    </ChakraProvider>
  )
};