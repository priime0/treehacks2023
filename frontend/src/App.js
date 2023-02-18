import * as React from 'react'
import SplitScreen from './splitScreen'
import CallToActionWithIllustration from './illustrationCTA'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <CallToActionWithIllustration />
    </ChakraProvider>
  )
}
export default App;