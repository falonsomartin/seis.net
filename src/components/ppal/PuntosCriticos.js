import React, { useState } from "react";
import { Tabs, Tab, Box, Typography, Grid } from "@mui/material";

const PuntosCriticos = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };



  return (
    <Box>
      {/* Tabs Principales */}
      <Tabs value={activeTab} onChange={handleTabChange} centered>
        <Tab label="Recursos Terrestres" />
        <Tab label="Recursos Hídricos" />
        <Tab label="Nutrientes de Plantas" />
      </Tabs>

      {/* Contenido */}
      <Box p={3}>
        {activeTab === 0 && <RecursosTerrestres />}
        {activeTab === 1 && <RecursosHidricos />}
        {activeTab === 2 && <NutrientesPlantas />}
      </Box>
    </Box>
  );
};

// Subcomponente Recursos Terrestres
const RecursosTerrestres = () => (
  <Box>
    <Typography variant="h5" gutterBottom>
      Puntos Críticos en los Recursos Terrestres
    </Typography>
    <Typography paragraph>
      <strong>El desastre minero Aznalcóllar-Doñana</strong>
    </Typography>
    <Typography paragraph>
      En abril de 1998 se produjo el principal desastre ecológico ocurrido en
      España ocasionado a partir de la rotura de una balsa en las instalaciones
      mineras de la empresa Boliden-Apirsa en Aznalcóllar, Huelva.
    </Typography>
    <Typography paragraph>
      Como consecuencia de la rotura de la balsa, la cual contenía sólidos
      sedimentados (pirita) y agua con diversos metales en disolución, se vierte
      un volumen de 2 hm³ de lodos y 3 hm³ de agua moderadamente ácida.
    </Typography>
    <Typography paragraph>
      Los efectos inmediatos del vertido de agua y lodo son el desbordamiento del río
      Guadiamar afectando a la ribera fluvial, a las tierras colindantes y a los hábitats
      allí asentados. La superficie total afectada es de 4.286 hectáreas repartidas entre
      los diez municipios afectados.
    </Typography>
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item style={{ width: "50%" }}>
        <img src="/ppal/ptoscriticos/LODOS3.jpg" alt="Lodos 3" width="100%" />
      </Grid>
      <Grid item style={{ width: "50%" }}>
        <img src="/ppal/ptoscriticos/LODOS2.jpg" alt="Lodos 2" width="100%" />
      </Grid>
    </Grid>
    &nbsp;&nbsp;
    <Typography paragraph>
      Las primeras medidas de emergencia adoptadas tratan de evitar la entrada de estas aguas
      en el Parque Nacional de Doñana y la extensión de la contaminación a nuevas áreas.
      Una vez controlada la riada producida se inicia el estudio de las aguas para su
      depuración físico-química.
    </Typography>
    <Typography paragraph>
      <strong>Superficies afectadas (ha):</strong>
    </Typography>
    <ul>
      <li>Superficie total evaluada: 4634,2</li>
      <li>Superficie total de zona afectada: 4286,4</li>
      <li>Parque Natural de Doñana: 2256,4</li>
      <li>Espacios Naturales Protegidos evaluados: 2354,4</li>
    </ul>
    <Typography paragraph>
      Con la situación controlada se hace una evaluación de riesgos potenciales entre los que deberíamos destacar la contaminación del suelo y del subsuelo. Corregir los efectos negativos ambientales, agrarios y socioeconómicos, por tanto, son uno de los primeros objetivos de intervención. Para este fin se desarrolla el programa de regeneración de los terrenos afectados en el que se recogen cuatro actuaciones principales: evaluación de superficies afectadas, retirada de cosechas afectadas, retirada de lodos y caracterización y recuperación de suelos.
    </Typography>
    <Typography paragraph>
      Con la evaluación de superficies afectadas se cuantifica la tipología de usos del suelo y de coberturas vegetales afectadas con el vertido. Para este proceso se emplean imágenes de satélite de diferentes fechas, elaborándose una cartografía de usos de suelo previa, y se delimita el área afectada por el vertido.
    </Typography>
    <ul>

    </ul>
    <Typography paragraph>
      La retirada de cosechas afectadas por el vertido, otra de las actuaciones dentro del programa de regeneración de los terrenos afectados, se llevó a cabo con el fin de evitar la comercialización de productos de la zona contaminada.    </Typography>
    <Typography paragraph>
      La tercera de las actuaciones realizadas tenía como objeto la retirada de aguas y lodos de las tierras afectadas. Mediante reconocimiento de campo y análisis se determinó el grado de contaminación de cada suelo. Se estima en 6 hm3 la cantidad de material retirado mediante la utilización de la maquinaria apropiada.
    </Typography>
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item style={{ width: "50%" }}>
        <img src="/ppal/ptoscriticos/LODOS1.jpg" alt="Lodos 1" width="100%" />
      </Grid>
      <Grid item style={{ width: "50%" }}>
        <img src="/ppal/ptoscriticos/LODOS4.jpg" alt="Lodos 4" width="100%" />
      </Grid>
    </Grid>
    &nbsp;&nbsp;

    <Typography paragraph>
      Con la caracterización y recuperación de suelos, última de las actuaciones llevadas a cabo dentro del programa de regeneración de los terrenos afectados, se pretende localizar aquellos suelos en los que ha podido producirse contaminación residual. Se caracateriza la afección de los suelos con vistas a una posterior definición de las medidas correctoras a emplear sobre los suelos en función del uso objetivo que se vaya a dar a los mismos.    </Typography>
  </Box>
);

