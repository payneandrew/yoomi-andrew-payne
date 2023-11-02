import React from "react";
import ReactDOM from "react-dom/client";
import WorkoutDetails from "./components/WorkoutDetails";
import { metadata } from "./data/metadata";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <WorkoutDetails metadata={metadata} />
  </React.StrictMode>
);
