import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderClient from "./components/HeaderClient";
import Catalog from "./routes/Catalog";
import ClientHome from "./routes/ClientHome";
import ProductDetails from "./routes/ProductDetails";


export default function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientHome/>}>
          <Route index element={<Catalog/>}/>
          <Route path="catalog" element={<Catalog/>}/>
          <Route path="product-details" element={<ProductDetails/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );   
}

  