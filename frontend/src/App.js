import * as React from 'react'
import GetStarted from './getStarted'

// 1. import ChakraProvider component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <GetStarted />
    </ChakraProvider>
  )
}
export default App;