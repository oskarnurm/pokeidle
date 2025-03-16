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
