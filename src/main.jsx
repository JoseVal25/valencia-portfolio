import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Layout from "./components/layout";
import { Canvas } from "@react-three/fiber";
import Flower from "./components/three/Flower";
import FlowerModel from "./components/three/FlowerModel";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <div className="canvas">
      <Canvas>
        <ambientLight castShadow />
        <pointLight castShadow position={[0, 3, 0]} />

        {/* <FlowerModel /> */}
      </Canvas>
    </div>

    <React.StrictMode>
      <Layout />
    </React.StrictMode>
  </>
);
