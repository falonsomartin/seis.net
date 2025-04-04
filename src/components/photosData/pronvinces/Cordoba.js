import React, { useState } from "react";

const Cordoba = ({ onVolver }) => {
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
    "CO-01": ["/map/cordoba/ca-01.jpg", "/map/cordoba/ca-01p.jpg"],
    "CO-02": ["/map/cordoba/ca-02.jpg", "/map/cordoba/ca-02p.jpg"],
    "CO-03": ["/map/cordoba/ca-03.jpg", "/map/cordoba/ca-03p.jpg"],
    "CO-04": ["/map/cordoba/ca-04.jpg", "/map/cordoba/ca-04p.jpg"],
    "CO-05": ["/map/cordoba/ca-05.jpg", "/map/cordoba/ca-05p.jpg"],
    "CO-06": ["/map/cordoba/ca-06.jpg", "/map/cordoba/ca-06p.jpg"],
    "CO-07": ["/map/cordoba/ca-07.jpg", "/map/cordoba/ca-07p.jpg"],
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
          Volver al Mapa de Córdoba
        </button>
      </div>
    );
  }
  return (
    <div style={{ fontFamily: "Verdana", textAlign: "center" }}>
      <h1>Provincia de Córdoba</h1>
      <h3>(1 371 800 ha)</h3>

      <div style={{ position: "relative", display: "inline-block" }}>
        {/* Imagen del mapa */}
        <img
          src="/map/cordoba.gif"
          alt="Mapa de Córdoba"
          width="400"
          height="300"
          style={{ display: "block" }}
        />

        {/* Zonas Interactivas */}
        <div
          title="CO-01"
          onClick={() => handleZoneClick("CO-01")}
          style={{
            position: "absolute",
            top: "211px",
            left: "117px",
            width: "51px",
            height: "77px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="CO-02"
          onClick={() => handleZoneClick("CO-02")}
          style={{
            position: "absolute",
            top: "181px",
            left: "124px",
            width: "64px",
            height: "20px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="CO-03"
          onClick={() => handleZoneClick("CO-03")}
          style={{
            position: "absolute",
            top: "140px",
            left: "18px",
            width: "103px",
            height: "29px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="CO-04"
          onClick={() => handleZoneClick("CO-04")}
          style={{
            position: "absolute",
            top: "10px",
            left: "55px",
            width: "96px",
            height: "74px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="CO-05"
          onClick={() => handleZoneClick("CO-05")}
          style={{
            position: "absolute",
            top: "97px",
            left: "10px",
            width: "96px",
            height: "28px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="CO-06"
          onClick={() => handleZoneClick("CO-06")}
          style={{
            position: "absolute",
            top: "238px",
            left: "168px",
            width: "60px",
            height: "53px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="CO-07"
          onClick={() => handleZoneClick("CO-07")}
          style={{
            position: "absolute",
            top: "160px",
            left: "119px",
            width: "60px",
            height: "17px",
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

export default Cordoba;