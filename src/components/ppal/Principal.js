import React, { useState } from "react";
import { Tabs, Tab, Box, Typography, Grid, Button } from "@mui/material";
import VistaGlobal from "./VistaGlobal";
import RecursosTerrestres from "./RecursosTerrestres";
import RecursosHidricos from "./RecursosHidricos";
import NutrientesDePlantas from "./NutrientesdePlantas";
import PuntosCriticos from "./PuntosCriticos";
import RetosYPerspectivas from "./RetosyPerspectivas";
import AtlasDigital from "./AtlasDigital";

const Principal = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box>
      {/* Título */}
      <Box textAlign="center" mt={2} mb={2}>
        <Typography variant="h4" gutterBottom>
          Primera aproximación a los suelos, aguas y nutrientes a nivel nacional
        </Typography>

      </Box>

      {/* Tabs Principales */}
      <Tabs value={activeTab} onChange={handleTabChange} centered>
        <Tab label="Visión General" />
        <Tab label="Recursos Terrestres" />
        <Tab label="Recursos Hídricos" />
        <Tab label="Nutrientes de Plantas" />
        <Tab label="Puntos Críticos" />
        <Tab label="Retos y Perspectivas" />
      </Tabs>

      {/* Contenido de los Tabs */}
      <Box p={3}>
        {activeTab === 0 && <VistaGlobal />}
        {activeTab === 1 && <RecursosTerrestres />}
        {activeTab === 2 && <RecursosHidricos />}
        {activeTab === 3 && <NutrientesDePlantas />}
        {activeTab === 4 && <PuntosCriticos />}
        {activeTab === 5 && <AtlasDigital/>}
      </Box>


    </Box>
  );
};

export default Principal;