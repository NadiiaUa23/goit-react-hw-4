import ImageCard from "../ImageCaard/ImageCard";
// import css from "./ImageGallery.module.css";

const ImageGallery = ({ photos }) => {
  //приймає масив images як проп, і для кожного зображення створює елемент li з компонентом ImageCard.
  return (
    <ul>
      {photos.map((photo) => (
        <li key={photo.id}>
          <ImageCard src={photo.urls.thumb} alt={photo.alt_description} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
