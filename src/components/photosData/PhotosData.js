import React, { useState } from "react";
import Almeria from "./pronvinces/Almeria";
import Granada from "./pronvinces/Granada";
import Cordoba from "./pronvinces/Cordoba";
import Malaga from "./pronvinces/Malaga";
import Jaen from "./pronvinces/Jaen";
import Sevilla from "./pronvinces/Sevilla";
import Cadiz from "./pronvinces/Cadiz";
import Huelva from "./pronvinces/Huelva";

const PhotosData = () => {
  const [provinciaSeleccionada, setProvinciaSeleccionada] = useState(null);

  const handleProvinciaClick = (provincia) => {
    setProvinciaSeleccionada(provincia);
  };

  if (provinciaSeleccionada) {
    switch (provinciaSeleccionada) {
      case "almeria":
        return <Almeria onVolver={() => setProvinciaSeleccionada(null)} />;
      case "granada":
        return <Granada onVolver={() => setProvinciaSeleccionada(null)} />;
      case "cordoba":
        return <Cordoba onVolver={() => setProvinciaSeleccionada(null)} />;
      case "malaga":
        return <Malaga onVolver={() => setProvinciaSeleccionada(null)} />;
      case "jaen":
        return <Jaen onVolver={() => setProvinciaSeleccionada(null)} />;
      case "sevilla":
        return <Sevilla onVolver={() => setProvinciaSeleccionada(null)} />;
      case "cadiz":
        return <Cadiz onVolver={() => setProvinciaSeleccionada(null)} />;
      case "huelva":
        return <Huelva onVolver={() => setProvinciaSeleccionada(null)} />;
      default:
        return null;
    }
  }

  return (
    <div style={{ fontFamily: "Verdana", textAlign: "center" }}>
      <h1>Mapa de Andalucía</h1>
      <h3>(8 723 200 ha)</h3>

      <div style={{ position: "relative", display: "inline-block" }}>
        <img
          src="/map/mapandal.gif"
          alt="Mapa de Andalucía"
          width="560"
          height="308"
          style={{ display: "block" }}
        />

        {/* Coordenadas ajustadas para centrar */}
        <div
          onClick={() => handleProvinciaClick("huelva")}
          style={{
            position: "absolute",
            top: "130px",
            left: "60px",
            width: "60px",
            height: "60px",
            cursor: "pointer",
          }}
        ></div>

        <div
          onClick={() => handleProvinciaClick("sevilla")}
          style={{
            position: "absolute",
            top: "140px",
            left: "170px",
            width: "60px",
            height: "60px",
            cursor: "pointer",
          }}
        ></div>

        <div
          onClick={() => handleProvinciaClick("cordoba")}
          style={{
            position: "absolute",
            top: "80px",
            left: "240px",
            width: "60px",
            height: "60px",
            cursor: "pointer",
          }}
        ></div>

        <div
          onClick={() => handleProvinciaClick("jaen")}
          style={{
            position: "absolute",
            top: "80px",
            left: "350px",
            width: "60px",
            height: "60px",
            cursor: "pointer",
          }}
        ></div>

        <div
          onClick={() => handleProvinciaClick("cadiz")}
          style={{
            position: "absolute",
            top: "230px",
            left: "110px",
            width: "60px",
            height: "60px",
            cursor: "pointer",
          }}
        ></div>

        <div
          onClick={() => handleProvinciaClick("malaga")}
          style={{
            position: "absolute",
            top: "200px",
            left: "230px",
            width: "60px",
            height: "60px",
            cursor: "pointer",
          }}
        ></div>

        <div
          onClick={() => handleProvinciaClick("granada")}
          style={{
            position: "absolute",
            top: "180px",
            left: "340px",
            width: "60px",
            height: "60px",
            cursor: "pointer",
          }}
        ></div>

        <div
          onClick={() => handleProvinciaClick("almeria")}
          style={{
            position: "absolute",
            top: "170px",
            left: "450px",
            width: "60px",
            height: "60px",
            cursor: "pointer",
          }}
        ></div>
      </div>
    </div>
  );
};

export default PhotosData;