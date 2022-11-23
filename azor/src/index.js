import React from "react";
import ReactDOM from "react-dom/client";
import "../src/assets/styles/css/main.css";
import App from "./App";
import BookingContextProvider from "./components/contexts/BookingContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BookingContextProvider>
      <App />
    </BookingContextProvider>
  </React.StrictMode>
);
