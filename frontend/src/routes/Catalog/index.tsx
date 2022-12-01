import "./styles.css";
import computerImg from "../../assets/img/computer.png";
import SearchBar from "../../components/SearchBar";
import CatalogCard from "../../components/CatalogCard";
import ButtonNextPage from "../../components/ButtonNextPage";
import { Product } from "../../types/Product";
import HeaderClient from "../../components/HeaderClient";
import { Outlet } from "react-router-dom";

const product1: Product = {
  id: 2,
  name: "SmartTV",
  description: "Esta tv é muito bonita",
  price: 2199.99,
  imgUrl:
    "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg",
  categories: [
    {
      id: 2,
      name: "Computadores",
    },
    {
      id: 3,
      name: "Eletronicos",
    },
    {
      id: 4,
      name: "Importados",
    },
  ],
};

const product: Product = {
  id: 2,
  name: "macBook Pro",
  description: "Macbook Pro Apple M1 256GB 8GB RAM ",
  price: 6599.99,
  imgUrl:
    "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/3-big.jpg",
  categories: [
    {
      id: 2,
      name: "Computadores",
    },
    {
      id: 3,
      name: "Eletronicos",
    },
    {
      id: 4,
      name: "Importados",
    },
  ],
};

const product3: Product = {
  id: 4,
  name: "O Senhor dos Anéis",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  price: 348.49,
  imgUrl:
    "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/1-big.jpg",
  categories: [
    {
      id: 1,
      name: "Livros",
    },
    {
      id: 2,
      name: "Importados",
    },
  ],
};

export default function Catalog() {
  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar />

        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          <CatalogCard key={product1.id} product={product1} />
          <CatalogCard key={product.id} product={product} />
          <CatalogCard key={product3.id} product={product3} />
          <CatalogCard key={product.id} product={product} />
          <CatalogCard key={product.id} product={product} />
          <CatalogCard key={product.id} product={product} />
          <CatalogCard key={product.id} product={product} />
          <CatalogCard key={product.id} product={product} />
          <CatalogCard key={product.id} product={product} />
          <CatalogCard key={product.id} product={product} />
          <CatalogCard key={product.id} product={product} />
        </div>
        <ButtonNextPage />
      </section>
    </main>
  );
}
