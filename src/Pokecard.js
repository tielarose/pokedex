function Pokecard(props) {
  function pad_to_3_digits(num) {
    return num.toLocaleString("en-US", {
      minimumIntegerDigits: 3,
      useGrouping: false
    });
  }

  const { id, name, type, exp } = props;
  const id_3_dig = pad_to_3_digits(id);
  const img_url = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id_3_dig}.png`;

  return (
    <div className="Pokecard">
      <h3>{name}</h3>
      <img src={img_url} />
      <p>type: {type}</p>
      <p>EXP: {exp}</p>
    </div>
  );
}

export default Pokecard;
