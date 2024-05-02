import style from "./Button.module.css";

export default function Button({ type, onClick, className, children }) {
  const classList = className.split(" ");
  const classes = `${style.btn} ${classList.map((i) => style[i]).join(" ")}`;

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
