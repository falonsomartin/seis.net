import React, { useEffect, useState } from "react";

const decodeToUTF8 = (text) => {
  // Decodificar el texto a UTF-8
  const decoder = new TextDecoder("windows-1252"); // Cambiar según la codificación original
  const encoder = new TextEncoder();
  const encodedText = encoder.encode(text);
  return decoder.decode(encodedText);
};

const replaceSpecialCharacters = (text) => {
  const replacements = {
    "Ã¡": "á",
    "Ã©": "é",
    "Ã­": "í",
    "Ã³": "ó",
    "Ãº": "ú",
    "Ã": "Á",
    "Ã‰": "É",
    "Ã": "Í",
    "Ã“": "Ó",
    "Ãš": "Ú",
    "Ã±": "ñ",
    "Ã‘": "Ñ",
    "Â¿": "¿",
    "Â¡": "¡",
    "Â°": "°",
    "Âª": "ª",
    "Âº": "º",
    "â": "’",
    "â": "“",
    "â": "”",
    "â": "–",
    "â": "—",
    "â¦": "…",
    "Â·": "·",
    "�": "", // Caracteres desconocidos
  };

  return text.replace(/Ã¡|Ã©|Ã­|Ã³|Ãº|Ã|Ã‰|Ã|Ã“|Ãš|Ã±|Ã‘|Â¿|Â¡|Â°|Âª|Âº|â|â|â|â|â|â¦|Â·|�/g, (match) => {
    return replacements[match] || match;
  });
};

const LoadIncFile = ({ filePath }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/${filePath}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo cargar el archivo.");
        }
        return response.text();
      })
      .then((data) => {
        // Convertir a UTF-8 y reemplazar caracteres incorrectos
        const utf8Content = decodeToUTF8(data);
        const fixedContent = replaceSpecialCharacters(utf8Content);
        setContent(fixedContent);
      })
      .catch((error) => {
        console.error("Error al cargar el archivo:", error);
      });
  }, [filePath]);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: content }} // Renderiza el contenido como HTML
      style={{ color: "#000080", fontFamily: "Verdana" }} // Estilos predeterminados
    />
  );
};

export default LoadIncFile;