import { GameView } from "./gameView.jsx";
import { observer } from "mobx-react-lite";

export const Game = observer(function GameRender(props) {
  function handleSearchChange(query) {
    props.model.updateSearchQuery(query);
  }

  return (
    <GameView
      onButtonClick={getDataACB}
      data={props.model.getName()}
      query={props.model.searchQuery}
      onSearchChange={handleSearchChange}
      filteredList={props.model.getFilteredList()}
    />
  );
  function getDataACB() {
    props.model.loadPokemonList();
  }
});

