import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import * as XLSX from "xlsx";

const OtherData = () => {
  const [estacionesData, setEstacionesData] = useState([]);
  const [mensualData, setMensualData] = useState([]);
  const [selectedEstacion, setSelectedEstacion] = useState(null);
  const [filteredMensualData, setFilteredMensualData] = useState([]);

  // Cargar datos desde los Excel
  const loadData = async () => {
    try {
      const estacionesResponse = await fetch("/cdbm/estaciones.xlsx");
      const estacionesBuffer = await estacionesResponse.arrayBuffer();
      const estacionesWorkbook = XLSX.read(estacionesBuffer, { type: "array" });
      const estacionesSheet = estacionesWorkbook.Sheets[estacionesWorkbook.SheetNames[0]];
      const estacionesJSON = XLSX.utils.sheet_to_json(estacionesSheet);
      setEstacionesData(estacionesJSON);

      const mensualResponse = await fetch("/cdbm/mensual.xlsx");
      const mensualBuffer = await mensualResponse.arrayBuffer();
      const mensualWorkbook = XLSX.read(mensualBuffer, { type: "array" });
      const mensualSheet = mensualWorkbook.Sheets[mensualWorkbook.SheetNames[0]];
      const mensualJSON = XLSX.utils.sheet_to_json(mensualSheet);
      setMensualData(mensualJSON);
    } catch (error) {
      console.error("Error al cargar los datos:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (selectedEstacion) {
      const filtered = mensualData.filter(
        (row) => row.REF.trim().toUpperCase() === selectedEstacion.trim().toUpperCase()
      );
      setFilteredMensualData(filtered);
    } else {
      setFilteredMensualData([]);
    }
  }, [selectedEstacion, mensualData]);

  const estacionesColumns = [
    { field: "REF", headerName: "Referencia", flex: 1 },
    { field: "NOMBRE", headerName: "Nombre", flex: 2 },
    { field: "LATITUD", headerName: "Latitud", flex: 1 },
    { field: "LONGITUD", headerName: "Longitud", flex: 1 },
    { field: "ALTITUD", headerName: "Altitud", flex: 1 },
  ];

  const mensualColumns = [
    { field: "ANNO", headerName: "Año", flex: 1 },
    { field: "MES", headerName: "Mes", flex: 1 },
    { field: "TMED", headerName: "T. Media", flex: 1 },
    { field: "TMAX", headerName: "T. Máxima", flex: 1 },
    { field: "TMIN", headerName: "T. Mínima", flex: 1 },
    { field: "PREC", headerName: "Precipitación", flex: 1 },
    { field: "PRECMAX", headerName: "Precip. Máxima", flex: 1 },
  ];

  const exportEstacionesToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(estacionesData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Estaciones");
    XLSX.writeFile(workbook, "Estaciones.xlsx");
  };

  const exportMensualToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredMensualData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Datos Mensuales");
    XLSX.writeFile(workbook, `Mensual_${selectedEstacion}.xlsx`);
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        CDBm - Selección de Datos Agro-Climáticos de Andalucía
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">Estaciones</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={exportEstacionesToExcel}
            >
              Exportar Estaciones a Excel
            </Button>
          </Box>
          &nbsp;&nbsp;
          <DataGrid
            rows={estacionesData}
            columns={estacionesColumns}
            getRowId={(row) => row.REF}
            pageSize={10} // Set default to 10 rows per page
            rowsPerPageOptions={[10]} // Only allow 10 rows per page
            onRowClick={(params) => setSelectedEstacion(params.row.REF)}
            autoHeight
          />
        </Grid>

        {selectedEstacion && (
          <Grid item xs={12}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h6">
                Datos Climáticos para la Estación: {selectedEstacion}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={exportMensualToExcel}
              >
                Exportar Datos Mensuales a Excel
              </Button>
            </Box>
            &nbsp;&nbsp;
            <DataGrid
              rows={filteredMensualData}
              columns={mensualColumns}
              getRowId={(row) => `${row.REF}-${row.ANNO}-${row.MES}`}
              pageSize={10} // Set default to 10 rows per page
              rowsPerPageOptions={[10]} // Only allow 10 rows per page
              autoHeight
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default OtherData;