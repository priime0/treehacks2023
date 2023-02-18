import * as React from 'react'
import SplitScreen from './splitScreen'
import CallToActionWithIllustration from './illustrationCTA'
import Navbar from './navbar'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Navbar />
      <CallToActionWithIllustration />
    </ChakraProvider>
  )
}
export default App;