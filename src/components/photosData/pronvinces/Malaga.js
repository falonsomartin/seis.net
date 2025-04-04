import React, { useState } from "react";

const Malaga = ({ onVolver }) => {
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
    "MA-01": ["/map/malaga/ma-01.jpg", "/map/malaga/ma-01p.jpg"],
    "MA-02": ["/map/malaga/ma-02.jpg", "/map/malaga/ma-02p.jpg"],
    "MA-03": ["/map/malaga/ma-03.jpg", "/map/malaga/ma-03p.jpg"],
    "MA-04": ["/map/malaga/ma-04.jpg", "/map/malaga/ma-04p.jpg"],
    "MA-05": ["/map/malaga/ma-05.jpg", "/map/malaga/ma-05p.jpg"],
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
          Volver al Mapa de Málaga
        </button>
      </div>
    );
  }
  return (
    <div style={{ fontFamily: "Verdana", textAlign: "center" }}>
      <h1>Provincia de Málaga</h1>
      <h3>(724 000 ha)</h3>

      <div style={{ position: "relative", display: "inline-block" }}>
        {/* Imagen del mapa */}
        <img
          src="/map/malaga.gif"
          alt="Mapa de Málaga"
          width="400"
          height="250"
          style={{ display: "block" }}
        />

        {/* Zonas Interactivas */}
        <div
          title="MA-01"
          onClick={() => handleZoneClick("MA-01")}
          style={{
            position: "absolute",
            top: "28px",
            left: "130px",
            width: "132px",
            height: "70px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="MA-02"
          onClick={() => handleZoneClick("MA-02")}
          style={{
            position: "absolute",
            top: "100px",
            left: "271px",
            width: "80px",
            height: "50px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="MA-03"
          onClick={() => handleZoneClick("MA-03")}
          style={{
            position: "absolute",
            top: "163px",
            left: "111px",
            width: "120px",
            height: "44px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="MA-04"
          onClick={() => handleZoneClick("MA-04")}
          style={{
            position: "absolute",
            top: "100px",
            left: "153px",
            width: "100px",
            height: "60px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="MA-05"
          onClick={() => handleZoneClick("MA-05")}
          style={{
            position: "absolute",
            top: "105px",
            left: "69px",
            width: "80px",
            height: "56px",
            cursor: "pointer",
          }}
        ></div>
      </div>

      {/* Botón de Volver */}
      <button
        onClick={onVolver}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "rgb(221, 221, 221)",
          border: "none",
          cursor: "pointer",
        }}
      >
        Volver al Mapa General
      </button>
    </div>
  );
};

export default Malaga;