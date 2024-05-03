import style from "./ProductCard.module.css";

export default function ProductCard({ item, onOpenModal }) {
  return (
    <div
      className={style.productCard}
      key={item.id}
      onClick={() => onOpenModal(item)}
    >
      <div className={style.upperBlock}>
        <p className={style.category}>{item.category}</p>
        <h3 className={style.title}>{item.title}</h3>
      </div>

      <div className={style.lowerBlock}>
        <div className={style.price}>
          <p className={style.bucks}>$</p>
          <p className={style.text}>{item.price}</p>
        </div>
        <div className={style.buy}>
          <p className={style.text}>Buy</p>
        </div>
      </div>
    </div>
  );
}
