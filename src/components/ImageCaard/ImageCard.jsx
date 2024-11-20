import css from "./ImageCard.module.css";

const ImageCard = ({ src, alt, onClick }) => {
  //приймає src і alt як пропси для відображення окремого зображення.
  return (
    <div>
      <img src={src} alt={alt} className={css.cardImg} onClick={onClick} />
    </div>
  );
};

export default ImageCard;
