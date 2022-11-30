import './styles.css';
import ProductCategory from '../ProductCategory';
import { Product } from '../../types/Product';


type Props = {
  product: Product;
}

export default function ProductDetailsCard({product}: Props) {
    return (
        <div className="dsc-card dsc-mb20">
            <div className="dsc-product-details-top dsc-line-bottom">
              <img src={product.imgUrl} alt={product.name} />
            </div>
            <div className="dsc-product-details-bottom">
              <h3>R$ {product.price.toFixed(2)}</h3>
              <h4>{product.name}</h4>
              <p>
                {product.description}
              </p>
              <div className="dsc-category-container">
                <ProductCategory name="Eletrônicos"/>
                <ProductCategory name="Computadores"/>
              </div>
            </div>
          </div>
    )
}