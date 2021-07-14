import React from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose}/>;
};
const ModalOverlay = (props) => {
  return (
    <div>
      
      <div className={styles.modal}> {props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");
function Modal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
}

export default Modal;
