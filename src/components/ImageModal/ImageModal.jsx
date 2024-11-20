import Modal from "react-modal";
import css from "./ImageModal.module.css";

// Настройка модального окна (для а11y - доступности)
Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onRequestClose, photo }) => {
  if (!photo) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modalContent}
      overlayClassName={css.modalOverlay}
    >
      <button className={css.closeButton} onClick={onRequestClose}>
        &times;
      </button>
      <img
        src={photo.urls.regular}
        alt={photo.alt_description}
        className={css.modalImage}
      />
    </Modal>
  );
};

export default ImageModal;
