import Pokecard from "./Pokecard";

function Pokedex(props) {
  return (
    <div className="Pokedex">
      <h1>Pokedex</h1>
      <div className="Pokedex-cards">
        <Pokecard id={1} name="test" type="water" base_experience={85} />
      </div>
    </div>
  );
}

export default Pokedex;
