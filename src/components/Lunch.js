import React from "react";
import { Link } from "react-router-dom";
import menuItems from "./menu_data";


const Lunch = () => {
    const menuList = menuItems.filter((item) => item.category === 'lunch')
  return (
    <div className="mt-20 mb-10 ">
      <h1 className="mb-8 text-xl font-bold text-center text-green-400 uppercase md:text-3xl">Lunch Menu</h1>
      <section className="">
       {menuList.map((listItem) => {
           return (
            <div key={listItem.id}>
                <img src={listItem.img} alt={listItem.title} />
                <h3>{listItem.title}</h3>
                <p>{listItem.desc}</p>
            </div>
           )
       })}
      </section>

      <Link to="/order">
        <button>
          Order
        </button>
      </Link>
    </div>
  );
};

export default Lunch;
