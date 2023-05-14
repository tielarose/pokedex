import Pokecard from "./Pokecard";

function Pokedex(props) {
  const { cards, total_points } = props;

  const display_cards = cards.map((x) => (
    <Pokecard id={x.id} name={x.name} type={x.type} exp={x.base_experience} />
  ));

  return (
    <div className="Pokedex">
      <h1>Total Points: {total_points}</h1>
      <div className="Pokedex-cards">{display_cards}</div>
    </div>
  );
}

export default Pokedex;
