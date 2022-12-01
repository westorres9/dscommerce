import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderClient from "./components/HeaderClient";
import Catalog from "./routes/Catalog";
import ProductDetails from "./routes/ProductDetails";


export default function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Catalog />}>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );   
}

  