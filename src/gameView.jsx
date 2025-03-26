export function GameView(props) {
  return (
    <div>
      <button onClick={handleClick}>Get Data</button>
      <p>
        The data is: <span>{props.data}</span>
      </p>
    </div >
  );
  function handleClick() {
    props.onButtonClick();
  }
}
