import { Header, Banner, Main, Footer } from "./blocks";
import { CartModal } from "./components";

import { CartProvider } from "./context/CartContext"

function App() {
  return (
    <CartProvider>
      <div className="">
        <Header></Header>
        <Banner></Banner>
        <Main></Main>
       <CartModal></CartModal>
        <Footer></Footer>
      </div>
    </CartProvider>

  )

}

export default App
