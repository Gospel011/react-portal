import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <button
          onClick={() => setIsOpen((val) => !val)}
          style={{ fontSize: "1.5rem" }}
        >
          Open modal
        </button>

        <Modal open={isOpen} close={() => setIsOpen(false)}>
          Hello Divine
        </Modal>
      </div>
      <div
        style={{
          backgroundColor: "red",
          padding: "1.5rem",
          fontSize: "2rem",
        }}
      >
        Other Content
      </div>
    </>
  );
}

export default App;
