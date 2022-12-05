import './styles.css';
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import { Product } from '../../../types/Product';
import * as productService from '../../../services/product-service';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as cartService from '../../../services/cart-service';

export default function ProductDetails() {

  const navigate = useNavigate();

  const params = useParams();

  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    productService.findById(Number(params.productId))
      .then(response => {
        console.log(response.data);
        setProduct(response.data)
      })
      .catch(() => {
        navigate("/");
      })
  },[]);

  function handleBuyCLick() {
    if(product) {
      cartService.addProduct(product)
      navigate("/cart")
    }
  }

  return (
      <main>
        <section id="product-details-section" className="dsc-container">
          {
            product && 
            <ProductDetailsCard product={product}/>
          }
          <div className="dsc-btn-page-container">
              <div onClick={handleBuyCLick}>
                <ButtonPrimary textButton="Comprar"/>
              </div>
            <Link to="/">
              <ButtonInverse textButton="Início"/>
            </Link>
          </div>
        </section>
      </main>
  );
}
