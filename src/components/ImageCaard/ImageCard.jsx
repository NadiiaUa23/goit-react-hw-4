// import css from "./ImageCard.module.css";

const ImageCard = ({ src, alt }) => {
  //приймає src і alt як пропси для відображення окремого зображення.
  return (
    <div>
      <img src={src} alt={alt} />
    </div>
  );
};

export default ImageCard;
