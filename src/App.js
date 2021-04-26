import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [food, setFood] = useState(items);
  const [all, setAll] = useState(true);
  const [breakfast, setBreakfast] = useState(false);
  const [lunch, setLunch] = useState(false);
  const [shakes, setShakes] = useState(false);

  return (
    <main>
      <section>
        <h2>Our Menu</h2>
        <div className="btnContainer">
          <button className="category" onClick={() => setAll(!all)}>
            All
          </button>
          <button className="category" onClick={() => setBreakfast(!breakfast)}>
            Breakfast
          </button>
          <button className="category" onClick={() => setLunch(!lunch)}>
            Lunch
          </button>
          <button className="category" onClick={() => setShakes(!shakes)}>
            Shakes
          </button>
        </div>
        <div className="gridContainer">
          {food.map((item) => {
            const { id, title, category, price, img, desc } = item;
            return (
              <Menu
                id={id}
                title={title}
                category={category}
                price={price}
                img={img}
                desc={desc}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
