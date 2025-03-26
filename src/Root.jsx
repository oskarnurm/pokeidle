import './app.css'
import { Game } from "./gamePresenter.jsx"
import { observer } from "mobx-react-lite";

const app = observer(function app(props) {
  return (
    <>
      <div>
        <Game model={props.model} />
      </div>
    </>
  )
});

export default app
