import React from "react";
import ReactDOM from "react-dom/client";
import "../src/assets/styles/css/main.css";
import App from "./App";
import { AuthContextProvider } from "./contexts/AuthContext";
import { BookingContextProvider } from "./contexts/BookingContext";
import { UserContextProvider } from "./contexts/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <UserContextProvider>
        <BookingContextProvider>
          <App />
        </BookingContextProvider>
      </UserContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
