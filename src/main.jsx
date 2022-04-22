import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'

const reactRoot = document.getElementById("root");
ReactDOM.createRoot(reactRoot).render(
<ChakraProvider>
  <App />
</ChakraProvider>
)
