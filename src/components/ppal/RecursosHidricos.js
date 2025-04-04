import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Button, Divider } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';

const RecursosHidricos = () => {
  const enlaces = [
    { texto: 'HIDROGRAFÍA', url: '#' },
    { texto: 'RIEGO Y DRENAJE', url: '#' },
  ];

  return (
    <Box p={3}>
      {/* Título principal */}
      <Typography variant="h4" align="center" gutterBottom>
        Recursos Hídricos
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
        Casi todo el litoral mediterráneo español es deficitario en recursos hídricos, mientras que en la España húmeda
        existe un exceso de recursos. Así, el superávit de la vertiente atlántica (más de 25.000 hectómetros cúbicos al año)
        contrasta con el déficit de la vertiente mediterránea (supera los 5.000 hectómetros cúbicos).
      </Typography>
      <Typography variant="body1" paragraph>
        La política de construcción de embalses y pantanos, seguida desde principios de siglo, ha tenido como objetivos
        regular el agua de los ríos (con lo que se evitan avenidas catastróficas) y aprovechar los saltos de agua para
        producir energía eléctrica. Sin embargo, el desequilibrio de los recursos de la España húmeda hasta la España seca
        se encuentra en sus etapas iniciales.
      </Typography>

      {/* Botones interactivos */}
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

export default RecursosHidricos;