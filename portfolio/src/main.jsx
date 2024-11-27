import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <StrictMode>
      <App />
      < SpeedInsights />
    </StrictMode>
  </NextUIProvider>
);
