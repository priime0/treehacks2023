import * as React from 'react'
import SplitScreen from './splitScreen'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <SplitScreen />
    </ChakraProvider>
  )
}
export default App;