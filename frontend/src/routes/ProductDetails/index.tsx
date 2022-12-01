import './styles.css';
import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import { Product } from '../../types/Product';


const product: Product = {
  id: 2,
  name: 'SmartTV',
  description: 'Esta tv é muito bonita',
  price: 2199.99,
  imgUrl: 'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg',
  categories: [
    {
      id: 2,
      name: 'Computadores'
    },
    {
      id: 3,
      name: 'Eletronicos'
    },
    {
      id: 4,
      name: 'Importados'
    }
  ]
}

const product1: Product = {
  id: 2,
  name: 'macBook Pro',
  description: 'Macbook Pro Apple M1 256GB 8GB RAM ',
  price: 6599.99,
  imgUrl: 'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/3-big.jpg',
  categories: [
    {
      id: 2,
      name: 'Computadores'
    },
    {
      id: 3,
      name: 'Eletronicos'
    },
    {
      id: 4,
      name: 'Importados'
    }
  ]
}

const product3: Product = {
    id: 4,
    name: 'Senhor dos Anéis',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 348.49,
    imgUrl: 'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/1-big.jpg',
    categories: [
        {
            id: 1,
            name: 'Livros',
        },
        {
          id: 2,
          name: 'Importados',
        }
    ]
}

export default function ProductDetails() {
  return (
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductDetailsCard product={product3}/>
          <div className="dsc-btn-page-container">
            <ButtonPrimary textButton="Comprar"/>
            <ButtonInverse textButton="Início"/>
          </div>
        </section>
      </main>
  );
}
