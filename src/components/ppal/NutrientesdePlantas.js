import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

const NutrientesDePlantas = () => {
  const images = [
    {
      src: '/ppal/nutrientes/INTFERTI.gif', // Consumo de fertilizantes
      title: 'Consumo de Fertilizantes (kg/ha) - 1992',
      description: 'Mapa que muestra la intensidad del consumo de fertilizantes en 1992.',
    },
    {
      src: '/ppal/nutrientes/INTFITO.gif', // Tratamientos fitosanitarios
      title: 'Tratamientos Fitosanitarios (kg/ha cultivada) - 1989',
      description: 'Distribución de tratamientos fitosanitarios en 1989.',
    },
    {
      src: '/ppal/nutrientes/GASFITO.gif', // Gasto en productos fitosanitarios
      title: 'Gasto en Productos Fitosanitarios (pesetas/ha) - 1991',
      description: 'Mapa del gasto en productos fitosanitarios por hectárea en 1991.',
    },
    {
      src: '/ppal/nutrientes/FERTFITO.gif', // Evolución del consumo
      title: 'Evolución del Consumo (1975 - 1991)',
      description: 'Gráfico de la evolución del consumo de fertilizantes y fitosanitarios.',
    },
  ];

  return (
    <Box sx={{ p: 4 }}>
      {/* Título Principal */}
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        Nutrientes de Plantas
      </Typography>

      {/* Descripción */}
      <Typography variant="body1" paragraph>
        El caso de los fertilizantes en 1997 ascendió a <strong>5.340.432 toneladas</strong>, con un{' '}
        <strong>4,6% menos</strong> que el año anterior y un <strong>14,7% más</strong> que en 1995.
        Desglose anual:
      </Typography>
      <ul>
        <li>Nitrógeno (N): <strong>1.041.857 toneladas</strong></li>
        <li>Fósforo (P₂O₅): <strong>559.212 toneladas</strong></li>
        <li>Óxido de potasio (K₂O): <strong>479.410 toneladas</strong></li>
      </ul>
      <Typography variant="body1" paragraph>
        Además, las cifras muestran la sensibilidad de los cultivos al régimen pluviométrico, con
        mayor consumo en áreas de cultivos de verano y un aumento en el uso de fitosanitarios desde
        los años 80.
      </Typography>

      {/* Imágenes en Grid */}
      <Grid container spacing={3} justifyContent="center">
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Card sx={{ maxWidth: 500, margin: 'auto' }}>
              <CardMedia
                component="img"
                height="250"
                image={image.src}
                alt={image.title}
                style={{ objectFit: 'contain' }}
              />
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {image.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {image.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NutrientesDePlantas;