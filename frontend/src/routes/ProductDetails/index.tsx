import './styles.css';
import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import { Product } from '../../types/Product';


const product: Product = {
  id: '2',
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

export default function ProductDetails() {
  return (
    <>
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductDetailsCard product={product}/>
          <div className="dsc-btn-page-container">
            <ButtonPrimary />
            <ButtonInverse />
          </div>
        </section>
      </main>
    </>
  );
}
