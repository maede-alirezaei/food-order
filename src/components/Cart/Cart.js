import React, { useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

function Cart(props) {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = (id) => {};
  const cartItemAddHandler = (item) => {};

  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
      onRemove={cartItemRemoveHandler.bind(null,item.id)}
      onAdd={cartItemAddHandler.bind(null,item)}
    />
  ));
  return (
    <Modal onClose={props.onClose}>
      <ul className={styles["cart-items"]}>{cartItems}</ul>

      <div className={styles.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          close
        </button>
        {hasItems && <button className={styles.button}>order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
