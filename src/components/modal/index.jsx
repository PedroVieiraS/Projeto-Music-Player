import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Configure o modal para acessibilidade
Modal.setAppElement("#root"); // Mude para o ID do seu elemento raiz

const App = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <h1>Exemplo de Modal</h1>
      <button onClick={openModal}>Abrir Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal de Exemplo"
      >
        <h2>Olá!</h2>
        <button onClick={closeModal}>Fechar</button>
        <div>Este é um modal de exemplo.</div>
      </Modal>
    </div>
  );
};

export default App;
