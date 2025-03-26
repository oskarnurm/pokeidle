import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { observable, configure } from "mobx";
import './index.css'
import App from './Root.jsx'
// Get the application state (model)
import { model } from "./gameModel.js";

const reactiveModel = observable(model);

// Disable Mobx actions
configure({ enforceActions: "never" });

// Pass the reactive model as a prop
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App model={reactiveModel} />
  </StrictMode>,
)
