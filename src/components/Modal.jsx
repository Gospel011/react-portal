import { Children } from "react";
import { createPortal } from "react-dom";

const modalStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#fff",
  borderRadius: "1rem",
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  fontSize: "2rem",
};

const overlayStyle = {
  position: "fixed",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  backgroundColor: "rgba(0, 0, 0, .4)",
};

function Modal({ open, children, close }) {
  if (!open) return null;
  return createPortal(
    <>
      <div style={overlayStyle} onClick={close}></div>
      <div style={modalStyle}>
        {children}
        <span
          onClick={close}
          style={{
            cursor: "pointer",
            position: "absolute",
            top: "0.5rem",
            right: "1rem",
          }}
        >
          &times;
        </span>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default Modal;
