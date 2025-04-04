import React, { useState } from "react";

const Cadiz = ({ onVolver }) => {
  const [selectedZone, setSelectedZone] = useState(null);

  // Función para manejar clic en cada zona
  const handleZoneClick = (zoneCode) => {
    setSelectedZone(zoneCode);
  };

  // Función para volver al mapa de la provincia
  const handleBackToMap = () => {
    setSelectedZone(null);
  };

  const zoneImages = {
    "CA-01": ["/map/cadiz/ca-01.jpg", "/map/cadiz/ca-01p.jpg"],
    "CA-02": ["/map/cadiz/ca-02.jpg", "/map/cadiz/ca-02p.jpg"],
    "CA-03": ["/map/cadiz/ca-03.jpg", "/map/cadiz/ca-03p.jpg"],
    "CA-04": ["/map/cadiz/ca-04.jpg", "/map/cadiz/ca-04p.jpg"],
    "CA-05": ["/map/cadiz/ca-05.jpg", "/map/cadiz/ca-05p.jpg"],
    "CA-06": ["/map/cadiz/ca-06.jpg", "/map/cadiz/ca-06p.jpg"],
  };
  // Si una zona está seleccionada, mostrar las imágenes
  if (selectedZone) {
    return (
      <div style={{ textAlign: "center", fontFamily: "Verdana" }}>
        <h1>Imágenes de la Zona {selectedZone}</h1>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
          {zoneImages[selectedZone].map((image, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <img
                src={image}
                alt={`Zona ${selectedZone}`}
                style={{ width: "300px", height: "200px", objectFit: "cover", border: "1px solid #ddd" }}
              />
              <p style={{ marginTop: "10px", fontFamily: "Verdana", fontSize: "14px", fontWeight: "bold" }}>
                {index === 0 ? "Soil Profile" : "Soil Landscape"}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={handleBackToMap}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#ddd",
            border: "none",
            cursor: "pointer",
          }}
        >
          Volver al Mapa de Cádiz
        </button>
      </div>
    );
  }
  return (
    <div style={{ fontFamily: "Verdana", textAlign: "center" }}>
      <h1>Provincia de Cádiz</h1>
      <h3>(738 500 ha)</h3>

      <div style={{ position: "relative", display: "inline-block" }}>
        {/* Imagen del mapa */}
        <img
          src="/map/cadiz.gif"
          alt="Mapa de Cádiz"
          width="400"
          height="300"
          style={{ display: "block" }}
        />

        {/* Zonas ajustadas */}
        <div
          onClick={() => handleZoneClick("CA-01")}
          style={{
            position: "absolute",
            top: "65px",
            left: "115px",
            width: "50px",
            height: "50px",
            cursor: "pointer",
          }}
          title="CA-01"
        ></div>

        <div
          onClick={() => handleZoneClick("CA-02")}
          style={{
            position: "absolute",
            top: "200px",
            left: "225px",
            width: "55px",
            height: "55px",
            cursor: "pointer",
          }}
          title="CA-02"
        ></div>

        <div
          onClick={() => handleZoneClick("CA-03")}
          style={{
            position: "absolute",
            top: "170px",
            left: "50px",
            width: "70px",
            height: "50px",
            cursor: "pointer",
          }}
          title="CA-03"
        ></div>

        <div
          onClick={() => handleZoneClick("CA-04")}
          style={{
            position: "absolute",
            top: "180px",
            left: "135px",
            width: "75px",
            height: "50px",
            cursor: "pointer",
          }}
          title="CA-04"
        ></div>

        <div
          onClick={() => handleZoneClick("CA-05")}
          style={{
            position: "absolute",
            top: "70px",
            left: "60px",
            width: "60px",
            height: "60px",
            cursor: "pointer",
          }}
          title="CA-05"
        ></div>

        <div
          onClick={() => handleZoneClick("CA-06")}
          style={{
            position: "absolute",
            top: "35px",
            left: "215px",
            width: "70px",
            height: "50px",
            cursor: "pointer",
          }}
          title="CA-06"
        ></div>
      </div>

      {/* Botón de Volver */}
      <button
        onClick={onVolver}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Volver al Mapa General
      </button>
    </div>
  );
};

export default Cadiz;