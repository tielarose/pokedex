function Pokecard(props) {
  const { id, name, type, base_experience } = props;
  const img_url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div>
      <h3>{name}</h3>
      <img src={img_url} />
      <p>type: {type}</p>
      <p>EXP: {base_experience}</p>
    </div>
  );
}

export default Pokecard;
