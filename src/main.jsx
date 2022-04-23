import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import { BrowserRouter } from 'react-router-dom';

const reactRoot = document.getElementById("root");
ReactDOM.createRoot(reactRoot).render(
<ChakraProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</ChakraProvider>
)
