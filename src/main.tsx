import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { observable, configure, reaction } from "mobx";
import './index.css'
import App from './App.tsx'

// Get the application state (model)
import { model } from "./Model.ts";
const reactiveModel = observable(model);

// Pass the reactive model as a prop
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App model={reactiveModel} />
  </StrictMode>,
)
