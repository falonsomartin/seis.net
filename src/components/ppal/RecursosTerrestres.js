import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Button, Divider } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';

const RecursosTerrestres = () => {
  const enlaces = [
    { texto: 'SUELOS', url: '#' },
    { texto: 'DEGRADACIÓN DE SUELOS', url: '#' },
    { texto: 'CUBIERTA DE SUELOS', url: '#' },
    { texto: 'USO DEL SUELO', url: '#' },
    { texto: 'FISIOGRAFÍA Y SISTEMAS AGROECOLÓGICOS', url: '#' },
  ];

  return (
    <Box p={3}>
      {/* Título principal */}
      <Typography variant="h4" align="center" gutterBottom>
        Recursos Terrestres
      </Typography>
      <Divider />

      {/* Enlaces a secciones */}
      <Box my={2}>
        <List>
          {enlaces.map((enlace, index) => (
            <ListItem button component="a" href={enlace.url} key={index}>
              <ListItemIcon>
                <LinkIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={enlace.texto} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Contenido principal */}
      <Typography variant="body1" paragraph>
        El suelo es el nexo natural entre el ámbito orgánico y el ámbito inorgánico, el contacto entre la biósfera y la
        litosfera. El suelo actúa no sólo como soporte y despensa de la planta, sino también como intermediario de la
        atmósfera y el clima, cuyos efectos sobre aquella incrementa o atenúa para, de este modo, hacer viable su desarrollo.
      </Typography>
      <Typography variant="body1" paragraph>
        Así, un suelo arenoso y permeable favorece la aridez del clima, salvándose el exceso de agua en un clima lluvioso;
        un suelo arcilloso en cambio, conserva mejor la humedad que uno seco. Se comprende, pues, que el suelo deba entenderse
        como un regulador intermedio de los flujos de materia y energía que determinan toda actividad agrícola, forestal o ganadera,
        es decir, muchas necesidades humanas dependen de los suelos, un recurso que debemos conservar.
      </Typography>

      {/* Fuente */}
      <Typography variant="caption" display="block" align="right" gutterBottom>
        <i>Fuente: ING, 1992</i>
      </Typography>

      {/* Botones adicionales */}
      <Box display="flex" justifyContent="center" mt={4} gap={2}>
        <Button variant="contained" color="warning" href="#">
          Puntos Críticos
        </Button>
        <Button variant="contained" color="success" href="#">
          Puntos Sobresalientes
        </Button>
      </Box>
    </Box>
  );
};

export default RecursosTerrestres;