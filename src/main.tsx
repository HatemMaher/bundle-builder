import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

import { BuilderProvider } from "./context/BuilderContext";
import { AccordionProvider } from "./context/accordionContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BuilderProvider>
    <AccordionProvider>
        <App />
    </AccordionProvider>
</BuilderProvider>
  </React.StrictMode>
);