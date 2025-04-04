import React from "react";
import { Tabs, Tab, Box, Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";

export default function MapCard({ title, description, imageUrl, downloadUrl }) {
  return (
    <Card
      style={{
        width: 300,
        height: 400, // Fijamos una altura uniforme
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: "auto",
      }}
    >
      <CardMedia
        component="img"
        image={imageUrl}
        alt={title}
        style={{ height: 220, objectFit: "contain" }} // Altura fija para la imagen
      />
      <CardContent style={{ flex: 1, textAlign: "center" }}>
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
      <Box textAlign="center" mb={2}>
        <Button variant="contained" color="primary" href={downloadUrl} target="_blank">
          Descargar
        </Button>
      </Box>
    </Card>
  );
}