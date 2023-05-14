import Pokecard from "./Pokecard";

function Pokedex(props) {
  return (
    <>
      <h1>Pokedex</h1>
      <Pokecard id={1} name="test" type="water" base_experience={85} />
    </>
  );
}

export default Pokedex;
