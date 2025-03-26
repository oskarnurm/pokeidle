export function GameView(props) {
  // When the input changes, notfity the presenter
  function handleInputChange(evt) {
    props.onSearchChange(evt.target.value);
  }

  return (
    <div>
      <button onClick={handleClick}>Get Data</button>
      <br />
      Search
      <input
        type="search"
        onChange={handleInputChange}
        value={props.query || ""}
        placeholder="Type a Pokémon name..."
      />
      <h3>Items:</h3>
      {props.filteredList.map(item => (
        <div key={item.name}>{item.name}</div>
      ))}
      <form>
      </form>
    </div >
  );
  function handleClick() {
    props.onButtonClick();
  }
}
