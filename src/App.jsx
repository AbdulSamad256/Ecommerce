
import Header from '../Component/header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from '../Pages/Products';
import ProductDetail from '../Pages/ProductDetail';
import Home from '../Pages/Home';

function App() {

  return (
    <>
    <Header/>
       {/* <h1 className="text-3xl text-center p-6 font-bold underline">
      Hello world!
    </h1> */}

     <BrowserRouter>
       <Routes>
        <Route path="/" element = {<Product/>}    />
        {/* <Route path="Products" element = {<Product/>}    /> */}
        <Route path="/Products/:id" element = {<ProductDetail/>}    />

       </Routes>

     </BrowserRouter>


    </>
  )
}

export default App
