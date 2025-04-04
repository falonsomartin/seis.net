import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DocumentationCard from "./DocumentationCard";
import styles from "./Documentation.module.css";

const docs = {
  "Introduction": [
    {
      title: "Conceptual Framework",
      pages: "33 pp",
      size: "PDF (130 Kb)",
      link: "/docs/conceptual-framework.pdf",
    },
  ],
  "Inf&Kno": [
    {
      title: "SDBm: FAO-ISRIC-CSIC Multilingual Soil Database",
      pages: "109 pp",
    },
    {
      title: "SDBm Plus: FAO-CSIC Multilingual Soil Database",
      pages: "156 pp",
      size: "PDF (3.8 Mb)",
      link: "/docs/sdbm-plus.pdf",
    },
    {
      title: "CDBm: Monthly Climate Database",
      pages: "38 pp",
      size: "PDF (565 Kb)",
      link: "/docs/cdbm.pdf",
    },
    {
      title: "MDBm: Agricultural Management Database",
      pages: "106 pp",
      size: "PDF (651 Kb)",
      link: "/docs/mdbm.pdf",
    },
    {
      title: "Datasets: Soil, Climate and Management Data",
      pages: "213 pp",
      size: "PDF (551 Kb)",
      link: "/docs/datasets.pdf",
    },
  ],
  "Pro&Eco": [
    {
      title: "Introduction",
      pages: "6 pp",
      size: "PDF (250 Kb)",
      link: "/docs/production-introduction.pdf",
    },
    {
      title: "Terraza Model: Bioclimatic Deficiency",
      pages: "10 pp",
    },
    {
      title: "Cervatana Model: General Land Capability",
      pages: "9 pp",
    },
    {
      title: "Almagra Model: Agricultural Soil Suitability",
      pages: "11 pp",
    },
    {
      title: "Albero Model: Crop Yield Prediction",
      pages: "6 pp",
    },
    {
      title: "Sierra Model: Forestry Land Suitability",
      pages: "9 pp",
    },
    {
      title: "Marisma Model: Natural Fertility Classification",
      pages: "49 pp",
      size: "PDF (480 Kb)",
      link: "/docs/marisma-model.pdf",
    },
    {
      title: "Appendixes",
      pages: "12 pp",
      size: "PDF (142 Kb)",
      link: "/docs/appendixes-production.pdf",
    },
  ],
  "Ero&Con": [
    {
      title: "Raizal Model: Soil Erosion Risk",
      pages: "22 pp",
      size: "PDF (291 Kb)",
      link: "/docs/raizal-model.pdf",
    },
    {
      title: "Pantanal Model: Specific Soil Contamination Risk",
      pages: "21 pp",
    },
    {
      title: "Arenal Model: General Soil Contamination Risk",
      pages: "12 pp",
      size: "PDF (119 Kb)",
      link: "/docs/arenal-model.pdf",
    },
    {
      title: "Appendixes",
      pages: "72 pp",
      size: "PDF (274 Kb)",
      link: "/docs/appendixes-erosion.pdf",
    },
  ],
  "Eng&Tec": [
    {
      title: "Alcor Model: Soil Compaction Risk",
      pages: "20 pp",
      size: "PDF (541 Kb)",
      link: "/docs/alcor-model.pdf",
    },
    {
      title: "Aljarafe Model: Soil Plasticity and Workability",
      pages: "17 pp",
      size: "PDF (611 Kb)",
      link: "/docs/aljarafe-model.pdf",
    },
  ],
  "Imp&Res": [
    {
      title: "ImpelERO Model",
      pages: "26 pp",
      size: "PDF (314 Kb)",
      link: "/docs/impelero-model.pdf",
    },
    {
      title: "Appendixes",
      pages: "34 pp",
      size: "PDF (270 Kb)",
      link: "/docs/appendixes-response.pdf",
    },
  ],
  "Spatialization": [
    {
      title: "General Information",
      pages: "23 pp",
      size: "PDF (1 Mb)",
      link: "/docs/spatialization.pdf",
    },
  ],
  "Annexes": [
    {
      title: "Annex 1: Glossary of Major Terms",
      pages: "8 pp",
      size: "PDF (129 Kb)",
      link: "/docs/glossary.pdf",
    },
  ],
};

export default function Documentation() {
  const [activeTab, setActiveTab] = useState("Introduction");
  const [scrollIndex, setScrollIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setScrollIndex(0); // Reset scroll index when changing tabs
  };

  const handleNext = () => {
    setScrollIndex((prev) => prev + 1);
  };

  const handleBack = () => {
    setScrollIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const visibleDocs = docs[activeTab];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Documentación Disponible</h1>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          borderBottom: 1,
          borderColor: "divider",
          marginBottom: "20px",
        }}
      >
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          textColor="primary"
          indicatorColor="primary"
        >
          {Object.keys(docs).map((category) => (
            <Tab key={category} label={category} value={category} />
          ))}
        </Tabs>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", position: "relative" }}>
        {visibleDocs.length > 3 && (
          <IconButton onClick={handleBack} disabled={scrollIndex === 0} sx={{ position: "absolute", left: "-40px" }}>
            <ArrowBackIosNewIcon />
          </IconButton>
        )}
        <Box className={styles.sliderWrapper}>
          <Box
            className={styles.slider}
            sx={{
              transform: `translateX(-${scrollIndex * 350}px)`, // Ajustar según el ancho de la tarjeta
              justifyContent: visibleDocs.length > 3 ? "flex-start" : "center", // Cambia según el número de elementos
              display: "flex",
              gap: "20px", // Espacio entre tarjetas
              width: "100%", // Usa todo el espacio disponible
            }}
          >
            {visibleDocs.map((doc, index) => (
              <DocumentationCard key={index} {...doc} />
            ))}
          </Box>
        </Box>
        {visibleDocs.length > 3 && (
          <IconButton
            onClick={handleNext}
            disabled={scrollIndex + 3 >= visibleDocs.length}
            sx={{ position: "absolute", right: "-40px" }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        )}
      </Box>
    </div>
  );
}