import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "../src/Style.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  //StrictMode ajuda o desenvolvedor caso ocorra erros
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