// Subcomponente Recursos Hídricos
const RecursosHidricos = () => (
  <Box>
    <Typography variant="h5" gutterBottom>
      Puntos Críticos en los Recursos Hídricos
    </Typography>
    <Typography paragraph>
      <strong>La recurrente sequía</strong>
    </Typography>
    <Typography paragraph>
      España es un país con una climatología muy peculiar. La mitad de su territorio registra precipitaciones de lluvia por debajo de los 600 mm y dentro de esta mitad, hay regiones consideradas como semi-áridas por no tener lluvias por encima de los 200 mm.
    </Typography>
    <Typography paragraph>
      Pero algunas veces el agua, un recurso escaso, se presenta en cantidades excesivas. Las lluvias torrenciales unidas al relieve acentuado y a la pobreza de la cobertura vegetal hacen que las inundaciones sean un problema recurrente.    </Typography>
    <Typography paragraph>
      Por término medio, en España, cada año cinco se producen inundaciones, con los problemas por pérdidas en vidas humanas y los daños económicos que ello ocasiona.

    </Typography>
    <Typography paragraph>
      Por otro lado nos encontramos que con cierta regularidad en buena parte del sur de España aparecen periodos secos de varios años. Concretamente tenemos el ejemplo de Sevilla y su entorno, en donde la sequía puede llegar a considerarse como un fenómeno habitual, pues en los últimos 25 años se han sucedido tres largos e intensos periodos de escasez de lluvias (1975-1976, 1981-1983, 1992-1995). Esto conlleva la aparición de desajustes entre la demanda y la oferta en cuanto a las necesidades de aguas para abastecimientos y otros usos, que han requerido la adopción de medidas extraordinarias para ajustar el consumo a los escasos recursos disponibles.

    </Typography>
    <Typography paragraph>
      Los periodos con largas sequías tienen una incidencia grave sobre los recursos hídricos almacenados. Los embalses que sirven a las poblaciones van perdiendo los recursos disponibles de una manera progresiva, que se ve acentuada por la falta prolongada de precipitaciones en dichos embalses. Sólo una gestión eficaz y una concienciación de la población puede propiciar una reducción de los consumos que permitan mantener un suministro de agua básico mientras se produce un cambio de la tendencia seca.

    </Typography>
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item style={{ width: "50%" }}>
        <img src="/ppal/ptoscriticos/EMBALSE1.gif" alt="Embalse Normalidad" width="50%" />
      </Grid>
      <Grid item style={{ width: "50%" }}>
        <img src="/ppal/ptoscriticos/EMBALSE2.gif" alt="Embalse Sequía" width="50%" />
      </Grid>
    </Grid>
    &nbsp;&nbsp;
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item style={{ width: "50%" }}>
        <img src="/ppal/ptoscriticos/ARROZ1.gif" alt="Cultivos Arroz" width="50%" />
      </Grid>
      <Grid item style={{ width: "50%" }}>
        <img src="/ppal/ptoscriticos/ARROZ2.gif" alt="Arrozales Estiaje" width="50%" />
      </Grid>
    </Grid>
    &nbsp;&nbsp;
    <Typography paragraph>
      En estas condiciones se hace imprescindible regular los escasos recursos hídricos de los que se dispone. Las medidas más importantes destinadas a conseguir una reducción en el consumo, cuando la situación de falta de lluvias se prolonga, pasan por las restricciones en el suministro del agua en determinadas horas, la prohibición de la utilización del agua para actividades particulares, como llenado de piscinas, riego de jardines y demás usos no imprescindibles. Sólo de este modo pueden garantizarse unos suministros básicos mientras dura el periodo seco.

    </Typography>

  </Box>
);

