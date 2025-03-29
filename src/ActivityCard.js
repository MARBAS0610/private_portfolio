import React from "react";
import "./ActivityCard.css"; // 必要ならスタイリング用CSSファイルを作成

const ActivityCard = ({ title, period, description }) => {
  return (
    <div className="activity-card">
      <h3>{title}</h3>
      <p>期間：{period}</p>
      <p>{description}</p>
    </div>
  );
};

export default ActivityCard;