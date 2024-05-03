import style from "./ModalWindow.module.css";

export default function ModalWindow({ isOpen, onClose, children }) {
  if (!isOpen) {
    document.body.style.overflow = "auto";
    return null;
  }

  function handleMouseDown(event) {
    if (event.target === event.currentTarget) onClose();
  }

  document.body.style.overflow = "hidden";

  return (
    <div className={style.wrapper} onMouseDown={handleMouseDown}>
      <div className={style.modalWindow}>
        <div className={style.closeBtn} onClick={onClose}>
          ×
        </div>
        {children}
      </div>
    </div>
  );
}
