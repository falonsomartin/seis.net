import React from "react";
import styles from "./SoftwareCard.module.css";

export default function SoftwareCard({ img, name, summary, file }) {
  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={img || "/default-software.png"}
        alt={name}
      />
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.details}>{summary}</p>
      {file && (
        <a
          href={`/software/${file}`}
          download
          rel="noreferrer"
          target="_blank"
          className={styles.link}
        >
          Download
        </a>
      )}
    </div>
  );
}