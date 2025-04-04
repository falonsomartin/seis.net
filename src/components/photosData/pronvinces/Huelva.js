import React, { useState } from "react";

const Huelva = ({ onVolver }) => {
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
    "H-01": ["/map/huelva/hu-01.jpg", "/map/huelva/hu-01p.jpg"],
    "H-02": ["/map/huelva/hu-02.jpg", "/map/huelva/hu-02p.jpg"],
    "H-03": ["/map/huelva/hu-03.jpg", "/map/huelva/hu-03p.jpg"],
    "H-04": ["/map/huelva/hu-04.jpg", "/map/huelva/hu-04p.jpg"],
    "H-05": ["/map/huelva/hu-05.jpg", "/map/huelva/hu-05p.jpg"],
    "H-06": ["/map/huelva/hu-06.jpg", "/map/huelva/hu-06p.jpg"],
    "H-07": ["/map/huelva/hu-07.jpg", "/map/huelva/hu-07p.jpg"],
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
          Volver al Mapa de Huelva
        </button>
      </div>
    );
  }
  return (
    <div style={{ fontFamily: "Verdana", textAlign: "center" }}>
      <h1>Provincia de Huelva</h1>
      <h3>(1 008 500 ha)</h3>

      <div style={{ position: "relative", display: "inline-block" }}>
        {/* Imagen del mapa */}
        <img
          src="/map/huelva.gif"
          alt="Mapa de Huelva"
          width="400"
          height="300"
          style={{ display: "block" }}
        />

        {/* Zonas Interactivas */}
        <div
          title="H-01"
          onClick={() => handleZoneClick("H-01")}
          style={{
            position: "absolute",
            top: "73px",
            left: "18px",
            width: "70px",
            height: "83px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="H-02"
          onClick={() => handleZoneClick("H-02")}
          style={{
            position: "absolute",
            top: "97px",
            left: "89px",
            width: "70px",
            height: "45px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="H-03"
          onClick={() => handleZoneClick("H-03")}
          style={{
            position: "absolute",
            top: "141px",
            left: "129px",
            width: "60px",
            height: "50px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="H-04"
          onClick={() => handleZoneClick("H-04")}
          style={{
            position: "absolute",
            top: "194px",
            left: "119px",
            width: "68px",
            height: "99px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="H-05"
          onClick={() => handleZoneClick("H-05")}
          style={{
            position: "absolute",
            top: "156px",
            left: "34px",
            width: "56px",
            height: "60px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="H-06"
          onClick={() => handleZoneClick("H-06")}
          style={{
            position: "absolute",
            top: "193px",
            left: "7px",
            width: "26px",
            height: "20px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="H-07"
          onClick={() => handleZoneClick("H-07")}
          style={{
            position: "absolute",
            top: "10px",
            left: "71px",
            width: "100px",
            height: "80px",
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

export default Huelva;