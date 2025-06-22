import React from 'react'

import { CartContextProvider } from './cartContext'
import Main from './components/app/main'
import Header from './components/app/header'
import Footer from './components/app/footer'

function App() {

   return (
      <CartContextProvider>
         <Header />
         <Main />
         <Footer />
      </CartContextProvider>
   )
}

export default App
