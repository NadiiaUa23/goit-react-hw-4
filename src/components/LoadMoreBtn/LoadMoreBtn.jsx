import PropTypes from "prop-types";
import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={css.btn} onClick={onClick}>
      Load more
    </button>
  );
};

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired, // onClick обов'язково повинен бути функцією
};

export default LoadMoreBtn;
