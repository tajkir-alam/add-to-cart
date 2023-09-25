import DetailTab from "./Component/DetailTab/DetailTab"
import Product from "./Component/Product/Product"
import Nav from "./Component/Shared/Nav/Nav"

function App() {

  return (
    <>
      <Nav />
      <main className="container">
        <Product />
        <DetailTab />

      </main>

    </>
  )
}

export default App
