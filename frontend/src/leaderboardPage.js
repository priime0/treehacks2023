import * as React from 'react'
import SplitScreen from './splitScreen'
import Leaderboard from './leaderboard'
import Navbar from './navbar'
import Footer from './footer'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Navbar />
      <Leaderboard />
      <Footer />
    </ChakraProvider>
  )
}
export default App;