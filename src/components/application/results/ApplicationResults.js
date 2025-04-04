import React from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TableContainer,
} from "@mui/material";

export default function ApplicationResults({ model, result }) {
  console.log("Modelo evaluado:", model);
  console.log("Resultado:", result);

  return (
    <Box sx={{ maxWidth: 800, margin: "auto", padding: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Resultados del Modelo {model}
      </Typography>
      {model === "Alcor" && (
        <>
          {/* Unidad Evaluada */}
          <Box sx={{ mb: 2 }}>
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <img
                        src="../../images/aplicacionpv2.gif"
                        alt="Icon"
                        width="16"
                        height="16"
                      />
                      &nbsp; <b>Unidad evaluada:</b>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ backgroundColor: "#FFFF00", fontWeight: "bold" }}
                    >
                      { }
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          {/* Resultados del Riesgo de Compactación */}
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" gutterBottom>
              <i>Riesgo de Compactación del Suelo</i>
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Cohesión del Suelo (kPa)</TableCell>
                    <TableCell align="center">{result.cohesion} kPa</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Ángulo de Fricción Interna (°)</TableCell>
                    <TableCell align="center">{result.frictionAngle}°</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Resistencia a la Compresión (kPa)</TableCell>
                    <TableCell align="center">
                      {result.compressionResistance} kPa
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Clase de Vulnerabilidad</TableCell>
                    <TableCell align="center">{result.vulnerability}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Sobrecarga por Pedregosidad</TableCell>
                    <TableCell align="center">{result.overload}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          {/* Impacto del Manejo Agrícola */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              <i>Impacto del Manejo Agrícola</i>
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Presión Efectiva sobre el Suelo (kPa)</TableCell>
                    <TableCell align="center">
                      {result.soilPressure} kPa
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      Resistencia a la Compresión / Presión sobre el Suelo
                    </TableCell>
                    <TableCell align="center">{result.pcs_sp}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Estabilidad del Suelo</TableCell>
                    <TableCell align="center">{result.stability}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </>
      )}
      {model === "Almagra" && (
        <>
          {/* Unidad Evaluada */}
          <Box sx={{ maxWidth: 1000, margin: "auto", padding: 3 }}>
            <TableContainer component={Paper} sx={{ mt: 2, mb: 4 }}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={2}>
                      <b>Unidad de suelo evaluada:</b>
                    </TableCell>
                    <TableCell colSpan={8} style={{ backgroundColor: "#FFFF00" }}>
                      <Typography align="center">{result.UT}</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={10}>
                      <b>Tipo de cultivo considerado:</b> Anual
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <TableContainer component={Paper} sx={{ mt: 2 }}>
              <Table>
                <TableBody>
                  {/* Encabezados */}
                  <TableRow>
                    <TableCell>
                      <b>Factor</b>
                    </TableCell>
                    {[
                      "Profundidad útil",
                      "Textura",
                      "Drenaje",
                      "Carbonato",
                      "Salinidad",
                      "Saturación de sodio",
                      "Desarrollo del perfil",
                    ].map((header, idx) => (
                      <TableCell key={idx} align="center">
                        <b>{header}</b>
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={8}>
                      <hr />
                    </TableCell>
                  </TableRow>

                  {/* Factores */}
                  <TableRow>
                    <TableCell>Valores</TableCell>
                    <TableCell align="center">{result.depthFactor}</TableCell>
                    <TableCell align="center">{result.texture}</TableCell>
                    <TableCell align="center">{result.drainage}</TableCell>
                    <TableCell align="center">{result.carbonate}</TableCell>
                    <TableCell align="center">{result.salinity}</TableCell>
                    <TableCell align="center">{result.sodium}</TableCell>
                    <TableCell align="center">{result.profileDevelopment}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell colSpan={8}>
                      <hr />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            {/* Clasificación de las clases */}
            <Box sx={{ mt: 3 }}>
              <Typography align="center" variant="h5" gutterBottom>
                Clasificación de la Aptitud del Suelo
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableBody>
                    {[
                      { limit: "1", description: "Ninguna", class: "S1 - Óptima" },
                      { limit: "2", description: "Ligera", class: "S2 - Elevada" },
                      { limit: "3", description: "Moderada", class: "S3 - Moderada" },
                      { limit: "4", description: "Severa", class: "S4 - Marginal" },
                      { limit: "5", description: "Muy severa", class: "S5 - Nula" },
                    ].map((row, idx) => (
                      <TableRow key={idx}>
                        <TableCell>{row.limit}</TableCell>
                        <TableCell>{row.description}</TableCell>
                        <TableCell>{row.class}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        </>
      )}
      {/* Renderizado por modelo */}
      {model === "Aljarafe" && (
        <>
          {/* Tabla con Unidad Evaluada */}
          <Box sx={{ mb: 2 }}>
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <img
                        src="../../images/aplicacionpv2.gif"
                        alt="Icon"
                        width="16"
                        height="16"
                      />
                      &nbsp; <b>Unidad de suelo evaluada:</b>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ backgroundColor: "#FFFF00", fontWeight: "bold" }}
                    >
                      { }
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          {/* Resultados de la Evaluación */}
          <Box sx={{ mt: 2, mb: 2 }}>
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell width="50%">
                      Índice de Plasticidad
                    </TableCell>
                    <TableCell align="center">
                      {result.PlastInd} <small>{result.PlastIndClass}</small>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      Humedad o Manejabilidad Óptima, %
                    </TableCell>
                    <TableCell align="center">
                      {result.OptMoist} <small>{result.OptMoistClass}</small>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          {/* Clasificación Detallada */}
          <Box sx={{ mt: 3 }}>
            <Typography variant="body1" align="left" paragraph>
              <b>Clasificación del índice de plasticidad:</b> <br />
              Clase 1: Muy bajo {"<"} 6; Clase 2: Bajo 6-10; Clase 3: Moderado 10-25;
              Clase 4: Elevado 25-50; Clase 5: Muy elevado 50-100; Clase 6:
              Extremadamente elevado {">"} 100.
            </Typography>
            <Typography variant="body1" align="left">
              <b>Clasificación de la humedad o manejabilidad óptima:</b> <br />
              Clase 1: Muy bajo {"<"} 5; Clase 2: Bajo 5-10; Clase 3: Moderado 10-20;
              Clase 4: Elevado 20-30; Clase 5: Muy elevado {">"} 30.
            </Typography>
          </Box>
        </>
      )}
      {/* Modelo Cervatana */}
      {model === "Cervatana" && (
        <>
          <Box sx={{ mb: 2 }}>
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <b>Unidad de tierra evaluada:</b>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ backgroundColor: "#FFFF00", fontWeight: "bold" }}
                    >
                      { }
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={2}>
                      <Typography variant="h6" align="center">
                        Resultados de la evaluación: Clase <b>{result}</b>
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          <Box sx={{ mt: 3, mb: 2 }}>
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell
                      sx={{ backgroundColor: "#0000A0", color: "#FFFFFF", fontWeight: "bold" }}
                    >
                      Clases de capacidad de uso
                    </TableCell>
                    <TableCell
                      sx={{ backgroundColor: "#0000A0", color: "#FFFFFF", fontWeight: "bold" }}
                    >
                      Subclases: Factores Limitantes
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ backgroundColor: "#C9C9C9" }}>
                      Clase S1 = Excelente
                    </TableCell>
                    <TableCell sx={{ backgroundColor: "#C9C9C9" }}>t = Pendiente</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ backgroundColor: "#C9C9C9" }}>
                      Clase S2 = Buena
                    </TableCell>
                    <TableCell sx={{ backgroundColor: "#C9C9C9" }}>l = Suelo</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ backgroundColor: "#C9C9C9" }}>
                      Clase S3 = Moderada
                    </TableCell>
                    <TableCell sx={{ backgroundColor: "#C9C9C9" }}>r = Riesgo de erosión</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ backgroundColor: "#C9C9C9" }}>
                      Clase N = Marginal o Nula
                    </TableCell>
                    <TableCell sx={{ backgroundColor: "#C9C9C9" }}>
                      b = Déficit bioclimático
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </>
      )}

      {model === "Terraza" && (
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Evapotranspiración (ETo)</TableCell>
                <TableCell align="right">{result.ETo.join(", ")}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Evapotranspiración del Cultivo (ETc)</TableCell>
                <TableCell align="right">{result.ETc.join(", ")}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Balance de Humedad del Suelo (ST)</TableCell>
                <TableCell align="right">{result.ST.join(", ")}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {model === "Raizal" && (
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Evapotranspiración (ETo)</TableCell>
                <TableCell align="right">{result.ETo.join(", ")}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Vulnerabilidad al Agua (VAW)</TableCell>
                <TableCell align="right">{result.VAW}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Vulnerabilidad al Viento (VAD)</TableCell>
                <TableCell align="right">{result.VAD}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Clase de Agua</TableCell>
                <TableCell align="right">{result.ClassWater}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Clase de Viento</TableCell>
                <TableCell align="right">{result.ClassWind}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {model === "Albero" && (
        <Box sx={{ maxWidth: 800, margin: "auto", padding: 3 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Resultados de la Aplicación del Modelo Albero
          </Typography>

          {/* Información General */}
          <TableContainer component={Paper} sx={{ mt: 2, mb: 3 }}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <b>Unidad de suelo evaluada:</b>
                  </TableCell>
                  <TableCell align="center" style={{ backgroundColor: "#FFFF00" }}>
                    {result.UT}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          {/* Resultados de Producción */}
          <TableContainer component={Paper} sx={{ mt: 2, mb: 3 }}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={2}>
                    <hr />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <b>Cultivo</b>
                  </TableCell>
                  <TableCell align="center">
                    <b>Producción Estimada (Kg/ha)</b>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>
                    <hr />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Trigo</TableCell>
                  <TableCell align="center">{result.production.wheat}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Maíz</TableCell>
                  <TableCell align="center">{result.production.maize}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Algodón</TableCell>
                  <TableCell align="center">{result.production.cotton}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>
                    <hr />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          {/* Información Adicional */}
          <Box sx={{ bgcolor: "#CCCCCC", p: 2 }}>
            <Typography variant="body2">
              La información sobre rendimiento estimado utilizado para la
              calibración de los modelos corresponde a los valores de producción
              real durante el periodo 1975-80.
            </Typography>
          </Box>
        </Box>
      )}

      {model === "Pantanal" && (
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Vulnerabilidad al Fósforo</TableCell>
                <TableCell align="right">{result.vulnerabilityPhosphorus}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Vulnerabilidad al Nitrógeno</TableCell>
                <TableCell align="right">{result.vulnerabilityNitrogen}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Riesgo General</TableCell>
                <TableCell align="right">{result.overallRisk}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {model === "ImpelERO" && (
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Riesgo de Erosión</TableCell>
                <TableCell align="right">{result.erosionRisk}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Pérdida de Suelo</TableCell>
                <TableCell align="right">{result.soilLoss} t/ha</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Reducción de Producción</TableCell>
                <TableCell align="right">{result.productionReduction}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {model === "Sierra" && (
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Efecto de Altitud</TableCell>
                <TableCell align="right">{result.altitudeEffect}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Profundidad del Suelo</TableCell>
                <TableCell align="right">{result.soilDepth}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Clasificación</TableCell>
                <TableCell align="right">{result.classification}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {model === "Marisma" && (
        <Typography align="center" variant="body1">
          Estado General: <b>{result.overallStatus}</b>
        </Typography>
      )}

      {model === "Arenal" && (
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Salinidad</TableCell>
                <TableCell align="right">{result.salinityStatus}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Clasificación</TableCell>
                <TableCell align="right">{result.classification}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}
