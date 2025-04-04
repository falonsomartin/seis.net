import React, { useState } from "react";
import Comarca from "./Comarca";

const AtlasDigital = () => {
  const [comarcaSeleccionada, setComarcaSeleccionada] = useState(null);

  const handleComarcaClick = (comarca) => {
    setComarcaSeleccionada(comarca);
  };

  if (comarcaSeleccionada) {
    const [region, provincia, comarca] = comarcaSeleccionada.split("-");

    return (
      <Comarca
        onVolver={() => setComarcaSeleccionada(null)}
        region={region}
        provincia={provincia}
        comarca={comarca}
      />
    );
  }

  return (
    <div style={{ fontFamily: "Verdana", textAlign: "center" }}>
      <h1>Atlas Digital de Comarcas de Suelos</h1>
      <h3>(Índice Cartográfico)</h3>

      <div style={{ position: "relative", display: "inline-block" }}>
        <img
          src="/ppal/mapacomarcas.gif"
          alt="Mapa de Comarcas"
          width="800"
          height="653"
          style={{ display: "block" }}
        />

        {/* Ajuste de comarcas en Sevilla */}
        {/* SE04 */}
        <div
          onClick={() => handleComarcaClick("andalucia-sevilla-SE04")}
          style={{
            position: "absolute",
            top: "550px", // Movido mucho más abajo
            left: "180px", // Movido mucho más a la izquierda
            width: "40px",
            height: "40px",
            cursor: "pointer",
          }}
        ></div>

        {/* SE01 */}
        <div
          onClick={() => handleComarcaClick("andalucia-sevilla-SE01")}
          style={{
            position: "absolute",
            top: "430px", // Movido mucho más abajo
            left: "160px", // Movido mucho más a la izquierda
            width: "40px",
            height: "40px",
            cursor: "pointer",
          }}
        ></div>

        {/* SE02 */}
        <div
          onClick={() => handleComarcaClick("andalucia-sevilla-SE02")}
          style={{
            position: "absolute",
            top: "440px", // Movido mucho más abajo
            left: "200px", // Movido mucho más a la izquierda
            width: "40px",
            height: "40px",
            cursor: "pointer",
          }}
        ></div>

        {/* SE03 */}
        <div
          onClick={() => handleComarcaClick("andalucia-sevilla-SE03")}
          style={{
            position: "absolute",
            top: "460px", // Movido mucho más abajo
            left: "190px", // Movido mucho más a la izquierda
            width: "40px",
            height: "40px",
            cursor: "pointer",
          }}
        ></div>

        {/* SE05 */}
        <div
          onClick={() => handleComarcaClick("andalucia-sevilla-SE05")}
          style={{
            position: "absolute",
            top: "480px", // Movido mucho más abajo
            left: "210px", // Movido mucho más a la izquierda
            width: "40px",
            height: "40px",
            cursor: "pointer",
          }}
        ></div>

        {/* SE06 */}
        <div
          onClick={() => handleComarcaClick("andalucia-sevilla-SE06")}
          style={{
            position: "absolute",
            top: "500px", // Movido mucho más abajo
            left: "230px", // Movido mucho más a la izquierda
            width: "40px",
            height: "40px",
            cursor: "pointer",
          }}
        ></div>

        {/* SE07 */}
        <div
          onClick={() => handleComarcaClick("andalucia-sevilla-SE07")}
          style={{
            position: "absolute",
            top: "520px", // Movido mucho más abajo
            left: "200px", // Movido mucho más a la izquierda
            width: "40px",
            height: "40px",
            cursor: "pointer",
          }}
        ></div>
      </div>
    </div>
  );
};

export default AtlasDigital;