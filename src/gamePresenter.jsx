import { GameView } from "./gameView.jsx";
import { observer } from "mobx-react-lite";

export const Game = observer(function GameRender(props) {
  return (
    <GameView
      onButtonClick={getDataACB}
      data={props.model.getName()}
    />
  );
  function getDataACB() {
    props.model.loadData("pikachu")
  }
});

