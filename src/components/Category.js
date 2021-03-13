import React from "react";
import { Link } from "react-router-dom";
import breakfast from "../assets/imgs/breakfast.png";
import lunch from "../assets/imgs/lunch.png";
import dinner from "../assets/imgs/dinner.png";

const Category = ({ addmealCategory, mealCategory }) => {
  const categories = [
    {
      id: 1,
      name: "flex",
      divClasses:
        "cursor-pointer bg-yellow-400 bg-opacity-70 px-8 py-8 w-full relative text-center mx-auto flex flex-row justify-between items-center ",
      pClasses:
        "uppercase text-center text-base md:text-xl tracking-widest text-gray-900 font-semibold",
      img: dinner,
      imgClasses: "w-24 md:w-32 lg:w-48",
    },
    {
      id: 2,
      name: "breakfast",
      divClasses:
        "cursor-pointer bg-middleblue bg-opacity-70 w-full px-8 py-8 relative text-center mx-auto flex flex-row justify-between items-center",
      pClasses:
        "uppercase text-center text-base md:text-xl tracking-widest text-gray-900 font-bold",
      img: breakfast,
      imgClasses: "w-28 md:w-32 lg:w-48",
    },
    {
      id: 3,
      name: "lunch",
      divClasses:
        "cursor-pointer bg-green-300 bg-opacity-70 w-full px-8 py-8 relative text-center mx-auto  flex flex-row justify-between items-center",
      pClasses:
        "uppercase text-center text-base md:text-xl tracking-widest text-gray-900 font-bold",
      img: lunch,
      imgClasses: "w-24 md:w-32 lg:w-48",
    },
    {
      id: 4,
      name: "dinner",
      divClasses:
        "cursor-pointer bg-purple-400 bg-opacity-70 px-8 py-8 w-full relative text-center mx-auto flex flex-row justify-between items-center ",
      pClasses:
        "uppercase text-center text-base md:text-xl tracking-widest text-gray-900 font-bold",
      img: dinner,
      imgClasses: "w-24 md:w-32 lg:w-48",
    },
  ];

  return (
    <div className="mt-20 text-green-400 ">
      <h3 className="text-2xl font-bold text-center md:text-3xl ">
        Choose Your Meal Category
      </h3>
      <section className="relative flex flex-col items-center justify-between w-full mx-auto mt-12 mb-8 text-center">
        {categories.map((category) => {
          let spanClass = mealCategory.category === category ? "active" : "";
          return (

            <Link to={`/${category.name}`}   key={category.id}
            onClick={() => addmealCategory(category)}
            className={category.divClasses}>
               
              <span className={` ${spanClass} ${category.pClasses} `}>
                {category.name}
              </span>
              <img
                src={category.img}
                alt={category.name}
                className={category.imgClasses}
              />
            </Link>
          
          );
        })}
      </section>

    </div>
  );
};

export default Category;
