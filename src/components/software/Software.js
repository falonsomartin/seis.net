import React, { useState } from "react";
import SoftwareCard from "./SoftwareCard";
import styles from "./Software.module.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const softwareList = [
  {
    img: "./pixelcut-export.png",
    name: "SDBm",
    file: "sdbm.zip",
    version: "4.1",
    revisionDate: "1996",
    size: "792.390 bytes",
    category: "DBm",
    summary: "Multilingual Soil Database",
  },
  {
    img: "./pixelcut-export.png",
    name: "SDBm Plus",
    file: "SDBmPlus.zip",
    version: "2.02",
    revisionDate: "September 29, 2003",
    size: "13 MB",
    category: "DBm",
    summary: "FAO - CSIC Multilingual Soil Profile Database",
  },
  {
    img: "./pixelcut-export.png",
    name: "CDBm",
    file: "cdbm.zip",
    version: "4.1",
    revisionDate: "1996",
    size: "615.697 bytes",
    category: "DBm",
    summary: "Monthly Climate Database",
  },
  {
    img: "./pixelcut-export.png",
    name: "MDBm",
    file: "MDBm.zip",
    version: "0.01 (Tentative approach)",
    revisionDate: "December 2000",
    size: "8.14 MB",
    category: "DBm",
    summary: "Agricultural Management Database",
  },
  {
    img: "./pixelcut-export.png",
    name: "Pro&Eco",
    file: "proeco.zip",
    version: "4.1",
    revisionDate: "1996",
    size: "803.474 bytes",
    category: "Evaluation Models",
    summary: "Agro-quality Land Evaluation Models",
  },
  {
    img: "./pixelcut-export.png",
    name: "FCCas",
    file: "fccas.zip",
    version: "4.1",
    revisionDate: "1996",
    size: "344.978 bytes",
    category: "Classification Models",
    summary: "Fertility Capability Classification Model",
  },
  {
    img: "./pixelcut-export.png",
    name: "Ero&Con",
    file: "erocon.zip",
    version: "4.1",
    revisionDate: "1996",
    size: "535.771 bytes",
    category: "Evaluation Models",
    summary: "Agro-vulnerability Field Evaluation Models",
  },
  {
    img: "./pixelcut-export.png",
    name: "Imp&Res",
    file: "impelero.zip",
    version: "0.2",
    revisionDate: "1999",
    size: "2.393.590 bytes",
    category: "Decision trees / Neural network",
    summary:
      "Water erosion vulnerability, productivity reduction and optimal management strategies model",
  },
  {
    img: "./pixelcut-export.png",
    name: "Spatialization",
    file: "setup.exe",
    version: "1.1",
    revisionDate: "2004",
    size: "1.438.376 bytes",
    category: "ArcView GIS",
    summary: "Integration of MicroLEIS system with ArcView GIS",
  },
];

export default function Software() {
  const [activeTab, setActiveTab] = useState("DBm");
  const [scrollIndex, setScrollIndex] = useState(0);

  // Categorías para las tabs
  const categories = ["DBm", "Evaluation Models", "Classification Models", "Decision trees / Neural network", "ArcView GIS"];

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


  // Filtrar software según la categoría activa
  const filteredSoftware = softwareList.filter(
    (software) => software.category === activeTab
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Software Disponible</h1>
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
          {categories.map((category) => (
            <Tab key={category} label={category} value={category} />
          ))}
        </Tabs>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", position: "relative" }}>
        {filteredSoftware.length > 3 && (
          <IconButton onClick={handleBack} disabled={scrollIndex === 0} sx={{ position: "absolute", left: "-40px" }}>
            <ArrowBackIosNewIcon />
          </IconButton>
        )}
        <Box className={styles.sliderWrapper}>
          <Box
            className={styles.slider}
            sx={{
              transform: `translateX(-${scrollIndex * 350}px)`, // Ajustar según el ancho de la tarjeta
              display: "flex",
              gap: "20px", // Espacio entre tarjetas
              overflow: "hidden", // Oculta el contenido fuera de la vista
              width: "100%", // Usa todo el espacio disponible
            }}
          >
            {filteredSoftware.map((doc, index) => (
              <SoftwareCard key={index} {...doc} />
            ))}
          </Box>
        </Box>
        {filteredSoftware.length > 3 && (
          <IconButton
            onClick={handleNext}
            disabled={scrollIndex + 3 >= filteredSoftware.length}
            sx={{ position: "absolute", right: "-40px" }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        )}
      </Box>
    </div>
  );
}