import React from 'react';
import { Box, Typography, Divider, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const VistaGlobal = () => {
  // Datos de la tabla
  const datosTerritoriales = [
    { comunidad: 'Andalucía', capital: 'Sevilla', provincias: 8, superficie: '87,600' },
    { comunidad: 'Aragón', capital: 'Zaragoza', provincias: 3, superficie: '47,720' },
    { comunidad: 'Asturias (Principado de)', capital: 'Oviedo', provincias: 1, superficie: '10,604' },
    { comunidad: 'Baleares (Islas)', capital: 'Palma de Mallorca', provincias: 1, superficie: '4,992' },
    { comunidad: 'Canarias (Islas)', capital: 'Sta. Cruz de Tenerife / Las Palmas', provincias: 2, superficie: '7,447' },
    { comunidad: 'Cantabria', capital: 'Santander', provincias: 1, superficie: '5,321' },
    { comunidad: 'Castilla y León', capital: 'Valladolid', provincias: 10, superficie: '94,224' },
    { comunidad: 'Castilla - La Mancha', capital: 'Toledo', provincias: 5, superficie: '79,642' },
    { comunidad: 'Cataluña', capital: 'Barcelona', provincias: 4, superficie: '32,113' },
    { comunidad: 'Comunidad Valenciana', capital: 'Valencia', provincias: 3, superficie: '23,255' },
    { comunidad: 'Extremadura', capital: 'Mérida', provincias: 2, superficie: '41,635' },
    { comunidad: 'Galicia', capital: 'Santiago de Compostela', provincias: 4, superficie: '29,574' },
    { comunidad: 'Madrid (Comunidad de)', capital: 'Madrid', provincias: 1, superficie: '8,028' },
    { comunidad: 'Murcia (Región de)', capital: 'Murcia', provincias: 1, superficie: '11,314' },
    { comunidad: 'Navarra (Comunidad Foral)', capital: 'Pamplona', provincias: 1, superficie: '10,391' },
    { comunidad: 'País Vasco', capital: 'Vitoria', provincias: 3, superficie: '7,235' },
    { comunidad: 'Rioja (La)', capital: 'Logroño', provincias: 1, superficie: '5,045' },
    { comunidad: 'Ceuta', capital: 'Ceuta', provincias: 1, superficie: '19' },
    { comunidad: 'Melilla', capital: 'Melilla', provincias: 1, superficie: '13' },
    { comunidad: 'España', capital: 'Madrid', provincias: 53, superficie: '505,992' },
  ];

  return (
    <Box p={3}>
      {/* Título principal */}
      <Typography variant="h4" align="center" gutterBottom>
        Vista Global
      </Typography>
      <Divider />

      {/* Texto principal */}
      <Box my={3}>
        <Typography variant="body1" paragraph>
          El Reino de España (505.992 km²) está situado en la península ibérica, en el suroeste del continente europeo.
          Además del territorio peninsular, comprende las islas Baleares, las ciudades de Ceuta y Melilla en el Norte de
          África y las islas Canarias en el Océano Atlántico.
        </Typography>
        <Typography variant="body1" paragraph>
          A grandes rasgos se pueden distinguir cuatro climas: el atlántico, el mediterráneo con inviernos suaves, el
          continental y el de montaña. Las Islas Canarias disfrutan de un clima subtropical.
        </Typography>
      </Box>

      {/* Imágenes */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <img
            src="/ppal/vision/localizacEsp.gif"
            alt="Localización de España"
            style={{ width: '100%', height: '300px', objectFit: 'contain', borderRadius: 8 }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="/ppal/vision/ccaa.gif"
            alt="Comunidades Autónomas"
            style={{ width: '100%', height: '300px', objectFit: 'contain', borderRadius: 8 }}
          />
        </Grid>
      </Grid>

      {/* Tabla de organización territorial */}
      <Box mt={5}>
        <Typography variant="h5" align="center" gutterBottom>
          Organización Territorial
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Comunidad Autónoma</TableCell>
                <TableCell>Capital</TableCell>
                <TableCell>Provincias</TableCell>
                <TableCell>Superficie (km²)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {datosTerritoriales.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.comunidad}</TableCell>
                  <TableCell>{row.capital}</TableCell>
                  <TableCell>{row.provincias}</TableCell>
                  <TableCell>{row.superficie}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default VistaGlobal;