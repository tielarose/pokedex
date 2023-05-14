function x_random_items(items_list, num_items) {
  const rand_items = [];

  const list_copy = [...items_list];

  while (rand_items.length < num_items) {
    const rand_ind = Math.floor(Math.random() * list_copy.length);
    rand_items.push(list_copy[rand_ind]);
    list_copy.splice(rand_ind, 1);
  }

  return rand_items;
}

export default x_random_items;
