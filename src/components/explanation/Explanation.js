import React from "react";
import styles from "./Explanation.module.css";

export default function Explanation() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>SEIS.net</h1>
      <h2 className={styles.subtitle}>
        Sistema Español de Información de Suelos sobre Internet
      </h2>
      <hr className={styles.divider} />

      <h3 className={styles.sectionTitle}>Resumen</h3>
      <p className={styles.text}>
        SEIS.net recoge los resultados de los proyectos MIMAM-CSIC, FAO-CSIC y
        SIDASS (1999-2001), coordinados por el grupo MicroLEIS del IRNAS. Su
        objetivo es recopilar información sobre la calidad y degradación de los
        suelos en España y ofrecerla a través de Internet.
      </p>
      <p className={styles.text}>
        La información está organizada en tres niveles: Primera Aproximación a
        los Suelos, Atlas Digital de Comarcas y Base de Datos de Suelos
        On-line.
      </p>
      <p className={styles.link}>
        Más información:{" "}
        <a
          href="http://www.microleis.com/mimam/seisnet.htm"
          target="_blank"
          rel="noopener noreferrer"
        >
          SEIS.net
        </a>
      </p>

      <hr className={styles.divider} />
      <h3 className={styles.sectionTitle}>Niveles de Información</h3>

      <ul className={styles.list}>
        <li>
          <strong>Nivel #1:</strong> Primera Aproximación a los Suelos: visión
          global de los recursos naturales.
        </li>
        <li>
          <strong>Nivel #2:</strong> Atlas Digital de Comarcas: mapas de
          topografía, geología, suelos y uso del suelo a escala comarcal.
        </li>
        <li>
          <strong>Nivel #3:</strong> Base de Datos de Suelos: perfiles de suelos
          detallados y geo-referenciados disponibles en línea.
        </li>
      </ul>

      <hr className={styles.divider} />
      <h3 className={styles.sectionTitle}>Aplicaciones</h3>
      <p className={styles.text}>
        SEIS.net puede utilizarse para la toma de decisiones relacionadas con el
        uso sostenible y conservación de los suelos españoles. Ofrece mapas,
        perfiles de suelos, y datos climáticos útiles para técnicos,
        administraciones y usuarios finales.
      </p>

      <hr className={styles.divider} />
      <h3 className={styles.sectionTitle}>Desarrollado por:</h3>
      <ul className={styles.authors}>
        <li>Prof. D. de la Rosa (IRNAS, CSIC)</li>
        <li>FAO - Servicio de Manejo de Tierras</li>
        <li>Colaboradores: J. Antoine, R. Horn, N. Prange, entre otros.</li>
      </ul>
      <p className={styles.institution}>
        Instituto de Recursos Naturales y Agrobiología de Sevilla (IRNAS-CSIC)
        <br />
        Sevilla, España
      </p>

      <hr className={styles.divider} />
      <h3 className={styles.sectionTitle}>Referencias y Recursos</h3>
      <ul className={styles.docs}>
        <li>
          <a href="/docs/SEISnet_Manual.pdf" target="_blank" rel="noopener noreferrer">
            Manual de Usuario SEIS.net (PDF)
          </a>
        </li>
        <li>
          <a href="/docs/SEISnet_Info.pdf" target="_blank" rel="noopener noreferrer">
            Información General sobre SEIS.net
          </a>
        </li>
      </ul>
    </div>
  );
}