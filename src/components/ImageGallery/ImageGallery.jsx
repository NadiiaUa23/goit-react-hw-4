import style from "./ImageGallery.module.css";
import PropTypes from "prop-types";

const ImageGallery = ({ src, alt }) => {
  return (
    <ul>
      {/* Набір елементів списку із зображеннями */}
      <li>
        <div className={styles.imageWrapper}>
          <img src="" alt="" className={styles.image} />
        </div>
      </li>
    </ul>
  );
};





export default ImageGallery;
