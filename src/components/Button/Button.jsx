import style from "./Button.module.css";

export default function Button({ type, onClick, className, children }) {
  const classes = `${style.btn} ${className}`;

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
