import style from "./ModalWindow.module.css";

export default function ModalWindow({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className={style.wrapper}>
      <div className={style.modalWindow}>
        <div className={style.closeBtn} onClick={onClose}>
          ×
        </div>
        {children}
      </div>
    </div>
  );
}
