import React from "react";
import { Link } from "react-router-dom";
import menuItems from "./menu_data";


const Dinner = () => {
    const menuList = menuItems.filter((item) => item.category === 'dinner')
  return (
    <div className="mt-20 mb-10">
      <h1 className="mb-8 text-xl font-bold text-center text-green-400 uppercase md:text-3xl">Dinner Menu</h1>
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

export default Dinner;
