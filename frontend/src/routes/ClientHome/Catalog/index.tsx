import "./styles.css";
import computerImg from "../../assets/img/computer.png";
import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import ButtonNextPage from "../../../components/ButtonNextPage";
import { Product } from "../../../types/Product";
import HeaderClient from "../../../components/HeaderClient";
import { Outlet } from "react-router-dom";
import * as productService from '../../../services/product-service';


export default function Catalog() {
  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar />

        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">

          {
            productService.findAll().map(
              product => <CatalogCard key={product.id} product={product} />)
          }
        </div>
        <ButtonNextPage />
      </section>
    </main>
  );
}
