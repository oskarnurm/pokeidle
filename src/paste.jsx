// root
import './App.css'
import { Game } from "./gamePresenter.jsx"
import { observer } from "mobx-react-lite";

const App = observer(function App(props) {
  return (
    <>
      <div>
        <Game model={props.model} />
      </div>
    </>
  )
});

export default App

// reactive model
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


/* 
   The Model keeps the state of the application (Application State). 
   It is an abstract object, i.e. it knows nothing about graphics and interaction.
*/
const model = {
  game: "PokeIdle",
  url: "https://pokeapi.co/api/v2/pokemon/pikachu",
  data: "",

  async getData() {
    const response = await fetch(this.url);
    this.data = await response.json();
    console.log(this.data);
  },
};

export { model };

// presenter
import { GameView } from "./gameView.jsx";
import { observer } from "mobx-react-lite";

const Game = observer(function GameRender(props) {
  return (
    <GameView
      onButtonClick={getDataACB}
    />
  );
  function getDataACB() {
    props.model.getData()
  }
});

export { Game };


// view
export function GameView(props) {
  return (
    <div>
      The data is:
      <button onClick={handleClick}>Get Data</button>
    </div >
  );
  function handleClick() {
    props.onButtonClick();
  }
}
