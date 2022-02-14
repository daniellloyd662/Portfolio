import "./productList.css";
import Product from "../product/Product";

import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & Inspire. It's Lama</h1>
        <p className="pl-desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, cumque,
          deleniti non suscipit placeat a expedita totam temporibus quas
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
