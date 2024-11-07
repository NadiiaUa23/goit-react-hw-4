import ImageCard from "../ImageCaard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ photos }) => {
  //приймає масив images як проп, і для кожного зображення створює елемент li з компонентом ImageCard.
  return (
    <ul className={css.list}>
      {photos.map((photo) => (
        <li key={photo.id} className={css.listImg}>
          <ImageCard src={photo.urls.thumb} alt={photo.alt_description} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
