import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-omdimpjavksy4zss.us.auth0.com"
      clientId="rACOvNW60K8JbPtt08OM3kH8iivlzhV8"
      // authorizationParams={{
        //   redirect_uri: window.location.origin,
        // }}
        >
      <BrowserRouter>
      <App />
    </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);
