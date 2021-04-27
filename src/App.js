import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [food, setFood] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setFood(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setFood(newItems);
  };

  return (
    <main>
      <section>
        <h2>Our Menu</h2>
        <Categories categories={categories} filterItems={filterItems} />

        <Menu items={food} />
      </section>
    </main>
  );
}

export default App;