// Subcomponente Nutrientes de Plantas
const NutrientesPlantas = () => (
  <Box>
    <Typography variant="h5" gutterBottom>
      Puntos Críticos en los Nutrientes de Plantas
    </Typography>
    <Typography paragraph>
      <strong>Un mar de plástico</strong>
    </Typography>
    <Typography paragraph>
      En la década de los setenta la provincia de Almería, en el sudeste español, se encontraba en los últimos lugares del ranking de productividad agraria. La introducción de nuevas técnicas, principalmente la utilización del plástico (de manera mayoritaria para invernaderos), ha cambiado este panorama. Esta transformación, que en lo que respecta a la productividad agraria ha sido extraordinariamente positiva, ha generado nuevos conflictos de intereses entre la necesidad de continuar con el desarrollo económico de la región y su compatibilización con la conservación medioambiental.
    </Typography>
    <Typography paragraph>
      En este apartado se abordan los aspectos negativos ocasionados por la introducción masiva del plástico en la agricultura almeriense, dejando los aspectos positivos de esta transformación para ser abordados en el apartado de Puntos sobresalientes en los nutrientes de plantas.    </Typography>
    <Typography paragraph>
      De los diferentes problemas generados, dos son básicamente los aspectos negativos ligados a la utilización del plástico en la actividad agraria almeriense: la alteración paisajística (fuerte impacto visual) y la generación de gran cantidad de residuos plásticos de difícil eliminación.

    </Typography>
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item style={{ width: "50%" }}>
        <img src="/ppal/ptoscriticos/PLASTI10.jpg" alt="Cultivos en Almería" width="50%" />
      </Grid>
    </Grid>
    &nbsp;&nbsp;
    <Typography paragraph>
      En la provincia de Almería en el año 1994 la superficie cubierta con plásticos era de 24.000 hectáreas. Esta actividad agraria intensiva genera un residuo plástico evaluado en unas 18.000 toneladas métricas por año. El destino final de estos residuos es diferente: unas 5.000 toneladas son tratadas por los recicladores locales, otras 6.000 toneladas son tratadas por recicladores de fuera de Almería. De las 7.000 toneladas que restan se calculan en 2.000 toneladas las que son abandonadas y dispersadas por el viento o mezcladas con otros residuos. Las últimas 5000 toneladas son incineradas de manera controlada, aunque antiguamente eran quemadas por los agricultores, lo que provocaba una fuerte y peligrosa contaminación atmosférica dado que producían emisiones de diversas sustancias peligrosas.
    </Typography>
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item style={{ width: "25%" }}>
        <img src="/ppal/ptoscriticos/PLASTIC1.jpg" alt="Acumulación plásticos" width="50%" />
      </Grid>
      <Grid item style={{ width: "25%" }}>
        <img src="/ppal/ptoscriticos/PLASTIC2.jpg" alt="Recogida plásticos" width="50%" />
      </Grid>
    </Grid>
    &nbsp;&nbsp;
    <Typography paragraph>
      A todo esto habría que añadir los impactos generados en el medio ambiente por los residuos producidos en las explotaciones agrícolas, importantes y múltiples, que son de tipo higiénico-sanitario, atmosférico, riesgos de incendio, contaminación animal por plaguicidas, propagación de plagas y contaminación de aguas superficiales y subterráneas.
    </Typography>
    <Typography paragraph>
      Para terminar este punto mencionar de nuevo la alteración paisajística producida, apuntar el problema que ocasiona una presión tan intensa sobre los recursos y una densidad de estructuras tan fuerte sobre el territorio. Se hace necesario un planeamiento territorial similar al que se realiza en el suelo urbano, a fin de racionalizar los usos y superar la masificación actual.
    </Typography>
  </Box>
);

export default PuntosCriticos;