import PropTypes from "prop-types";
import styles from "./ImageCard.module.css"; // Подключаем стили для компонента

function ImageCard({ image, alt, onClick }) {
  return (
    <div onClick={onClick} className={styles.card}>
      <img src={image.url} alt={alt} className={styles.image} />
    </div>
  );
}

export default ImageCard;
