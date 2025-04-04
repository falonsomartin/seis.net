import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Typography,
  Box,
} from "@mui/material";

export default function ApplicationForm({ model, onSubmit }) {
  const [formData, setFormData] = useState({});
  const evaluateCervatana = (data) => {
    let t = data.pen;
    let l = Math.max(data.spu, data.stx, data.spr, data.sdr, data.ssa);
    let r = Math.max(data.ree, data.rec, data.rel);
    let b = Math.max(data.dbh, data.dbr > 1 ? data.dbr - 1 : data.dbr);

    let resultado = t;
    let factor = "t";

    if (l === resultado) factor += "l";
    else if (l > resultado) {
      resultado = l;
      factor = "l";
    }

    if (r === resultado) factor += "r";
    else if (r > resultado) {
      resultado = r;
      factor = "r";
    }

    if (b === resultado) factor += "b";
    else if (b > resultado) {
      resultado = b;
      factor = "b";
    }

    if (resultado === 1) return "S1";
    else if (resultado === 4) return `N${factor}`;
    else return `S${resultado}${factor}`;
  };

  const evaluateTerraza = (data) => {
    const { Tmax, Tmin, Prec, LAT, STO } = data;

    if (!Tmax || !Tmin || !Prec || !LAT || !STO) {
      throw new Error("Faltan datos necesarios para evaluar Terraza.");
    }

    const ETo = Tmax.map((max, idx) => (max + Tmin[idx]) / 2); // Ejemplo de cálculo de ETo
    const ETc = ETo.map((eto, idx) => eto * data.Kc[idx]); // Suponiendo que Kc está en `data`
    const ST = Prec.map((p, idx) => p - ETc[idx] + STO);

    return {
      ETo,
      ETc,
      ST,
    };
  };
  const evaluateRaizal = (data) => {
    const { LAFO, SLGR, GWAT, PSD, OC, STON, DRA, SOSA, LAT, Tmax, Tmin, Prec } = data;

    if (!LAT || !Tmax || !Tmin || !Prec) {
      throw new Error("Faltan datos climáticos necesarios.");
    }

    const ETo = Tmax.map((max, idx) => (max + Tmin[idx]) / 2);
    const VAW = LAT * DRA; // Ejemplo de cálculo de vulnerabilidad al agua
    const VAD = LAT * SLGR; // Ejemplo de cálculo de vulnerabilidad al viento

    return {
      ETo,
      VAW,
      VAD,
      ClassWater: VAW > 5 ? "High" : "Low",
      ClassWind: VAD > 5 ? "High" : "Low",
    };
  };
  const evaluateAlbero = (data) => {
    const { UD, CC, DHS, CACO, SA, SS, CEC } = data;

    // Producción estimada para cada cultivo
    const prodWheat = -1740.3 + 52.1 * UD + 33.0 * DHS + 27.2 * CACO + 238.0 * SA
      - 0.4 * UD * DHS - 6.2 * SA * CEC + 11.0 * SS * CEC;
    const prodMaize = 1085.4 + 30.0 * UD + 28.0 * DHS - 418.1 * SS
      + 17.0 * CC * SA + 0.2 * CC * CEC - 39.2 * SA * CEC + 21.0 * SS * CEC;
    const prodCotton = 1266.3 - 1.4 * UD - 9.2 * CC + 12.1 * DHS - 90.3 * SA
      + 49.0 * CEC - 0.4 * CC * CEC + 11.0 * SS * CEC;

    // Índice de plasticidad y humedad óptima
    const plastInd = 0.47 * CC - 0.20 * CEC + 0.03 * CC * CEC - 0.03 * CC * CEC * data.orgMat;
    const optMoist = 0.38 * CC + 1.14 * CEC - 0.01 * CC * CEC - 0.01 * CC * CEC * data.orgMat;

    // Clasificaciones
    const plastIndClass =
      plastInd < 1.0 ? "N/A" :
        plastInd < 6 ? "Muy bajo" :
          plastInd < 10 ? "Bajo" :
            plastInd < 25 ? "Moderado" :
              plastInd < 50 ? "Elevado" :
                plastInd < 100 ? "Muy elevado" : "Extremadamente elevado";

    const optMoistClass =
      optMoist < 0.0 ? "N/A" :
        optMoist < 5 ? "Muy bajo" :
          optMoist < 10 ? "Bajo" :
            optMoist < 20 ? "Moderado" :
              optMoist < 30 ? "Elevado" : "Muy elevado";

    // Validación de producción negativa
    const validateProduction = (value) => (value <= 0 ? "-" : Math.round(value));

    return {
      depthFactor: UD,
      salinityStatus: SA > 2 ? "Alta" : "Baja",
      classification: UD > 50 && SA <= 2 && CACO < 10 ? "Óptima" : "Subóptima",
      plastInd: plastInd.toFixed(1),
      plastIndClass,
      optMoist: optMoist.toFixed(1),
      optMoistClass,
      production: {
        wheat: validateProduction(prodWheat),
        maize: validateProduction(prodMaize),
        cotton: validateProduction(prodCotton),
      },
    };
  };
  const evaluatePantanal = (data) => {
    const { LAFO, SLGR, GWAT, DRA, PSD, OC, PH, CEC } = data;

    const vulnerabilityPhosphorus = PH > 6 ? "High" : "Low";
    const vulnerabilityNitrogen = CEC > 20 ? "High" : "Low";

    const overallRisk =
      vulnerabilityPhosphorus === "High" || vulnerabilityNitrogen === "High"
        ? "High Risk"
        : "Low Risk";

    return {
      vulnerabilityPhosphorus,
      vulnerabilityNitrogen,
      overallRisk,
    };
  };
  const evaluateImpelERO = (data) => {
    const { TEXT, STON, DRA, TOP, SLFR, SLAS, OM, BD, CM, SS, SG } = data;

    const erosionRisk =
      TEXT === "sandy" || SLFR > 5 || OM < 2 ? "High Risk" : "Low Risk";

    const soilLoss = erosionRisk === "High Risk" ? 10 : 2; // Ejemplo de cálculo
    const productionReduction = soilLoss > 5 ? "Significant" : "Minimal";

    return {
      erosionRisk,
      soilLoss,
      productionReduction,
    };
  };
  const evaluateAlmagara = (data) => {
    const { LUD, UD, CC, ST, TX, DR, SA, SS, SPD } = data;

    const depthFactor = UD > LUD ? "Adequate" : "Shallow";
    const salinityStatus = SA > 2 ? "High Salinity" : "Low Salinity";
    const overallClassification =
      depthFactor === "Adequate" && salinityStatus === "Low Salinity"
        ? "Optimal"
        : "Suboptimal";

    return {
      depthFactor,
      salinityStatus,
      classification: overallClassification,
      texture: TX,
      drainage: DR,
      sodium: SS,
      profileDevelopment: SPD,
      salinity: SA,
      carbonate: CC,


    };
  };

  const evaluateSierra = (data) => {
    const { LAT, ALT, PHY, EMIN, EMAX, TP, UD, TX, DR, PH } = data;

    const altitudeEffect = ALT > 2000 ? "High Altitude" : "Low Altitude";
    const depthAdequacy = UD > 50 ? "Adequate" : "Shallow";

    return {
      altitudeEffect,
      minTemperature: EMIN,
      maxTemperature: EMAX,
      totalPrecipitation: TP,
      soilDepth: depthAdequacy,
      soilpH: PH,
      classification: altitudeEffect === "High Altitude" ? "Mountainous" : "Plains",
    };
  };

  const evaluateMarisma = (data) => {
    const { soilChroma, mottChroma, daySat, smr, drySubSoil, pH60 } = data;

    const waterSaturation = daySat > 10 ? "Waterlogged" : "Well Drained";
    const pHStatus = pH60 > 7 ? "Alkaline" : "Acidic";

    return {
      soilCondition: soilChroma > mottChroma ? "Hydromorphic" : "Normal",
      waterSaturation,
      pHStatus,
      overallStatus: pHStatus === "Acidic" ? "Unsuitable" : "Suitable",
    };
  };

  const evaluateArenal = (data) => {
    const { LAT, Tmax, Tmin, Prec, TEX, SAL } = data;

    const averageTemp = Tmax.map((max, idx) => (max + Tmin[idx]) / 2);
    const textureCategory = TEX === "sandy" ? "Low Retention" : "High Retention";

    return {
      averageTemperature: averageTemp,
      textureCategory,
      salinityStatus: SAL > 2 ? "High Salinity" : "Low Salinity",
      classification: "Arenal Evaluation Completed",
    };
  };

  const evaluateAlcor = (data) => {
    const {
      CC, // clayContent
      SC, // siltContent
      OM, // organicMatter
      STR, // structure
      STON, // coarseFragments
      BULK, // bulkDensity
      POROS, // totalPorosity
      FC, // fieldCapacity
      WP, // wiltingPoint
      COND, // hydraulic conductivity
      WL, // wheelLoad
      TIP, // tireInflation
    } = data;

    // Variables Derivadas
    let cohesion = -1;
    let frictionAngle = -1;
    let soilPressure = 0;
    let pcs = 0;
    let pcs_sp = 0;
    let texture = "";
    let textGroup = 0;

    // Clasificación de Textura (German Soil Text)
    if (CC > 0 && CC <= 5 && SC > 0 && SC <= 10) {
      texture = "Ss";
      textGroup = 1;
    } else if (CC > 45 && CC <= 65 && SC > 15 && SC <= 30) {
      texture = "Tl";
      textGroup = 5;
    }
    // [Agrega más condiciones similares aquí según la clase PHP...]

    // Cohesión
    if (STON > 80 && STR === "sin") cohesion = 0;
    else if ((texture === "Ss" || texture === "Su2") && STR === "sin") cohesion = 12;
    else if (texture === "Tl" && STR === "coh") cohesion = 34;
    else cohesion = 10; // Valor predeterminado.

    // Ángulo de Fricción Interna
    if (STON > 80 && STR === "sin") frictionAngle = 26;
    else if (texture === "Ss" && STR === "sin") frictionAngle = 28;
    else if (texture === "Tl" && STR === "coh") frictionAngle = 38;
    else frictionAngle = 30; // Valor predeterminado.

    // Presión del Suelo
    const contactArea = (0.9 * WL) / TIP;
    soilPressure = WL / contactArea;

    // Estrés de Precompresión
    pcs =
      textGroup === 1
        ? 410.75 * BULK - 0.0007 * Math.pow(frictionAngle, 3) - 3.41 * WP - 384.71
        : 89.5 * BULK - 2.89 * COND + 125.76 * Math.log10(cohesion) - 77.25;

    // Relación PCS / SP
    pcs_sp = pcs / soilPressure;

    // Índice de Vulnerabilidad
    let vulnerIndex = pcs > 150 ? 1 : pcs > 120 ? 2 : pcs > 90 ? 3 : pcs > 60 ? 4 : 5;
    let overloadIndex = 0; // Sobrecarga por pedregosidad

    // Sobrecarga por Pedregosidad (Overload)
    if (STON > 10 && STON <= 25) overloadIndex = vulnerIndex - 1;
    else if (STON > 25 && STON <= 50) overloadIndex = vulnerIndex - 2;
    else if (STON > 50 && STON <= 75) overloadIndex = vulnerIndex - 3;
    else if (STON > 75) overloadIndex = vulnerIndex - 4;
    else overloadIndex = vulnerIndex;

    // Estabilidad del Suelo
    let stability = "";
    if (pcs_sp > 1.5) stability = "Muy estable / deformación elástica";
    else if (pcs_sp >= 1.2) stability = "Estable";
    else if (pcs_sp >= 0.8) stability = "Inestable";
    else stability = "Muy inestable / deformación plástica";

    // Resultados Finales
    return {
      cohesion: cohesion.toFixed(2),
      frictionAngle: frictionAngle.toFixed(2),
      soilPressure: soilPressure.toFixed(2),
      preCompStress: pcs.toFixed(2),
      pcs_sp: pcs_sp.toFixed(2),
      vulnerability: `Clase V${vulnerIndex}`,
      overload: `Clase V${overloadIndex}`,
      stability,
      texture,
    };
  };


  const evaluateAljarafe = (data) => {
    const { CC, CEC, OM } = data;

    return {
      clayContent: CC > 30 ? "High Clay" : "Low Clay",
      cationExchangeCapacity: CEC > 20 ? "High Fertility" : "Low Fertility",
      organicMatter: OM > 3 ? "Rich Soil" : "Poor Soil",
      summary: "Aljarafe model evaluated successfully",
    };
  };



  const evaluateModel = (model, data) => {
    switch (model) {
      case "Cervatana":
        return evaluateCervatana(data);
      case "Almagra":
        return evaluateAlmagara(data);
      case "Alcor":
        return evaluateAlcor(data);
      case "Aljarafe":
        return evaluateAljarafe(data);
      case "Terraza":
        return evaluateTerraza(data);
      case "Marisma":
        return evaluateMarisma(data);
      case "Sierra":
        return evaluateSierra(data);
      case "Raizal":
        return evaluateRaizal(data);
      case "Albero":
        return evaluateAlbero(data);
      case "Pantanal":
        return evaluatePantanal(data);
      case "Arenal":
        return evaluateArenal(data);
      case "ImpelERO":
        return evaluateImpelERO(data);
      default:
        throw new Error(`Modelo ${model} no soportado.`);
    }
  };

  // Ejemplo de uso


  // Configuración de campos para cada modelo
  const modelFields = {
    Terraza: {
      LAT: {
        label: "Latitud (30-45°)",
        type: "select",
        options: Array.from({ length: 16 }, (_, i) => i + 30),
      },
      CLIM: {
        label: "Clima (Estación Meteorológica)",
        type: "select",
        options: ["Nueva", "Campiña", "Sierra", "Vega"],
      },
      STO: {
        label: "Capacidad de Retención de Agua (cm)",
        type: "text",
      },
      Tmax: {
        label: "Temperaturas máximas mensuales (°C)",
        type: "monthly",
      },
      Tmin: {
        label: "Temperaturas mínimas mensuales (°C)",
        type: "monthly",
      },
      Prec: {
        label: "Precipitación mensual (mm)",
        type: "monthly",
      },
      Kc: {
        label: "Coeficiente de cultivo (Kc mensual)",
        type: "monthly",
      },
      Ky: {
        label: "Coeficiente de estrés hídrico (Ky mensual)",
        type: "monthly",
      },
      KYS: {
        label: "KYS global",
        type: "text",
      },
      CROP: {
        label: "Tipo de cultivo",
        type: "select",
        options: [
          "Nuevo",
          "Cebada",
          "Maíz",
          "Algodón",
          "Patata",
          "Soja",
          "Girasol",
          "Tabaco",
          "Trigo",
        ],
      },
    },
    Cervatana: {
      pen: {
        label: "Pendiente (%)",
        type: "select",
        options: [
          "Nula a suave (<7)",
          "Moderada (7-15)",
          "Fuerte (15-30)",
          "Escarpada (>30)",
        ],
      },
      spu: {
        label: "Profundidad útil (cm)",
        type: "select",
        options: [
          "Elevada (>75)",
          "Moderada (50-75)",
          "Escasa (25-50)",
          "Somera (<25)",
        ],
      },
      stx: {
        label: "Textura",
        type: "select",
        options: ["Equilibrada", "Ligera o pesada"],
      },
      spr: {
        label: "Pedregosidad/rocosidad (%)",
        type: "select",
        options: [
          "Nula a ligera (<15)",
          "Ligera a moderada (15-40)",
          "Elevada (>40)",
        ],
      },
      sdr: {
        label: "Drenaje",
        type: "select",
        options: ["Bueno", "Moderado", "Deficiente o excesivo"],
      },
      ssa: {
        label: "Salinidad (dS/m)",
        type: "select",
        options: [
          "Nula a ligera (<4)",
          "Moderada (4-8)",
          "Elevada (8-12)",
          "Muy elevada (>12)",
        ],
      },
      ree: {
        label: "Erosión (%)",
        type: "select",
        options: ["Ligera", "Moderada", "Elevada"],
      },
      rec: {
        label: "Densidad de vegetación (%)",
        type: "select",
        options: [
          "Alta (>30)",
          "Moderada (15-30)",
          "Nula a ligera (<15)",
        ],
      },
      rel: {
        label: "Erosividad de la lluvia (R)",
        type: "select",
        options: [
          "Ligera",
          "Moderada",
          "Fuerte",
          "Muy fuerte",
        ],
      },
      dbh: {
        label: "Falta de agua",
        type: "select",
        options: [
          "Baja (Class h1)",
          "Moderada (Class h2)",
          "Elevada (Class h3)",
          "Muy elevada (Class h4)",
        ],
      },
      dbr: {
        label: "Riesgo de heladas",
        type: "select",
        options: [
          "Nulo (Class f1)",
          "Ligero (Class f2)",
          "Moderado (Class f3)",
          "Elevado (Class f4)",
        ],
      },
    },
    Almagra: {
      UT: {
        label: "Unidad de suelo a evaluar",
        type: "text",
      },
      CT: {
        label: "Tipo de cultivo considerado",
        type: "select",
        options: ["Cultivos anuales", "Cultivos semianuales / perennes"],
      },
      LUD: {
        label: "Límite de la profundidad útil",
        type: "select",
        options: [
          "Al material impermeable",
          "A la arena o grava",
          "A la caliza permeable",
        ],
      },
      UD: {
        label: "Profundidad útil (cm)",
        type: "text",
      },
      ST: {
        label: "Pedregosidad (%)",
        type: "select",
        options: ["<15", "15-25", ">25"],
      },
      TX: {
        label: "Textura",
        type: "select",
        options: [
          "Ligera",
          "Moderadamente ligera",
          "Media",
          "Moderadamente pesada",
          "Pesada",
        ],
      },
      DR: {
        label: "Drenaje",
        type: "select",
        options: [
          "Muy pobre",
          "Pobre",
          "Moderado",
          "Bueno",
          "Excesivo",
          "Muy excesivo",
        ],
      },
      CC: {
        label: "Carbonato (%)",
        type: "text",
      },
      SA: {
        label: "Salinidad (dS/m)",
        type: "text",
      },
      SS: {
        label: "Saturación de sodio (%)",
        type: "text",
      },
      SPD: {
        label: "Desarrollo del perfil",
        type: "select",
        options: [
          "G1. Incipiente",
          "G2. Moderado",
          "G3. Fuerte",
          "G4. Muy fuerte",
        ],
      },
    },
    Albero: {
      UT: {
        label: "Unidad de suelo a evaluar",
        type: "text",
      },
      UD: {
        label: "Profundidad útil (20-120 cm)",
        type: "text",
      },
      CC: {
        label: "Contenido de arcilla (14-75%)",
        type: "text",
      },
      DHS: {
        label: "Profundidad de síntomas de hidromorfía (30-120 cm)",
        type: "text",
      },
      CACO: {
        label: "Contenido en carbonato (0-27%)",
        type: "text",
      },
      SA: {
        label: "Salinidad (1-7 dS/m)",
        type: "text",
      },
      SS: {
        label: "Saturación en sodio (0-8%)",
        type: "text",
      },
      CEC: {
        label: "Capacidad de cambio catiónico (6-53 meq/100g)",
        type: "text",
      },
    },
    Sierra: {
      LU: {
        label: "Unidad de tierra a evaluar",
        type: "text",
      },
      LAT: {
        label: "Latitud (35-70°)",
        type: "select",
        options: Array.from({ length: 36 }, (_, i) => 35 + i), // [35, 36, ..., 70]
      },
      ALT: {
        label: "Altitud (0-2800 m)",
        type: "text",
      },
      PHY: {
        label: "Fisiografía",
        type: "select",
        options: [
          { value: 1, label: "Valle" },
          { value: 2, label: "Terraza" },
          { value: 3, label: "Colina" },
          { value: 4, label: "Meseta" },
          { value: 5, label: "Ladera" },
          { value: 6, label: "Cresta" },
        ],
      },
      EMIN: {
        label: "Temperatura mínima extrema (hasta -40°C)",
        type: "text",
      },
      EMAX: {
        label: "Temperatura máxima extrema (hasta 36°C)",
        type: "text",
      },
      TP: {
        label: "Precipitación total (150-2000 mm)",
        type: "text",
      },
      UD: {
        label: "Profundidad útil",
        type: "select",
        options: [
          { value: 1, label: "Superficial" },
          { value: 2, label: "Moderada" },
          { value: 3, label: "Alta" },
        ],
      },
      TX: {
        label: "Textura",
        type: "select",
        options: [
          { value: 1, label: "Ligera" },
          { value: 2, label: "Media" },
          { value: 3, label: "Pesada" },
        ],
      },
      DR: {
        label: "Drenaje",
        type: "select",
        options: [
          { value: 1, label: "Pobre" },
          { value: 2, label: "Bueno" },
          { value: 3, label: "Moderado" },
          { value: 4, label: "Excesivo" },
        ],
      },
      PH: {
        label: "pH (4.5-8.6)",
        type: "text",
      },
    },
    Marisma: {
      ut: {
        label: "Unidad de suelo a evaluar",
        type: "text",
      },
      topText: {
        label: "Textura del suelo",
        type: "select",
        options: [
          { value: "S", label: "Superficies arenosas" },
          { value: "L", label: "Superficies francas" },
          { value: "C", label: "Superficies arcillosas" },
          { value: "O", label: "Suelos orgánicos" },
        ],
      },
      topGrav: {
        label: "Grava en la superficie",
        type: "select",
        options: [
          { value: "0", label: "< 15" },
          { value: "1", label: "≤ 35" },
          { value: "2", label: "> 35" },
        ],
      },
      subText: {
        label: "Textura del subsuelo",
        type: "select",
        options: [
          { value: "S", label: "Subsuelos arenosos" },
          { value: "L", label: "Subsuelos francos" },
          { value: "C", label: "Subsuelos arcillosos" },
          { value: "R", label: "Rocas u otras capas que impidan el crecimiento de las raíces" },
        ],
      },
      subGrav: {
        label: "Grava en el subsuelo",
        type: "select",
        options: [
          { value: "0", label: "< 15" },
          { value: "1", label: "≤ 35" },
          { value: "2", label: "> 35" },
        ],
      },
      soilChroma: {
        label: "Chroma del suelo en los primeros 60 cm",
        type: "select",
        options: [
          { value: "1", label: "≤ 2" },
          { value: "2", label: "> 2" },
        ],
      },
      mottChroma: {
        label: "Chroma de las manchas en los primeros 60 cm",
        type: "select",
        options: [
          { value: "1", label: "≤ 2" },
          { value: "2", label: "> 2" },
        ],
      },
      daySat: {
        label: "Días de saturación",
        type: "select",
        options: [
          { value: "1", label: "≤ 60" },
          { value: "2", label: "> 60" },
        ],
      },
      smr: {
        label: "Régimen de humedad del suelo",
        type: "select",
        options: [
          { value: "AQ", label: "Aquic" },
          { value: "PQ", label: "Peraquic" },
          { value: "AR", label: "Aridic" },
          { value: "TO", label: "Torric" },
          { value: "UD", label: "Udic" },
          { value: "PU", label: "Perudic" },
          { value: "US", label: "Ustic" },
          { value: "XE", label: "Xeric" },
        ],
      },
      drySubSoil: {
        label: "Subsuelo seco (días)",
        type: "select",
        options: [
          { value: "1", label: "≤ 90 días" },
          { value: "2", label: "> 90 días" },
        ],
      },
      CEC20: {
        label: "CIC efectiva en los primeros 20 cm",
        type: "select",
        options: [
          { value: "1", label: "< 4 meq/100g" },
          { value: "2", label: "≥ 4 meq/100g" },
        ],
      },
      CEC20pH7: {
        label: "CIC a pH 7 en los primeros 20 cm",
        type: "select",
        options: [
          { value: "1", label: "< 7 meq/100g" },
          { value: "2", label: "≥ 7 meq/100g" },
        ],
      },
      FreeFe: {
        label: "Fe₂O₃ libre en los primeros 20 cm (%)",
        type: "text",
      },
      Clay20: {
        label: "Arcilla en los primeros 20 cm (%)",
        type: "text",
      },
      Struct: {
        label: "Estructura en los primeros 20 cm",
        type: "select",
        options: [
          { value: "GR", label: "Granular" },
          { value: "CR", label: "Migajosa" },
          { value: "PR", label: "Prismática" },
          { value: "SB", label: "Bloques subangulares" },
          { value: "AB", label: "Bloques angulares" },
          { value: "CO", label: "Columnar" },
        ],
      },
      EC: {
        label: "Conductividad eléctrica en los primeros 60 cm",
        type: "select",
        options: [
          { value: "1", label: "< 4 dS/m" },
          { value: "2", label: "≥ 4 dS/m" },
        ],
      },
      Na: {
        label: "Sodio intercambiable en los primeros 60 cm (%)",
        type: "text",
      },
    },
    Raizal: {
      FU: {
        label: "Unidad de campo a evaluar",
        type: "text",
      },
      LAFO: {
        label: "Forma del terreno",
        type: "select",
        options: [
          { value: "1", label: "Llano" },
          { value: "2", label: "Valle" },
          { value: "3", label: "Ondulado" },
          { value: "4", label: "Colina" },
          { value: "5", label: "Montaña" },
        ],
      },
      SLGR: {
        label: "Clase de pendiente (%)",
        type: "select",
        options: [
          { value: "1", label: "Baja (<2)" },
          { value: "2", label: "Moderada (2-8)" },
          { value: "3", label: "Elevada (8-16)" },
          { value: "4", label: "Muy elevada (16-30)" },
          { value: "5", label: "Extremadamente elevada (>30)" },
        ],
      },
      GWAT: {
        label: "Profundidad de la capa freática (m)",
        type: "select",
        options: [
          { value: "1", label: "Somera (<1.5)" },
          { value: "2", label: "Profunda (>1.5)" },
        ],
      },
      PSD: {
        label: "Textura del suelo",
        type: "select",
        options: [
          { value: "1", label: "Arcilloso" },
          { value: "2", label: "Franco arcilloso" },
          { value: "3", label: "Arenoso grueso" },
          { value: "4", label: "Arenoso" },
          { value: "5", label: "Franco limoso" },
          { value: "6", label: "Arenoso fino" },
        ],
      },
      STON: {
        label: "Pedregosidad superficial (%)",
        type: "select",
        options: [
          { value: "1", label: "Protegido (>10)" },
          { value: "2", label: "No protegido (<10)" },
        ],
      },
      OC: {
        label: "Materia orgánica (%)",
        type: "select",
        options: [
          { value: "1", label: "Muy alto (>5)" },
          { value: "2", label: "Alto (3-5)" },
          { value: "3", label: "Bajo (2-3)" },
          { value: "4", label: "Muy bajo (<2)" },
        ],
      },
      DRA: {
        label: "Drenaje",
        type: "select",
        options: [
          { value: "1", label: "Excesivamente drenado" },
          { value: "2", label: "Bien drenado" },
          { value: "3", label: "Pobremente drenado" },
        ],
      },
      SOSA: {
        label: "Saturación en sodio (%)",
        type: "select",
        options: [
          { value: "1", label: "Baja (<15)" },
          { value: "2", label: "Alta (>15)" },
        ],
      },
      LAT: {
        label: "Latitud (30-45°)",
        type: "select",
        options: Array.from({ length: 16 }, (_, i) => ({
          value: `${30 + i}`,
          label: `${30 + i}°`,
        })),
      },
      Tmax: {
        label: "Temperatura máxima mensual (°C)",
        type: "multi-text",
        fields: [
          "janmax",
          "febmax",
          "marmax",
          "aprmax",
          "maymax",
          "junmax",
          "julmax",
          "augmax",
          "sepmax",
          "octmax",
          "novmax",
          "decmax",
        ],
      },
      Tmin: {
        label: "Temperatura mínima mensual (°C)",
        type: "multi-text",
        fields: [
          "janmin",
          "febmin",
          "marmin",
          "aprmin",
          "maymin",
          "junmin",
          "julmin",
          "augmin",
          "sepmin",
          "octmin",
          "novmin",
          "decmin",
        ],
      },
      Pmean: {
        label: "Precipitación media mensual (mm)",
        type: "multi-text",
        fields: [
          "janmean",
          "febmean",
          "marmean",
          "aprmean",
          "maymean",
          "junmean",
          "julmean",
          "augmean",
          "sepmean",
          "octmean",
          "novmean",
          "decmean",
        ],
      },
      Pmax: {
        label: "Precipitación máxima mensual (mm)",
        type: "multi-text",
        fields: [
          "janp",
          "febp",
          "marp",
          "aprp",
          "mayp",
          "junp",
          "julp",
          "augp",
          "sepp",
          "octp",
          "novp",
          "decp",
        ],
      },
      LUT: {
        label: "Tipo de utilización de la tierra",
        type: "select",
        options: [
          { value: "1", label: "Ninguno" },
          { value: "2", label: "Cultivo anual" },
          { value: "3", label: "Cultivo semianual/perenne" },
        ],
      },
      GSL: {
        label: "Duración del periodo vegetativo (días)",
        type: "select",
        options: [
          { value: "1", label: "Baja (<150)" },
          { value: "2", label: "Moderada (150-225)" },
          { value: "3", label: "Alta (>225)" },
        ],
      },
      SLA: {
        label: "Área foliar específica (m²/kg)",
        type: "select",
        options: [
          { value: "1", label: "Baja (<25)" },
          { value: "2", label: "Moderada (25-30)" },
          { value: "3", label: "Alta (>30)" },
        ],
      },
      PLHE: {
        label: "Altura de la planta (m)",
        type: "select",
        options: [
          { value: "1", label: "Muy baja (<0.5)" },
          { value: "2", label: "Baja (0.5-1.0)" },
          { value: "3", label: "Alta (>1.0)" },
        ],
      },
      MAXRD: {
        label: "Profundidad máxima de raíces (m)",
        type: "select",
        options: [
          { value: "1", label: "Somera (<0.75)" },
          { value: "2", label: "Profunda (>0.75)" },
        ],
      },
      STCR: {
        label: "Estructura del cultivo",
        type: "select",
        options: [
          { value: "1", label: "Fina" },
          { value: "2", label: "Gruesa" },
        ],
      },

      // Datos del Manejo
      SODA: {
        label: "Fecha de siembra",
        type: "select",
        options: [
          { value: "1", label: "Primavera-verano" },
          { value: "2", label: "Otoño-invierno" },
        ],
      },
      TIPA: {
        label: "Tipo de laboreo",
        type: "select",
        options: [
          { value: "1", label: "Convencional" },
          { value: "2", label: "En fajas o zonas" },
          { value: "3", label: "De conservación" },
          { value: "4", label: "Mínimo" },
          { value: "5", label: "De emergencia" },
        ],
      },
      TIDE: {
        label: "Profundidad de laboreo",
        type: "select",
        options: [
          { value: "1", label: "Superficial" },
          { value: "2", label: "Profundo" },
        ],
      },
      TIME: {
        label: "Implemento de laboreo",
        type: "select",
        options: [
          { value: "1", label: "Disco, rastrillo, rodillos, etc." },
          { value: "2", label: "Otros métodos" },
        ],
      },
      ROSP: {
        label: "Espaciado entre hileras (m)",
        type: "select",
        options: [
          { value: "1", label: "No espaciado (<0.15)" },
          { value: "2", label: "Pequeño (0.15-0.7)" },
          { value: "3", label: "Moderado (0.7-2.0)" },
          { value: "4", label: "Grande (>2.0)" },
        ],
      },
      ARDR: {
        label: "Drenaje artificial",
        type: "select",
        options: [
          { value: "1", label: "Sí" },
          { value: "2", label: "No" },
        ],
      },
      SCT: {
        label: "Prácticas de conservación del suelo (agua)",
        type: "select",
        options: [
          { value: "1", label: "Ninguna" },
          { value: "2", label: "Estabilizadores, gaviones, presas" },
          { value: "3", label: "Cultivos en curvas de nivel" },
          { value: "4", label: "Terrazas" },
        ],
      },
      SCT2: {
        label: "Prácticas de conservación del suelo (viento)",
        type: "select",
        options: [
          { value: "1", label: "Cinturones protectores" },
          { value: "2", label: "Cortavientos" },
          { value: "3", label: "Mezcla de horizontes" },
          { value: "4", label: "Métodos de estabilidad temporal" },
          { value: "5", label: "Ninguna" },
        ],
      },
      RETR: {
        label: "Tratamiento de residuos",
        type: "select",
        options: [
          { value: "1", label: "Ninguno, pastoreo" },
          { value: "2", label: "Quemado" },
          { value: "3", label: "Enterrado" },
        ],
      },
      CRRO: {
        label: "Rotación de cultivos",
        type: "select",
        options: [
          { value: "1", label: "Ninguna" },
          { value: "2", label: "Combinación de cultivos de invierno y verano" },
          { value: "3", label: "Combinación de cultivos anuales y perennes" },
          { value: "4", label: "Combinación de cultivos anuales" },
        ],
      },
    },
    Pantanal: {
      FU: {
        label: "Unidad de campo a evaluar",
        type: "text",
      },
      LAFO: {
        label: "Forma del terreno",
        type: "select",
        options: [
          { value: "1", label: "Llano" },
          { value: "2", label: "Valle / relieve ondulado" },
          { value: "3", label: "Colina / montaña" },
        ],
      },
      SLGR: {
        label: "Clase de pendiente (%)",
        type: "text",
      },
      GWAT: {
        label: "Profundidad de la capa freática (m)",
        type: "text",
      },
      DRA: {
        label: "Drenaje",
        type: "select",
        options: [
          { value: "1", label: "Excesivamente drenado" },
          { value: "2", label: "Bien drenado" },
          { value: "3", label: "Pobremente drenado" },
        ],
      },
      PSD: {
        label: "Textura del suelo",
        type: "select",
        options: [
          { value: "C", label: "Arcilloso" },
          { value: "SIC", label: "Arcillo limoso" },
          { value: "SC", label: "Arcillo arenoso" },
          { value: "SICL", label: "Franco arcillo limoso" },
          { value: "CL", label: "Franco arcilloso" },
          { value: "SCL", label: "Franco arcillo arenoso" },
          { value: "LS", label: "Areno francoso" },
          { value: "SIL", label: "Franco limoso" },
          { value: "L", label: "Franco" },
          { value: "SL", label: "Franco arenoso" },
        ],
      },
      OC: {
        label: "Materia orgánica (%)",
        type: "text",
      },
      PH: {
        label: "pH",
        type: "text",
      },
      CEC: {
        label: "Capacidad de cambio catiónico (CEC) (meq/100g)",
        type: "text",
      },
      LAT: {
        label: "Latitud (30-45°)",
        type: "select",
        options: Array.from({ length: 16 }, (_, i) => ({
          value: `${30 + i}`,
          label: `${30 + i}°`,
        })),
      },
      Tmax: {
        label: "Temperatura máxima mensual (°C)",
        type: "multi-text",
        fields: [
          "janmax",
          "febmax",
          "marmax",
          "aprmax",
          "maymax",
          "junmax",
          "julmax",
          "augmax",
          "sepmax",
          "octmax",
          "novmax",
          "decmax",
        ],
      },
      Tmin: {
        label: "Temperatura mínima mensual (°C)",
        type: "multi-text",
        fields: [
          "janmin",
          "febmin",
          "marmin",
          "aprmin",
          "maymin",
          "junmin",
          "julmin",
          "augmin",
          "sepmin",
          "octmin",
          "novmin",
          "decmin",
        ],
      },
      Pmean: {
        label: "Precipitación media mensual (mm)",
        type: "multi-text",
        fields: [
          "janmean",
          "febmean",
          "marmean",
          "aprmean",
          "maymean",
          "junmean",
          "julmean",
          "augmean",
          "sepmean",
          "octmean",
          "novmean",
          "decmean",
        ],
      },
      LUT: {
        label: "Tipo de utilización de la tierra",
        type: "select",
        options: [
          { value: "1", label: "Ninguno" },
          { value: "2", label: "Forestal" },
          { value: "3", label: "Cultivos arbóreos" },
          { value: "4", label: "Vegetación natural" },
          { value: "5", label: "Pastizal" },
          { value: "6", label: "Tierra sin cultivar" },
          { value: "7", label: "Cultivos tradicionales" },
        ],
      },
      CRRO: {
        label: "Rotación de cultivos",
        type: "select",
        options: [
          { value: "1", label: "Ninguna" },
          { value: "2", label: "Combinación Invierno-Verano" },
          { value: "3", label: "Anual-Perennes" },
          { value: "4", label: "Solo anual" },
        ],
      },
      PEST: {
        label: "Uso de pesticidas",
        type: "select",
        options: [
          { value: "1", label: "Sí" },
          { value: "2", label: "No" },
        ],
      },
      TFERT: {
        label: "Temporada de fertilización",
        type: "select",
        options: [
          { value: "1", label: "Otoño-Invierno" },
          { value: "2", label: "Primavera-Verano" },
        ],
      },
      ARTDR: {
        label: "Drenaje artificial",
        type: "select",
        options: [
          { value: "1", label: "Sí" },
          { value: "2", label: "No" },
        ],
      },
      RESTREAT: {
        label: "Tratamiento de los residuos",
        type: "select",
        options: [
          { value: "1", label: "Ninguno, pastoreo" },
          { value: "2", label: "Quema" },
          { value: "3", label: "Enterrado" },
        ],
      },
      TILLPRAC: {
        label: "Tipo de laboreo",
        type: "select",
        options: [
          { value: "1", label: "Convencional" },
          { value: "2", label: "En franjas o zonas" },
          { value: "3", label: "De conservación" },
          { value: "4", label: "Mínimo" },
        ],
      },
    },
    Arenal: {
      FU: {
        label: "Unidad de campo a evaluar",
        type: "text",
      },
      CLIM: {
        label: "Estación Meteorológica",
        type: "select",
        options: [
          { value: "1", label: "Nueva" },
          { value: "2", label: "Cádiz" },
          { value: "3", label: "Córdoba" },
          { value: "4", label: "Sevilla" },
        ],
      },
      LAT: {
        label: "Latitud (30-45°)",
        type: "select",
        options: Array.from({ length: 16 }, (_, i) => ({
          value: `${30 + i}`,
          label: `${30 + i}°`,
        })),
      },
      Tmax: {
        label: "Temperatura máxima mensual (°C)",
        type: "multi-text",
        fields: [
          "janmax",
          "febmax",
          "marmax",
          "aprmax",
          "maymax",
          "junmax",
          "julmax",
          "augmax",
          "sepmax",
          "octmax",
          "novmax",
          "decmax",
        ],
      },
      Tmin: {
        label: "Temperatura mínima mensual (°C)",
        type: "multi-text",
        fields: [
          "janmin",
          "febmin",
          "marmin",
          "aprmin",
          "maymin",
          "junmin",
          "julmin",
          "augmin",
          "sepmin",
          "octmin",
          "novmin",
          "decmin",
        ],
      },
      Pmean: {
        label: "Precipitación total mensual (mm)",
        type: "multi-text",
        fields: [
          "janmean",
          "febmean",
          "marmean",
          "aprmean",
          "maymean",
          "junmean",
          "julmean",
          "augmean",
          "sepmean",
          "octmean",
          "novmean",
          "decmean",
        ],
      },
      PHYS: {
        label: "Fisiografía",
        type: "select",
        options: [
          { value: "1", label: "Llanuras holocénicas" },
          { value: "2", label: "Terrazas pleistocénicas" },
          { value: "3", label: "Superficies plio-pleistocénicas" },
          { value: "4", label: "Formaciones terciarias" },
        ],
      },
      WAT: {
        label: "Profundidad de la capa freática (cm)",
        type: "select",
        options: [
          { value: "1", label: "Baja (<50)" },
          { value: "2", label: "Moderada (50-120)" },
          { value: "3", label: "Elevada (>120)" },
        ],
      },
      TEX: {
        label: "Textura del suelo",
        type: "select",
        options: [
          { value: "1", label: "Ligera (<35)" },
          { value: "2", label: "Media (35-65)" },
          { value: "3", label: "Pesada (>65)" },
        ],
      },
      SAL: {
        label: "Salinidad (EC, dS/m)",
        type: "select",
        options: [
          { value: "1", label: "Nula o ligera (<4)" },
          { value: "2", label: "Moderada (4-8)" },
          { value: "3", label: "Elevada (>8)" },
        ],
      },
      PHCEC: {
        label: "pH y CCC (meq/100g)",
        type: "select",
        options: [
          { value: "1", label: "pH < 7" },
          { value: "2", label: "pH > 7 y CCC < 35" },
          { value: "3", label: "pH > 7 y CCC > 35" },
        ],
      },
      IRRSYS: {
        label: "Sistema de riego",
        type: "select",
        options: [
          { value: "1", label: "Sí" },
          { value: "2", label: "No" },
        ],
      },
      FARSYS: {
        label: "Sistema de cultivo",
        type: "select",
        options: [
          { value: "1", label: "Cultivos tradicionales" },
          { value: "2", label: "Cultivos frutales" },
          { value: "3", label: "Cultivos hortícolas" },
          { value: "4", label: "Cultivos inundables" },
        ],
      },
      ARTDRAI: {
        label: "Drenaje artificial",
        type: "select",
        options: [
          { value: "1", label: "Sí" },
          { value: "2", label: "No" },
        ],
      },
      WATEXT: {
        label: "Extracción de agua subterránea",
        type: "select",
        options: [
          { value: "1", label: "Sí" },
          { value: "2", label: "No" },
        ],
      },
    },
    Alcor: {
      UT: {
        label: "Unidad de campo a evaluar",
        type: "text",
      },
      CC: {
        label: "Contenido de arcilla (Wt-%)",
        type: "text",
      },
      SC: {
        label: "Contenido de limo (Wt-%)",
        type: "text",
      },
      OM: {
        label: "Contenido de materia orgánica (0-15 Wt-%)",
        type: "text",
      },
      STR: {
        label: "Estructura",
        type: "select",
        options: [
          { value: "sin", label: "Grano suelto" },
          { value: "coh", label: "Coherente" },
          { value: "pri", label: "Prismática" },
          { value: "pol", label: "En bloque" },
          { value: "sub", label: "Subangular" },
          { value: "cru", label: "Migajosa" },
        ],
      },
      STON: {
        label: "Pedregosidad del suelo (Vol-%)",
        type: "text",
      },
      BULK: {
        label: "Densidad aparente (1.3 - 2.1 g/cm³)",
        type: "text",
      },
      POROS: {
        label: "Porosidad total (Vol-%)",
        type: "text",
      },
      FC: {
        label: "Capacidad de campo (pF 2.5, Vol-%)",
        type: "text",
      },
      WP: {
        label: "Punto de marchitez (pF 4.2, Vol-%)",
        type: "text",
      },
      COND: {
        label: "Conductividad hidráulica a saturación (0.5-500 cm/d)",
        type: "text",
      },
      WL: {
        label: "Carga sobre las ruedas (<17 - >35 kN)",
        type: "text",
      },
      TIP: {
        label: "Presión de inflado de los neumáticos (<60 - >160 kPa)",
        type: "text",
      },
    },
    Aljarafe: {
      UT: {
        label: "Unidad de suelo a evaluar",
        type: "text",
      },
      CC: {
        label: "Contenido de arcilla (0.1 - 93.5%)",
        type: "text",
      },
      CEC: {
        label: "Capacidad de intercambio catiónico (0.2 - 34.9 meq/100g)",
        type: "text",
      },
      OM: {
        label: "Contenido de materia orgánica (0.1 - 4.5%)",
        type: "text",
      },
    },
    ImpelERO: {
      FU: {
        label: "Unidad de suelo a evaluar",
        type: "text",
        description: "Identificación de la unidad de suelo",
      },
      TEXT: {
        label: "Textura",
        type: "select",
        options: [
          { value: "S", label: "Arenosa" },
          { value: "SL", label: "Arcillo-arenosa" },
          { value: "LS", label: "Areno-arcillosa" },
          { value: "SICL", label: "Franco-arcillo-limosa" },
          { value: "SI", label: "Limosa" },
          { value: "SIL", label: "Franco-limosa" },
          { value: "L", label: "Franca" },
          { value: "CL", label: "Franco-arcillosa" },
          { value: "SCL", label: "Areno-franco-arcillosa" },
          { value: "C", label: "Arcillosa" },
          { value: "SIC", label: "Arcillo-limosa" },
          { value: "SC", label: "Arcillo-arenosa" },
        ],
      },
      STON: {
        label: "Pedregosidad superficial",
        type: "select",
        options: [
          { value: "D", label: "Dominante" },
          { value: "A", label: "Abundante" },
          { value: "M", label: "Mucha" },
          { value: "C", label: "Frecuente" },
          { value: "F", label: "Poca" },
          { value: "V", label: "Muy poca" },
          { value: "N", label: "Nula" },
        ],
      },
      DRA: {
        label: "Drenaje del suelo",
        type: "select",
        options: [
          { value: "R", label: "Muy rápido" },
          { value: "H", label: "Rápido" },
          { value: "M", label: "Moderado" },
          { value: "S", label: "Lento" },
          { value: "V", label: "Muy lento" },
        ],
      },
      TOP: {
        label: "Topografía",
        type: "select",
        options: [
          { value: "F", label: "Llana" },
          { value: "A", label: "Casi llana" },
          { value: "G", label: "Ligeramente ondulada" },
          { value: "U", label: "Moderadamente ondulada" },
          { value: "R", label: "Fuertemente ondulada" },
          { value: "H", label: "Acolinada" },
          { value: "S", label: "Quebrada" },
          { value: "M", label: "Montaño" },
        ],
      },
      // Otros factores del suelo aquí...
      LAT: {
        label: "Latitud",
        type: "select",
        options: [
          { value: "30", label: "30°" },
          { value: "31", label: "31°" },
          { value: "32", label: "32°" },
          { value: "33", label: "33°" },
          { value: "34", label: "34°" },
          { value: "35", label: "35°" },
          { value: "36", label: "36°" },
          { value: "37", label: "37°" },
          { value: "38", label: "38°" },
          { value: "39", label: "39°" },
          { value: "40", label: "40°" },
          { value: "41", label: "41°" },
          { value: "42", label: "42°" },
          { value: "43", label: "43°" },
          { value: "44", label: "44°" },
          { value: "45", label: "45°" },
        ],
      },
      CLIM: {
        label: "Estación meteorológica",
        type: "select",
        options: [
          { value: "1", label: "Nueva" },
          { value: "2", label: "Cádiz" },
          { value: "3", label: "Córdoba" },
          { value: "4", label: "Sevilla" },
        ],
      },

      Tmax: {
        label: "Temperatura máxima mensual (°C)",
        type: "table",
        fields: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
      },
      Tmin: {
        label: "Temperatura mínima mensual (°C)",
        type: "table",
        fields: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
      },
      Ptotal: {
        label: "Precipitación total mensual (mm)",
        type: "table",
        fields: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
      },



      LEAF: {
        label: "Duración de las hojas",
        type: "select",
        options: [
          { value: "P", label: "Perenne" },
          { value: "S", label: "Estacionaria" },
        ],
      },

      PLH: {
        label: "Altura de la planta (m)",
        type: "text",
        description: "Altura de la planta desde el suelo hasta el follaje",
      },
      RWS: {
        label: "Separación entre hileras (m)",
        type: "text",
        description: "Distancia entre hileras de cultivo",
      },
      RETR: {
        label: "Tratamiento de residuos",
        type: "select",
        options: [
          { value: "G", label: "Pastoreo" },
          { value: "B", label: "Quema" },
          { value: "N", label: "Ninguno" },
        ],
      },
      SOIL: {
        label: "Estabilizadores del suelo",
        type: "select",
        options: [
          { value: "Y", label: "Sí" },
          { value: "N", label: "No" },
        ],
      },
      BASY: {
        label: "Productividad básica (Mg/ha)",
        type: "text",
        description: "Producción media esperada de cultivo en la región",
      },
      ESTY: {
        label: "Productividad estimada (Mg/ha)",
        type: "text",
        description: "Producción estimada del cultivo en la unidad evaluada",
      },
      TISY: {
        label: "Sistema de labranza",
        type: "select",
        options: [
          { value: "N", label: "De conservación" },
          { value: "M", label: "Mixto" },
          { value: "B", label: "En banda" },
          { value: "C", label: "Según curvas de nivel" },
          { value: "T", label: "Tradicional" },
        ],
      },
      IT: {
        label: "Tipo de implemento",
        type: "select",
        options: [
          { value: "BL", label: "Grada de discos" },
          { value: "CH", label: "Arado de cincel" },
          { value: "D4", label: "Grada de discos medianos" },
          { value: "D5", label: "Grada de discos grandes" },
          { value: "DC", label: "Cultivador de discos" },
          { value: "DO", label: "Arado de discos" },
          { value: "DV", label: "Sembradora convencional" },
          { value: "DD", label: "Sembradora en surcos profundos" },
          { value: "DF", label: "Sembradora en surcos semi-profundos" },
          { value: "FA", label: "Abonadora" },
          { value: "FH", label: "Cultivador de palas" },
          { value: "FS", label: "Cultivador con rastrillo" },
          { value: "HR", label: "Rastro de rodillo" },
          { value: "HS", label: "Rastro de dientes" },
          { value: "LI", label: "Arado" },
          { value: "MT", label: "Troceadora" },
          { value: "PB", label: "Plantadora" },
          { value: "PR", label: "Plantadora en líneas" },
          { value: "P1", label: "Arado de vertedera mediana" },
          { value: "P2", label: "Arado de vertedera grande" },
          { value: "RP", label: "Escardadora de varillas" },
          { value: "RS", label: "Escardadora" },
          { value: "SI", label: "Fumigadora" },
          { value: "SW", label: "Rastrillo" },
        ],
      },
      TIME: {
        label: "Número de veces",
        type: "text",
        description: "Frecuencia con la que se repite la operación",
      },
      WC: {
        label: "Consideración de manejabilidad",
        type: "select",
        options: [
          { value: "Y", label: "Sí" },
          { value: "N", label: "No" },
        ],
      },

    },


  };

  // Manejo de cambios en los campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Enviar datos procesados
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = evaluateModel(model, formData);
    onSubmit({ model, resultado: result });
  };


  const fields = modelFields[model] || {};

  return (
    <Box sx={{ maxWidth: 884, margin: "auto", padding: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Modelo {model}
      </Typography>
      <form onSubmit={handleSubmit}>
        {Object.entries(fields).map(([key, field]) => {
          if (field.type === "text") {
            return (
              <TextField
                key={key}
                fullWidth
                label={field.label}
                name={key}
                value={formData[key] || ""}
                onChange={handleChange}
                margin="normal"
                required
              />
            );
          } else if (field.type === "select") {
            return (
              <FormControl key={key} fullWidth margin="normal">
                <InputLabel>{field.label}</InputLabel>
                <Select
                  name={key}
                  value={formData[key] || ""}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="">
                    <em>Seleccione</em>
                  </MenuItem>
                  {field.options.map((option, index) => {
                    // Si la opción es un objeto con `value` y `label`
                    if (typeof option === "object" && option.value !== undefined) {
                      return (
                        <MenuItem key={index} value={option.value}>
                          {option.label}
                        </MenuItem>
                      );
                    }
                    // Si la opción es una cadena de texto
                    return (
                      <MenuItem key={index} value={option}>
                        {option}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            );
          } else if (field.type === "monthly") {
            return (
              <Box key={key} marginBottom={3}>
                <Typography>{field.label}</Typography>
                <Box display="flex" justifyContent="space-between">
                  {Array.from({ length: 12 }, (_, i) => {
                    const month = [
                      "Ene",
                      "Feb",
                      "Mar",
                      "Abr",
                      "May",
                      "Jun",
                      "Jul",
                      "Ago",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dic",
                    ][i];
                    return (
                      <TextField
                        key={`${key}-${i}`}
                        label={month}
                        name={`${key}-${i}`}
                        value={formData[`${key}-${i}`] || ""}
                        onChange={handleChange}
                        type="number"
                        style={{ width: "7%" }}
                      />
                    );
                  })}
                </Box>
              </Box>
            );
          }
          return null;
        })}


        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
          <Button type="submit" variant="contained" color="primary">
            Ejecutar
          </Button>
        </Box>
      </form>
    </Box>
  );
}