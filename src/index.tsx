import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/Layout";
import WorkoutDetails from "./components/WorkoutDetails";
import { metadata } from "./data/metadata";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Layout>
      <WorkoutDetails metadata={metadata} />
    </Layout>
  </React.StrictMode>
);
