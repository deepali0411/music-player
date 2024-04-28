import React from "react";
import styles from "./card.module.scss";

const Card = ({ cardData }) => {
  
  const handlePlay = (e) => {
    
  }

  return (
    <div className={styles.cardContainer}>
      <div className={styles.images}>
        <img
          src={cardData?.album?.images[0]?.url}
          height={250}
          width={250}
          alt="album image"
        />
      </div>
      <div className={styles.bottomStyle}>
        <div className={styles.title}>{cardData.name}</div>
        <div className={styles.singer}>
          {cardData.artists.map((data) => data.name).join(", ")}
        </div>
        <audio
          src={cardData?.preview_url}
          controls={cardData.preview_url}
          className={styles.audio}
          onPlay={(e)=> handlePlay(e)}
        />
      </div>
    </div>
  );
};
export default Card;
