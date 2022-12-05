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

type QueryParams = {
  page: number;
  name: string;
}

export default function Catalog() {

  const [products, setProducts] = useState<Product[]>([]);

  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 0,
    name: ''
  })


  useEffect(()=>{
    productService.findPageRequest(queryParams.page,queryParams.name)
    .then(response => {
      setProducts(response.data.content)
      console.log(response.data.content)
    })
  },[queryParams]);


  function handleSearch(searchText: string) {
    setQueryParams({...queryParams, name: searchText});
  }

  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar onSearch={handleSearch}/>

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
