import React, { useState } from "react";

const Granada = ({ onVolver }) => {
  const [selectedZone, setSelectedZone] = useState(null);

  // Función para manejar clic en cada zona
  const handleZoneClick = (zoneCode) => {
    setSelectedZone(zoneCode);
  };

  // Función para volver al mapa de la provincia
  const handleBackToMap = () => {
    setSelectedZone(null);
  };

  // Lista de imágenes asociadas a las zonas
  const zoneImages = {
    "GR-01": ["/map/granada/gr-01.jpg", "/map/granada/gr-01p.jpg"],
    "GR-02": ["/map/granada/gr-02.jpg", "/map/granada/gr-02p.jpg"],
    "GR-03": ["/map/granada/gr-03.jpg", "/map/granada/gr-03p.jpg"],
    "GR-04": ["/map/granada/gr-04.jpg", "/map/granada/gr-04p.jpg"],
    "GR-05": ["/map/granada/gr-05.jpg", "/map/granada/gr-05p.jpg"],
    "GR-06": ["/map/granada/gr-06.jpg", "/map/granada/gr-06p.jpg"],
    "GR-07": ["/map/granada/gr-07.jpg", "/map/granada/gr-07p.jpg"],
    "GR-08": ["/map/granada/gr-08.jpg", "/map/granada/gr-08p.jpg"],
    "GR-09": ["/map/granada/gr-09.jpg", "/map/granada/gr-09p.jpg"],
    "GR-10": ["/map/granada/gr-10.jpg", "/map/granada/gr-10p.jpg"],
    "GR-11": ["/map/granada/gr-11.jpg", "/map/granada/gr-11p.jpg"],
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
          Volver al Mapa de Granada
        </button>
      </div>
    );
  }
  return (
    <div style={{ fontFamily: "Verdana", textAlign: "center" }}>
      <h1>Provincia de Granada</h1>
      <h3>(1 253 100 ha)</h3>

      <div style={{ position: "relative", display: "inline-block" }}>
        {/* Imagen del mapa */}
        <img
          src="/map/granada.gif"
          alt="Mapa de Granada"
          width="400"
          height="350"
          style={{ display: "block" }}
        />

        {/* Zonas Interactivas */}
        <div
          title="GR-01"
          onClick={() => handleZoneClick("GR-01")}
          style={{
            position: "absolute",
            top: "227px",
            left: "51px",
            width: "70px",
            height: "50px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="GR-02"
          onClick={() => handleZoneClick("GR-02")}
          style={{
            position: "absolute",
            top: "241px",
            left: "174px",
            width: "80px",
            height: "50px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="GR-03"
          onClick={() => handleZoneClick("GR-03")}
          style={{
            position: "absolute",
            top: "105px",
            left: "269px",
            width: "80px",
            height: "90px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="GR-04"
          onClick={() => handleZoneClick("GR-04")}
          style={{
            position: "absolute",
            top: "294px",
            left: "111px",
            width: "90px",
            height: "21px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="GR-05"
          onClick={() => handleZoneClick("GR-05")}
          style={{
            position: "absolute",
            top: "146px",
            left: "206px",
            width: "64px",
            height: "80px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="GR-06"
          onClick={() => handleZoneClick("GR-06")}
          style={{
            position: "absolute",
            top: "35px",
            left: "300px",
            width: "70px",
            height: "70px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="GR-07"
          onClick={() => handleZoneClick("GR-07")}
          style={{
            position: "absolute",
            top: "122px",
            left: "144px",
            width: "62px",
            height: "50px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="GR-08"
          onClick={() => handleZoneClick("GR-08")}
          style={{
            position: "absolute",
            top: "195px",
            left: "28px",
            width: "50px",
            height: "30px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="GR-09"
          onClick={() => handleZoneClick("GR-09")}
          style={{
            position: "absolute",
            top: "169px",
            left: "51px",
            width: "70px",
            height: "21px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="GR-10"
          onClick={() => handleZoneClick("GR-10")}
          style={{
            position: "absolute",
            top: "251px",
            left: "117px",
            width: "56px",
            height: "30px",
            cursor: "pointer",
          }}
        ></div>

        <div
          title="GR-11"
          onClick={() => handleZoneClick("GR-11")}
          style={{
            position: "absolute",
            top: "188px",
            left: "119px",
            width: "70px",
            height: "50px",
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

export default Granada;