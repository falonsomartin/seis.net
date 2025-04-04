import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./AppContext"; // Asegúrate de importar esto
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider> {/* Asegúrate de envolver App con AppProvider */}
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();