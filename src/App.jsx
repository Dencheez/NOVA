import { Header, Banner, Main, Footer } from "./blocks";

import { CartProvider } from "./context/CartContext"

function App() {
  return (
    <CartProvider>
      <div className="">
        <Header></Header>
        <Banner></Banner>
        <Main></Main>
        <Footer></Footer>
      </div>
    </CartProvider>

  )

}

export default App
