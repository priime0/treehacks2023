import * as React from 'react'
import SplitScreen from './splitScreen'
import SignupCard from './signUp'
import Navbar from './navbar'
import Footer from './footer'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

export default function SignupPage() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Navbar />
      <SignupCard />
      <Footer />
    </ChakraProvider>
  )
}