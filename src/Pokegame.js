import Pokedex from "./Pokedex";
import x_random_items from "./functions";

function Pokegame(props) {
  const poke_list = [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 }
  ];

  const hand1_cards = x_random_items(poke_list, 4);
  const hand1_total_points = hand1_cards.reduce(
    (sum, card) => sum + card.base_experience,
    0
  );

  const hand2_cards = x_random_items(poke_list, 4);
  const hand2_total_points = hand2_cards.reduce(
    (sum, card) => sum + card.base_experience,
    0
  );

  return (
    <>
      <Pokedex
        key="player1"
        cards={hand1_cards}
        total_points={hand1_total_points}
        isWinner={hand1_total_points > hand2_total_points}
      />
      <Pokedex
        key="player2"
        cards={hand2_cards}
        total_points={hand2_total_points}
        isWinner={hand2_total_points > hand1_total_points}
      />
    </>
  );
}

export default Pokegame;
