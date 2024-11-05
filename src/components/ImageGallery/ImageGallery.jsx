import ImageCard from "../ImageCaard/ImageCard";
import style from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={style.list}>
      <li key={image.id} className={css.galleryItem}>
        <ImageCard
          image={image}
          alt={image.alt_description || "Image"} // Додаємо alt
          onClick={() => onImageClick(image)}
        />
      </li>
    </ul>
  );
};

export default ImageGallery;
