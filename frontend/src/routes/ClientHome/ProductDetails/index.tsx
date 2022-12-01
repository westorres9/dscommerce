import './styles.css';
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import { Product } from '../../../types/Product';
import * as productService from '../../../services/product-service';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';




export default function ProductDetails() {

  const params = useParams();

  const product = productService.findById(Number(params.productId));

  return (
      <main>
        <section id="product-details-section" className="dsc-container">
          {
            product && 
            <ProductDetailsCard product={product}/>
          }
          <div className="dsc-btn-page-container">
            <ButtonPrimary textButton="Comprar"/>
            <Link to="/">
              <ButtonInverse textButton="Início"/>
            </Link>
          </div>
        </section>
      </main>
  );
}
