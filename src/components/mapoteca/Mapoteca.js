import React, { useState } from "react";
import { Tabs, Tab, Box, Grid, Typography } from "@mui/material";
import styles from "./Mapoteca.module.css";
import MapCard from "./MapCard";

export default function Mapoteca() {
  const [activeTab, setActiveTab] = useState("espana");
  const [tabValue, setTabValue] = useState(0);
  const [currentTab, setCurrentTab] = React.useState(0);

  const handleChange = (_, newValue) => {
    setCurrentTab(newValue);
  };
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const mapsData = [
    {
      tab: "España",
      maps: [
        { title: "Mapa Administrativo", description: "Mapa administrativo de España", imageUrl: "/cartograph-esp/admp.jpg", downloadUrl: "#" },
        { title: "Mapa De Topografía", description: "Mapa topográfico de España", imageUrl: "/cartograph-esp/topgrp.jpg", downloadUrl: "#" },
        { title: "Mapa De Geología", description: "Mapa geológico de España", imageUrl: "/cartograph-esp/geop.jpg", downloadUrl: "#" },
        { title: "Mapa De Pendientes", description: "Mapa de pendientes en España", imageUrl: "/cartograph-esp/penp.jpg", downloadUrl: "#" },
        { title: "Mapa De Suelos", description: "Mapa de suelos en España", imageUrl: "/cartograph-esp/suep.jpg", downloadUrl: "#" },
        { title: "Mapa De Uso Actual", description: "Uso actual del suelo en España", imageUrl: "/cartograph-esp/usop.jpg", downloadUrl: "#" },
      ],
    },
    {
      tab: "Andalucía",
      maps: [
        { title: "Clases Litológicas", description: "Mapa de clases litológicas en Andalucía", imageUrl: "/cartograph-and/claseslitol.jpg", downloadUrl: "/cartograph-and/claseslitol.png" },
        { title: "Materia Orgánica (Todo el Perfil)", description: "Contenido total de materia orgánica", imageUrl: "/cartograph-and/matorgantodpefil.jpg", downloadUrl: "/cartograph-and/matorgantodperfil.png" },
        { title: "Materia Orgánica 0-25 cm", description: "Contenido de materia orgánica entre 0-25 cm", imageUrl: "/cartograph-and/matorgan0-25.jpg", downloadUrl: "/cartograph-and/matorgan0-25.png" },
        { title: "Materia Orgánica 25-f cm", description: "Contenido de materia orgánica entre 25-f cm", imageUrl: "/cartograph-and/matorgan25-f.jpg", downloadUrl: "/cartograph-and/matorgan25-f.png" },

        // Reacción pH
        { title: "Reacción pH (Todo el Perfil)", description: "Reacción pH en toda Andalucía", imageUrl: "/cartograph-and/phtodperfil.jpg", downloadUrl: "/cartograph-and/phtodperfil.png" },
        { title: "Reacción pH 0-25 cm", description: "Reacción pH en capa 0-25 cm", imageUrl: "/cartograph-and/ph0-25.jpg", downloadUrl: "/cartograph-and/ph0-25.png" },
        { title: "Reacción pH 25-f cm", description: "Reacción pH en capa 25-f cm", imageUrl: "/cartograph-and/ph25-f.jpg", downloadUrl: "/cartograph-and/ph25-f.png" },

        // Granulometría (Limo, Arena, Arcilla)
        { title: "Granulometría en Arcilla (Todo el Perfil)", description: "Contenido de arcilla total", imageUrl: "/cartograph-and/granulomtodperfil.jpg", downloadUrl: "/cartograph-and/granulomtodperfil.jpg" },
        { title: "Granulometría en Arcilla 0-25 cm", description: "Contenido de arcilla 0-25 cm", imageUrl: "/cartograph-and/granulom0-25.jpg", downloadUrl: "/cartograph-and/granulom0-25.jpg" },
        { title: "Granulometría en Arcilla 25-f cm", description: "Contenido de arcilla 25-f cm", imageUrl: "/cartograph-and/granulom25-f.jpg", downloadUrl: "/cartograph-and/granulom25-f.jpg" },

        { title: "Granulometría en Limo (Todo el Perfil)", description: "Contenido de limo total", imageUrl: "/cartograph-and/limotodperfil.jpg", downloadUrl: "/cartograph-and/limotodperfil.jpg" },
        { title: "Granulometría en Limo 0-25 cm", description: "Contenido de limo 0-25 cm", imageUrl: "/cartograph-and/limo0-25.jpg", downloadUrl: "/cartograph-and/limo0-25.jpg" },
        { title: "Granulometría en Limo 25-f cm", description: "Contenido de limo 25-f cm", imageUrl: "/cartograph-and/limo25-f.jpg", downloadUrl: "/cartograph-and/limo25-f.jpg" },

        { title: "Granulometría en Arena (Todo el Perfil)", description: "Contenido de arena total", imageUrl: "/cartograph-and/arenatodperfil.jpg", downloadUrl: "/cartograph-and/arenatodperfil.jpg" },
        { title: "Granulometría en Arena 0-25 cm", description: "Contenido de arena 0-25 cm", imageUrl: "/cartograph-and/arena0-25.jpg", downloadUrl: "/cartograph-and/arena0-25.jpg" },
        { title: "Granulometría en Arena 25-f cm", description: "Contenido de arena 25-f cm", imageUrl: "/cartograph-and/arena25-f.jpg", downloadUrl: "/cartograph-and/arena25-f.jpg" },

        // Retención de agua
        { title: "Capacidad Retención Agua (Todo el Perfil)", description: "Capacidad de retención de agua total", imageUrl: "/cartograph-and/retaguatodperfil.jpg", downloadUrl: "/cartograph-and/retaguatodperfil.jpg" },
        { title: "Capacidad Retención Agua 0-25 cm", description: "Retención de agua en capa 0-25 cm", imageUrl: "/cartograph-and/retagua0-25.jpg", downloadUrl: "/cartograph-and/retagua0-25.jpg" },
        { title: "Capacidad Retención Agua 25-f cm", description: "Retención de agua en capa 25-f cm", imageUrl: "/cartograph-and/retagua25-f.jpg", downloadUrl: "/cartograph-and/retagua25-f.jpg" },

        // Punto de marchitez
        { title: "Capacidad Retención Agua Punto Marchitez (Todo el Perfil)", description: "Punto de marchitez total", imageUrl: "/cartograph-and/marchiteztodperfil.jpg", downloadUrl: "/cartograph-and/marchiteztodperfil.jpg" },
        { title: "Punto Marchitez 0-25 cm", description: "Capacidad de retención agua punto de marchitez (0-25 cm)", imageUrl: "/cartograph-and/marchitez0-25.jpg", downloadUrl: "/cartograph-and/marchitez0-25.jpg" },
        { title: "Punto Marchitez 25-f cm", description: "Capacidad de retención agua punto de marchitez (25-f cm)", imageUrl: "/cartograph-and/marchitez25-f.jpg", downloadUrl: "/cartograph-and/marchitez25-f.jpg" },

        // Porosidad
        { title: "Porosidad (Todo el Perfil)", description: "Porosidad densidad aparente", imageUrl: "/cartograph-and/porosidadtodperfil.jpg", downloadUrl: "/cartograph-and/porosidadtodperfil.jpg" },
        { title: "Porosidad 0-25 cm", description: "Porosidad densidad aparente 0-25 cm", imageUrl: "/cartograph-and/porosidad0-25.jpg", downloadUrl: "/cartograph-and/porosidad0-25.jpg" },
        { title: "Porosidad 25-f cm", description: "Porosidad densidad aparente 25-f cm", imageUrl: "/cartograph-and/porosidad25-f.jpg", downloadUrl: "/cartograph-and/porosidad25-f.jpg" },

        // Perfiles de Suelo
        { title: "Perfiles de Suelo", description: "Situación geográfica de perfiles de suelo", imageUrl: "/cartograph-and/perfilessuelo.jpg", downloadUrl: "/cartograph-and/perfilessuelo.jpg" },

      ],
    },
    {
      tab: "Mapa CSIC-IARA",
      maps: [
        { title: "Mapa CSIC-IARA", description: "Mapa de suelos de Andalucía (CSIC-IARA)", imageUrl: "/csic/mapa-csic-iara.jpg", downloadUrl: "#" },
      ],
    },
  ];
  const espMaps = [
    {
      title: "Mapa Administrativo",
      description: "Mapa administrativo de España",
      imgSrc: "/cartograph-esp/admp.jpg",
      downloadUrl: "/cartograph-esp/admp.jpg",
    },
    {
      title: "Mapa de Topografía",
      description: "Mapa topográfico de España",
      imgSrc: "/cartograph-esp/topgrp.jpg",
      downloadUrl: "/cartograph-esp/topgrp.jpg",
    },
    {
      title: "Mapa de Geología",
      description: "Mapa geológico de España",
      imgSrc: "/cartograph-esp/geop.jpg",
      downloadUrl: "/cartograph-esp/geop.jpg",
    },
    {
      title: "Mapa de Pendientes",
      description: "Mapa de pendientes en España",
      imgSrc: "/cartograph-esp/penp.jpg",
      downloadUrl: "/cartograph-esp/penp.jpg",
    },
    {
      title: "Mapa de Suelos",
      description: "Mapa de suelos en España",
      imgSrc: "/cartograph-esp/suep.jpg",
      downloadUrl: "/cartograph-esp/suep.jpg",
    },
    {
      title: "Mapa de Uso Actual",
      description: "Uso actual del suelo en España",
      imgSrc: "/cartograph-esp/usop.jpg",
      downloadUrl: "/cartograph-esp/usop.jpg",
    },
  ];

  const andMaps = [
    {
      title: "Clases Litológicas",
      description: "Mapa de clases litológicas en Andalucía",
      imgSrc: "/cartograph-and/claseslitol.jpg",
      downloadUrl: "/cartograph-and/claseslitol.jpg",
    },
    {
      title: "Mapa de Materia Orgánica",
      description: "Contenido total de materia orgánica",
      imgSrc: "/cartograph-and/matorgantodperfil.jpg",
      downloadUrl: "/cartograph-and/matorgantodperfil.jpg",
    },
    {
      title: "Mapa de Reacción pH",
      description: "Reacción pH en toda Andalucía",
      imgSrc: "/cartograph-and/phtodperfil.jpg",
      downloadUrl: "/cartograph-and/phtodperfil.jpg",
    },
    {
      title: "Mapa de Porosidad",
      description: "Densidad aparente de suelos",
      imgSrc: "/cartograph-and/porosidadtodperfil.jpg",
      downloadUrl: "/cartograph-and/porosidadtodperfil.jpg",
    },
  ];

  const csicMap = [
    {
      title: "Mapa CSIC-IARA",
      description: "Mapa de suelos de Andalucía (CSIC-IARA)",
      imgSrc: "/csic/mapa-csic-iara.jpg",
      downloadUrl: "/csic/mapa-csic-iara.jpg",
    },
  ];

  const renderMaps = (maps) => (
    <Grid container spacing={3}>
      {maps.map((map, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <MapCard {...map} />
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box>
      <Box mb={3} textAlign="center">
        <Typography variant="h3" style={{ fontWeight: "bold" }}>
          Mapoteca
        </Typography>
      </Box>
      <Tabs value={currentTab} onChange={handleChange} centered>
        {mapsData.map((section, index) => (
          <Tab key={index} label={`CARTOGRAFÍA DE ${section.tab.toUpperCase()}`} />
        ))}
      </Tabs>
      <Box mt={4}>
        {mapsData.map((section, index) => (
          <Box
            role="tabpanel"
            hidden={currentTab !== index}
            key={index}
            style={{ display: currentTab === index ? "block" : "none" }}
          >
            <Grid container spacing={4} justifyContent="center">
              {section.maps.map((map, idx) => (
                <Grid item xs={12} sm={6} md={3} key={idx}>
                  <MapCard
                    title={map.title}
                    description={map.description}
                    imageUrl={map.imageUrl}
                    downloadUrl={map.downloadUrl}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
    </Box>
  );
}