import style from "./CardBox.module.css";
import ProductCard from "../ProductCard/ProductCard";
import { useState } from "react";
import ModalWindow from "../ModalWindow/ModalWindow";
import Button from "../Button/Button";

export default function CardBox({ products }) {
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState([]);

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  function openModal(params) {
    setIsOpen(true);
    setItem(params);
  }

  function closeModal() {
    setNameError("");
    setPhoneError("");
    setIsOpen(false);
  }

  function handleNameChange(event) {
    setName(event.target.value);
    setNameError("");
  }

  function handlePhoneChange(event) {
    setPhone(event.target.value);
    setPhoneError("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateAll()) {
      console.log(
        `${name}, you have successfylly purchased ${item.title} for $${item.price}! Your contact number is ${phone}, we will contact you soon.`
      );
      closeModal();
    }
  }

  function validateName() {
    const regex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;
    if (!name) {
      setNameError("This field is required!");
      return 0;
    } else if (!regex.test(name)) {
      setNameError("Only letters allowed!");
      return 0;
    } else return 1;
  }

  function validatePhone() {
    const regex = /^\+?\d{12}$/;
    if (!phone) {
      setPhoneError("This field is required!");
      return 0;
    } else if (!regex.test(phone)) {
      setPhoneError("Should contain 12 numbers!");
      return 0;
    } else return 1;
  }

  function validateAll() {
    const valid = [];
    valid.push(validatePhone());
    valid.push(validateName());
    return valid.every((el) => el !== 0);
  }

  function buyCheapest() {
    const cheapestProduct = products.reduce((min, product) => {
      if (product.price < min.price) return product;
      return min;
    }, products[0]);

    openModal(cheapestProduct);
  }

  return (
    <>
      <ModalWindow isOpen={isOpen} onClose={closeModal}>
        <div className={style.modalInsides}>
          <p className={style.category}>{item.category}</p>
          <h2 className={style.title}>{item.title}</h2>
          <div className={style.price}>
            <p className={style.bucks}>$</p>
            <p className={style.text}>{item.price}</p>
          </div>
          <form onSubmit={handleSubmit} className={style.purchaseForm}>
            <div className={style.formField}>
              <input
                type="text"
                placeholder="Name"
                className={`${style.textInput} ${
                  nameError ? style.errored : ""
                }`}
                onChange={handleNameChange}
                onBlur={validateName}
              />
              <img
                src="/error.svg"
                alt=""
                className={`${style.errorCross} ${
                  nameError ? "" : style.hidden
                }`}
              />
              <p className={style.error}>{nameError}</p>
            </div>

            <div className={style.formField}>
              <input
                type="text"
                placeholder="Number"
                className={`${style.textInput} ${
                  phoneError ? style.errored : ""
                }`}
                onChange={handlePhoneChange}
                onBlur={validatePhone}
              />
              <img
                src="/error.svg"
                alt=""
                className={`${style.errorCross} ${
                  phoneError ? "" : style.hidden
                }`}
              />
              <p className={style.error}>{phoneError}</p>
            </div>
            <Button
              type="submit"
              onClick={handleSubmit}
              className={"main submit"}
            >
              <div className={style.submitText}>
                <p className={style.text}>Order</p>{" "}
                <img src="/arrow-right.svg" alt="" className={style.arrow} />
              </div>
            </Button>
          </form>
        </div>
      </ModalWindow>
      <div className={style.cardBox}>
        {products.map((product) => (
          <ProductCard item={product} onOpenModal={openModal} />
        ))}
      </div>
      <div className={style.buyCheapest}>
        <Button
          type="button"
          onClick={buyCheapest}
          className={"main"}
          style={{ fontSize: "24px" }}
        >
          Buy cheapest
        </Button>
      </div>
    </>
  );
}
