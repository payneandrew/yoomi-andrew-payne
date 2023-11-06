import React from "react";
import ReactDOM from "react-dom/client";
import ExerciseCatalog from "./components/ExerciseCatalog";
import ExerciseDetails from "./components/ExerciseDetails";
import Layout from "./components/Layout";
import { metadata } from "./data/metadata";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Layout>
      <ExerciseCatalog />
      <ExerciseDetails metadata={metadata} />
    </Layout>
  </React.StrictMode>
);
