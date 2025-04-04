import React, { useState } from "react";

const Jaen = ({ onVolver }) => {
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
    "J-01": ["/map/jaen/ja-01.jpg", "/map/jaen/ja-01p.jpg"],
    "J-02": ["/map/jaen/ja-02.jpg", "/map/jaen/ja-02p.jpg"],
    "J-03": ["/map/jaen/ja-03.jpg", "/map/jaen/ja-03p.jpg"],
    "J-04": ["/map/jaen/ja-04.jpg", "/map/jaen/ja-04p.jpg"],
    "J-05": ["/map/jaen/ja-05.jpg", "/map/jaen/ja-05p.jpg"],
    "J-06": ["/map/jaen/ja-06.jpg", "/map/jaen/ja-06p.jpg"],
    "J-07": ["/map/jaen/ja-07.jpg", "/map/jaen/ja-07p.jpg"],
    "J-08": ["/map/jaen/ja-08.jpg", "/map/jaen/ja-08p.jpg"],
    "J-09": ["/map/jaen/ja-09.jpg", "/map/jaen/ja-09p.jpg"],
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
          Volver al Mapa de Jaén
        </button>
      </div>
    );
  }
  return (
    <div style={{ fontFamily: "Verdana", textAlign: "center" }}>
      <h1>Provincia de Jaén</h1>
      <h3>(1 349 800 ha)</h3>

      <div style={{ position: "relative", display: "inline-block" }}>
        {/* Imagen del mapa */}
        <img
          src="/map/jaen.gif"
          alt="Mapa de Jaén"
          width="400"
          height="300"
          style={{ display: "block" }}
        />

        {/* Zonas Interactivas Actualizadas */}
        <div
          title="J-01"
          onClick={() => handleZoneClick("J-01")}
          style={{
            position: "absolute",
            top: "139px",
            left: "5px",
            width: "70px",
            height: "26px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="J-02"
          onClick={() => handleZoneClick("J-02")}
          style={{
            position: "absolute",
            top: "165px",
            left: "51px",
            width: "80px",
            height: "45px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="J-03"
          onClick={() => handleZoneClick("J-03")}
          style={{
            position: "absolute",
            top: "41px",
            left: "163px",
            width: "80px",
            height: "60px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="J-04"
          onClick={() => handleZoneClick("J-04")}
          style={{
            position: "absolute",
            top: "103px",
            left: "140px",
            width: "76px",
            height: "60px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="J-05"
          onClick={() => handleZoneClick("J-05")}
          style={{
            position: "absolute",
            top: "166px",
            left: "138px",
            width: "70px",
            height: "50px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="J-06"
          onClick={() => handleZoneClick("J-06")}
          style={{
            position: "absolute",
            top: "152px",
            left: "216px",
            width: "60px",
            height: "70px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="J-07"
          onClick={() => handleZoneClick("J-07")}
          style={{
            position: "absolute",
            top: "40px",
            left: "9px",
            width: "80px",
            height: "98px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="J-08"
          onClick={() => handleZoneClick("J-08")}
          style={{
            position: "absolute",
            top: "20px",
            left: "268px",
            width: "80px",
            height: "126px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="J-09"
          onClick={() => handleZoneClick("J-09")}
          style={{
            position: "absolute",
            top: "210px",
            left: "65px",
            width: "78px",
            height: "40px",
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

export default Jaen;