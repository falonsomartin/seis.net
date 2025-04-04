import React from "react";
import LoadIncFile from "./LoadIncFile";

const Comarca = ({ onVolver, region, provincia, comarca }) => {
  const basePath = `ppal/atlas/espana/${region}/${provincia}`;
  const basePath_ = `ppal/espana/${region}/${provincia}`;
  const comarcaCode = comarca.toUpperCase(); // Asegura que el código de la comarca esté en mayúsculas

  return (
    <div style={{ fontFamily: "Verdana", backgroundColor: "#D8D8B4", padding: "20px" }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "#000080" }}>Atlas Digital de Comarcas de Suelos</h1>
        <h2 style={{ color: "#000080" }}>Comarca {comarcaCode}</h2>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
        {/* Columna Izquierda */}
        <div style={{ width: "20%", backgroundColor: "#C2C28B", padding: "10px", textAlign: "center" }}>
          <h3 style={{ color: "#000080" }}>Localización</h3>
          <img
            src={`${basePath_}/${comarcaCode}LOC.gif`}
            alt={`Mapa de Localización ${comarcaCode}`}
            style={{ maxWidth: "100%", marginBottom: "10px" }}
          />
          <div>
            <button
              onClick={onVolver}
              style={{ backgroundColor: "#000080", color: "#FFFFFF", padding: "10px", border: "none", cursor: "pointer" }}
            >
              Volver al Mapa
            </button>
          </div>
        </div>

        {/* Columna Derecha */}
        <div style={{ width: "75%", backgroundColor: "#C2C28B", padding: "10px" }}>
          <section style={{ marginBottom: "20px" }}>
            <h3 style={{ color: "#FFFFFF", backgroundColor: "#000080", padding: "5px" }}>Suelos Dominantes</h3>
            <p style={{ color: "#000080" }}>
              <LoadIncFile filePath={`${basePath}/suelodomin${comarcaCode}.inc`} />
            </p>
          </section>

          <section style={{ marginBottom: "20px" }}>
            <h3 style={{ color: "#FFFFFF", backgroundColor: "#000080", padding: "5px" }}>Materiales Originales</h3>
            <p style={{ color: "#000080" }}>
              <LoadIncFile filePath={`${basePath}/matorigen${comarcaCode}.inc`} />
            </p>
          </section>

          <section style={{ marginBottom: "20px" }}>
            <h3 style={{ color: "#FFFFFF", backgroundColor: "#000080", padding: "5px" }}>Datos Climatológicos</h3>
            <p style={{ color: "#000080" }}>
              <LoadIncFile filePath={`${basePath}/clima${comarcaCode}.inc`} />
            </p>
          </section>

          <section style={{ marginBottom: "20px" }}>
            <h3 style={{ color: "#FFFFFF", backgroundColor: "#000080", padding: "5px" }}>Datos Fisiográficos/Administrativos</h3>
            <p style={{ color: "#000080" }}>
              <LoadIncFile filePath={`${basePath}/fisio${comarcaCode}.inc`} />
            </p>
          </section>

          <section>
            <h3 style={{ color: "#FFFFFF", backgroundColor: "#000080", padding: "5px" }}>Indicadores Agro-ambientales</h3>
            <p style={{ color: "#000080" }}>
              <LoadIncFile filePath={`${basePath}/ambiente${comarcaCode}.inc`} />
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Comarca;