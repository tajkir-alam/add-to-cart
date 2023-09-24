import Product from "./Component/Product/Product"
import Nav from "./Component/Shared/Nav/Nav"

function App() {

  return (
    <>
      <Nav />
      <main className="container">
        <Product />
      </main>

    </>
  )
}

export default App
