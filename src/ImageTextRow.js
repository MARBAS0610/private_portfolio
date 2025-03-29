import React from 'react';
import './ImageTextRow.css';

const ImageTextRow = ({ imageSrc, altText, children }) => {
  return (
    <div className="image-text-row">
      <img src={imageSrc} alt={altText} className="image-text-row__image" />
      <div className="image-text-row__text">
        {/* <h2>{title}</h2> */}
        <p>{children}</p>   {/* children: テキスト部分 */}
      </div>
    </div>
  );
};

export default ImageTextRow;
