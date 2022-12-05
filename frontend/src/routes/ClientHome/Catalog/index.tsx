import "./styles.css";
import computerImg from "../../assets/img/computer.png";
import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import ButtonNextPage from "../../../components/ButtonNextPage";
import { Product } from "../../../types/Product";
import HeaderClient from "../../../components/HeaderClient";
import { Outlet } from "react-router-dom";
import * as productService from '../../../services/product-service';
import { useEffect, useState } from "react";
import axios from "axios";
import { Category } from "../../../types/category";


export default function Catalog() {

  const [products, setProducts] = useState<Product[]>([]);

  const objTest: Category = {
    id:8,
    name: 'Jardinagem'
  }

  useEffect(()=>{

    //localStorage.setItem("minhaCategoria", JSON.stringify(objTest));


    //const obj = localStorage.getItem(JSON.parse(localStorage.getItem("minhaCategoria") ||""))
    //console.log(obj);

    productService.findAll()
    .then(response => {
      setProducts(response.data.content)
      console.log(response.data.content)
    })
  },[]);


  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar />

        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">

          {
            products.map(
              product => <CatalogCard key={product.id} product={product} />)
          }
        </div>
        <ButtonNextPage />
      </section>
    </main>
  );
}
