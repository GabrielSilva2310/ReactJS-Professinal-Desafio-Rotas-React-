
import HeaderDefault from "./components/HeaderDefault";
import HeaderProducts from "./components/NavProducts";
import About from "./routes/Home/About";
import HomeBody from "./routes/Home/HomeBody";
import NotFound from "./routes/Home/NotFound";
import ProductsBooks from "./routes/Home/ProductsBooks";
import ProductsComputers from "./routes/Home/ProductsComputers";
import ProductsEletronics from "./routes/Home/ProductsEletronics";



function App() {

  return (
    <>
      <HeaderDefault/>
      <ProductsBooks/>
    </>
  );
}

export default App
