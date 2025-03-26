import { GameView } from "./gameView.jsx";
import { observer } from "mobx-react-lite";

const Game = observer(function GameRender(props) {
  return (
    <GameView
      onButtonClick={getDataACB}
      data={props.model.pokemonPromiseState.data}
    />
  );
  function getDataACB() {
    props.model.getData("pikachu")
  }
});

export { Game };
