import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProductProvider } from "./contexts/product-contex.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ToastContainer
          position="top-center"
          pauseOnHover={false}
          theme="colored"
          draggable={true}
          style={{ zIndex: 9999 }}
        />
        <ProductProvider>
          <App />
        </ProductProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
