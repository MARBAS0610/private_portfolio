import React from "react";
import "./ProgramCard.css"; // 必要ならスタイリング用CSSファイルを作成

const ProgramCard = ({ title, languages, description }) => {
  return (
    <div className="program-card">
      <h3>{title}</h3>
      <p><strong>使用言語、フレームワーク:</strong> {languages.join(", ")}</p>
      <p>{description}</p>
    </div>
  );
};

export default ProgramCard;