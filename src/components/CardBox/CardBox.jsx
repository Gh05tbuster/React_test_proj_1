import style from "./CardBox.module.css";
import ProductCard from "../ProductCard/ProductCard";

export default function CardBox({ products }) {
  return (
    <div className={style.cardBox}>
      {products.map((item) => (
        <ProductCard item={item} />
      ))}
    </div>
  );
}
