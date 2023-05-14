import Pokecard from "./Pokecard";

function Pokedex(props) {
  const { cards, total_points, isWinner } = props;

  const display_cards = cards.map((x) => (
    <Pokecard id={x.id} name={x.name} type={x.type} exp={x.base_experience} />
  ));

  let resultMsg;
  if (isWinner) {
    resultMsg = <h2 className="Pokedex-winner">You Won!</h2>;
  } else {
    resultMsg = <h2 className="Pokedex-loser">You lost...</h2>;
  }

  return (
    <div className="Pokedex">
      <h1>Pokedex</h1>
      <h3>Total Points: {total_points}</h3>
      {resultMsg}
      <div className="Pokedex-cards">{display_cards}</div>
    </div>
  );
}

export default Pokedex;
