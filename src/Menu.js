import React from "react";

const Menu = ({ id, title, category, price, img, desc }) => {
  return (
    <div className="foodContainer">
      <img className="foodImage" src={img} />
      <div className="infoContainer">
        <div className="foodHeader">
          <p className="foodName">
            {title.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
              letter.toUpperCase()
            )}
          </p>
          <p className="foodPrice">${price}</p>
        </div>
        <p className="foodInfo">{desc}</p>
      </div>
    </div>
  );
};

export default Menu;
