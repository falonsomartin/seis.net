import React from "react";
import { useAppContext } from "./AppContext";
import Nav from "./components/navbar/Nav";
import PhotosData from "./components/photosData/PhotosData";
import Explanation from "./components/explanation/Explanation";
import Mapoteca from "./components/mapoteca/Mapoteca";
import Principal from "./components/ppal/Principal";
import OtherData from "./components/otherData/OtherData";

function App() {
  const { activeSection } = useAppContext();

  const renderComponent = () => {
    console.log(activeSection)
    switch (activeSection) {
      case "inicio":
        return <div><h2 style={{ textAlign: "center" }}>SEIS.net</h2><h4 style={{ textAlign: "center" }}>Sistema Español de Información de Suelos sobre Internet</h4></div >;

      case "principal":
        return <Principal />;
      case "fotos":
        return <PhotosData />;
      case "explicacion":
        return <Explanation />;
      case "mapoteca":
        return <Mapoteca />;
      case "clima":
        return <OtherData />;
      default:
        return <div><h2 style={{ textAlign: "center" }}>SEIS.net</h2><h4 style={{ textAlign: "center" }}>Sistema Español de Información de Suelos sobre Internet</h4></div >;
    }
  };

  return (
    <div className="app">
      <Nav />
      <main>{renderComponent()}</main>
    </div>
  );
}

export default App;