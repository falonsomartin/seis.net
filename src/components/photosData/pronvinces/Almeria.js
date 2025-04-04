import React, { useState } from "react";

const Almeria = ({ onVolver }) => {

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
    "AL-01": ["/map/almeria/al-01.jpg", "/map/almeria/al-01p.jpg"],
    "AL-02": ["/map/almeria/al-02.jpg", "/map/almeria/al-02p.jpg"],
    "AL-03": ["/map/almeria/al-03.jpg", "/map/almeria/al-03p.jpg"],
    "AL-04": ["/map/almeria/al-04.jpg", "/map/almeria/al-04p.jpg"],
    "AL-05": ["/map/almeria/al-05.jpg", "/map/almeria/al-05p.jpg"],
    "AL-06": ["/map/almeria/al-06.jpg", "/map/almeria/al-06p.jpg"],
    "AL-07": ["/map/almeria/al-07.jpg", "/map/almeria/al-07p.jpg"],
    "AL-08": ["/map/almeria/al-08.jpg", "/map/almeria/al-08p.jpg"],
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
          Volver al Mapa de Almería
        </button>
      </div>
    );
  }
  return (
    <div style={{ fontFamily: "Verdana", textAlign: "center" }}>
      <h1>Provincia de Almería</h1>
      <h3>(877 400 ha)</h3>

      <div style={{ position: "relative", display: "inline-block" }}>
        {/* Imagen del mapa */}
        <img
          src="/map/almeria.gif"
          alt="Mapa de Almería"
          width="400"
          height="300"
          style={{ display: "block" }}
        />

        {/* Zonas Interactivas */}
        <div
          title="AL-01"
          onClick={() => handleZoneClick("AL-01")}
          style={{
            position: "absolute",
            top: "104px",
            left: "97px",
            width: "70px",
            height: "40px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="AL-02"
          onClick={() => handleZoneClick("AL-02")}
          style={{
            position: "absolute",
            top: "111px",
            left: "186px",
            width: "47px",
            height: "60px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="AL-03"
          onClick={() => handleZoneClick("AL-03")}
          style={{
            position: "absolute",
            top: "199px",
            left: "36px",
            width: "55px",
            height: "16px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="AL-04"
          onClick={() => handleZoneClick("AL-04")}
          style={{
            position: "absolute",
            top: "230px",
            left: "31px",
            width: "57px",
            height: "18px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="AL-05"
          onClick={() => handleZoneClick("AL-05")}
          style={{
            position: "absolute",
            top: "200px",
            left: "136px",
            width: "50px",
            height: "40px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="AL-06"
          onClick={() => handleZoneClick("AL-06")}
          style={{
            position: "absolute",
            top: "154px",
            left: "107px",
            width: "65px",
            height: "45px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="AL-07"
          onClick={() => handleZoneClick("AL-07")}
          style={{
            position: "absolute",
            top: "45px",
            left: "126px",
            width: "60px",
            height: "45px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="AL-08"
          onClick={() => handleZoneClick("AL-08")}
          style={{
            position: "absolute",
            top: "163px",
            left: "51px",
            width: "45px",
            height: "18px",
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
          backgroundColor: "#ddd",
          border: "none",
          cursor: "pointer",
        }}
      >
        Volver al Mapa General
      </button>
    </div>
  );
};

export default Almeria;