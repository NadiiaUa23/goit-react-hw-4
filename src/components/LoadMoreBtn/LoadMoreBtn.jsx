import React from "react";

function LoadMoreBtn = ({ hasImages, onLoadMore }){
  if (!hasImages) {
    return null; // Кнопка не рендериться, якщо зображень немає
  }

  return (
    <div>
      <button onClick={onLoadMore}>Load more</button>
    </div>
  );
};

export default LoadMoreBtn;
