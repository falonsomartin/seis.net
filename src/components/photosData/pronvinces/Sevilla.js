import React, { useState } from "react";

const Sevilla = ({ onVolver }) => {
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
    "SE-01": ["/map/sevilla/se-01.jpg", "/map/sevilla/se-01p.jpg"],
    "SE-02": ["/map/sevilla/se-02.jpg", "/map/sevilla/se-02p.jpg"],
    "SE-03": ["/map/sevilla/se-03.jpg", "/map/sevilla/se-03p.jpg"],
    "SE-04": ["/map/sevilla/se-04.jpg", "/map/sevilla/se-04p.jpg"],
    "SE-05": ["/map/sevilla/se-05.jpg", "/map/sevilla/se-05p.jpg"],
    "SE-06": ["/map/sevilla/se-06.jpg", "/map/sevilla/se-06p.jpg"],
    "SE-07": ["/map/sevilla/se-07.jpg", "/map/sevilla/se-07p.jpg"],
    "SE-08": ["/map/sevilla/se-08.jpg", "/map/sevilla/se-08p.jpg"],
    "SE-09": ["/map/sevilla/se-09.jpg", "/map/sevilla/se-09p.jpg"],
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
          Volver al Mapa de Sevilla
        </button>
      </div>
    );
  }
  return (
    <div style={{ fontFamily: "Verdana", textAlign: "center" }}>
      <h1>Provincia de Sevilla</h1>
      <h3>(1 400 100 ha)</h3>

      <div style={{ position: "relative", display: "inline-block" }}>
        {/* Imagen del mapa */}
        <img
          src="/map/sevilla.gif"
          alt="Mapa de Sevilla"
          width="400"
          height="360"
          style={{ display: "block" }}
        />

        {/* Zonas Interactivas */}
        <div
          title="SE-01"
          onClick={() => handleZoneClick("SE-01")}
          style={{
            position: "absolute",
            top: "201px",
            left: "187px",
            width: "39px",
            height: "22px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="SE-02"
          onClick={() => handleZoneClick("SE-02")}
          style={{
            position: "absolute",
            top: "183px",
            left: "62px",
            width: "54px",
            height: "45px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="SE-03"
          onClick={() => handleZoneClick("SE-03")}
          style={{
            position: "absolute",
            top: "169px",
            left: "234px",
            width: "106px",
            height: "78px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="SE-04"
          onClick={() => handleZoneClick("SE-04")}
          style={{
            position: "absolute",
            top: "212px",
            left: "333px",
            width: "50px",
            height: "60px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="SE-05"
          onClick={() => handleZoneClick("SE-05")}
          style={{
            position: "absolute",
            top: "262px",
            left: "43px",
            width: "61px",
            height: "70px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="SE-06"
          onClick={() => handleZoneClick("SE-06")}
          style={{
            position: "absolute",
            top: "12px",
            left: "90px",
            width: "180px",
            height: "112px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="SE-07"
          onClick={() => handleZoneClick("SE-07")}
          style={{
            position: "absolute",
            top: "247px",
            left: "206px",
            width: "100px",
            height: "74px",

            cursor: "pointer",
          }}
        ></div>

        <div
          title="SE-08"
          onClick={() => handleZoneClick("SE-08")}
          style={{
            position: "absolute",
            top: "171px",
            left: "163px",
            width: "72px",
            height: "32px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="SE-09"
          onClick={() => handleZoneClick("SE-09")}
          style={{
            position: "absolute",
            top: "147px",
            left: "126px",
            width: "80px",
            height: "25px",
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

export default Sevilla;