import DetailTab from "./Component/DetailTab/DetailTab"
import Product from "./Component/Product/Product"
import RelatedProducts from "./Component/RelatedProducts/RelatedProducts"
import Footer from "./Component/Shared/Footer/Footer"
import Nav from "./Component/Shared/Nav/Nav"

function App() {

  return (
    <>
      <Nav />
      <main className="container">
        <Product />
        <DetailTab />
        <RelatedProducts />
      </main>
      <Footer />
    </>
  )
}

export default App
