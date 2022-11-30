import './styles.css';
import computerImg from '../../assets/img/computer.png';
import { Product } from '../../types/Product';

type Props = {
  product: Product;
}

export default function CatalogCard({product}: Props) {
    return (
        <div className="dsc-card">
            <div className="dsc-catalog-card-top dsc-line-bottom">
              <img src={product.imgUrl} alt={product.name} />
            </div>
            <div className="dsc-catalog-card-bottom">
              <h3>R$ {product.price.toFixed(2)}</h3>
              <h4>
                {product.name}
              </h4>
            </div>
          </div>
    );
}

