import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';

const RetosYPerspectivas = () => {
  return (
    <Box sx={{ p: 4 }}>
      {/* Título Principal */}
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        Retos y Perspectivas
      </Typography>

      {/* Texto Principal */}
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
        Información, conocimiento y concienciación
      </Typography>
      <Typography variant="body1" paragraph>
        Hoy por hoy puede decirse que la preocupación y sensibilización por el medio ambiente ha
        dejado de ser algo transitorio para convertirse en un asunto de constante actualidad e
        importancia en nuestra sociedad.
      </Typography>
      <Typography variant="body1" paragraph>
        La inquietud por la repercusión de las actividades humanas sobre el medio ambiente, tanto de
        manera inmediata, debida principalmente a la ocurrencia cada vez más frecuente de accidentes,
        como de manera indirecta, por la repercusión de los productos y prácticas que se aplican en
        el medio ambiente, han planteado a la sociedad la necesidad de encontrar nuevas soluciones
        que frenen la degradación medioambiental actual. Esta degradación pone en peligro no sólo el
        desarrollo actual de nuestra sociedad, sino el desarrollo futuro de próximas generaciones.
      </Typography>
      <Typography variant="body1" paragraph>
        Esta situación que implica un deterioro en la calidad de vida de las personas, hoy por hoy,
        no puede abordarse de una manera exclusivamente local. Nuestras acciones sobre el medio
        natural, que en principio pueden tener una incidencia localizada, terminan afectando al
        conjunto. Se hace por ello necesario un cambio en ciertas pautas de comportamiento que
        permitan reducir los impactos sobre el medio ambiente y mejorar nuestro modo de vida.
      </Typography>
      <Typography variant="body1" paragraph>
        Las fuentes de energía renovables y limpias, la proliferación de una agricultura más
        ecológica y sostenible, o la reducción en la producción de residuos son retos que deben
        plantearse de una manera más firme si se quieren mantener los recursos naturales de nuestro
        país y de nuestro planeta.
      </Typography>

      {/* Imagen del Gráfico */}
      <Card sx={{ maxWidth: 600, margin: 'auto', mt: 4 }}>
        <CardMedia
          component="img"
          height="300"
          image="/ppal/retos/AGRIECOL.gif" // Reemplaza con la ruta correcta
          alt="Evolución de la agricultura ecológica"
          style={{ objectFit: 'contain' }}
        />
        <CardContent>
          <Typography variant="h6" component="div" gutterBottom sx={{ textAlign: 'center' }}>
            Evolución de la Agricultura Ecológica
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RetosYPerspectivas;