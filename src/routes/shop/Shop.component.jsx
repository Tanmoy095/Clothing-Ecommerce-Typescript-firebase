import "./Shop.styles.scss";
import { React, useContext } from "react";
import { ProductsContext } from "../../contexts/Products.context";
import ProductCard from "../../components/Product-card/ProductCard.component";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
