import React from "react";
import styles from "./DocumentationCard.module.css";

export default function DocumentationCard({ img, title, pages, size, link }) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={'./document_icon.png'} alt={title} />
      <h3 className={styles.title}>{title}</h3>
      {/* Bloque invisible que rellena espacio */}
      <div className={styles.placeholderTitle}>Longest Possible Title Example Example Example Longest Possible Title Example Example Example  adsadasdLongest Possible Title Example Example Example Longest Possible Title Example Example Example  adsadasdads
        ads
      </div>
      <p className={styles.details}>
        {pages}{" "}
        {size && (
          <>
            | <a href={link} target="_blank" rel="noopener noreferrer">{size}</a>
          </>
        )}
      </p>
    </div>
  );
}
