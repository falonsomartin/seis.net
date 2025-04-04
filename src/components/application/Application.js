import React, { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import ApplicationForm from "./forms/ApplicationForm"; // Componente de formulario
import ApplicationResults from "./results/ApplicationResults"; // Componente de resultados

export default function Application() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [formData, setFormData] = useState({});
  const [resultData, setResultData] = useState(null);

  // Modelos disponibles
  const models = [
    "Terraza",
    "Cervatana",
    "Almagra",
    "Albero",
    "Sierra",
    "Marisma",
    "Raizal",
    "Pantanal",
    "Arenal",
    "Alcor",
    "Aljarafe",
    "ImpelERO",
  ];

  // Manejar el cambio de pestaña
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    setResultData(null); // Limpiar resultados al cambiar de modelo
  };

  // Manejar el envío del formulario
  const handleFormSubmit = (data) => {
    setFormData(data);
    setResultData(data);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
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
          value={selectedTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="Model Tabs"
        >
          {models.map((model, index) => (
            <Tab key={index} label={model} />
          ))}
        </Tabs>
      </Box>


      {/* Mostrar contenido según la pestaña seleccionada */}
      <Box sx={{ padding: 3 }}>


        {/* Formulario */}
        <ApplicationForm
          model={models[selectedTab]}
          onSubmit={handleFormSubmit}
        />

        {/* Resultados */}
        {resultData && (
          <ApplicationResults
            model={models[selectedTab]}
            result={resultData.resultado}
          />
        )}
      </Box>
    </Box>
  );
}
