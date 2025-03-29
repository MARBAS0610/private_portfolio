import React from 'react';
import './ImageTextRow.css';

const ImageTextRow = ({ imageSrc, altText, children }) => {
  return (
    <div className="image-text-row">
      <div className="image-text-row__text">
        {/* <h2>{title}</h2> */}
        <p>{children}</p>   {/* children: テキスト部分 */}
      </div>
      <img src={imageSrc} alt={altText} className="image-text-row__image" />
    </div>
  );
};

export default ImageTextRow;
