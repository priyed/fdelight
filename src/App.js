import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Category from "./components/Category";
import Menu from "./components/Menu";
import Order from "./components/Order";
import Breakfast from "./components/Breakfast";
import Flex from "./components/Flexmeal";
import Dinner from "./components/Dinner"
import Lunch from "./components/Lunch"


/*
const allCategories = [
  "flex meal",
  ...new Set(items.map((item) => item.category)),
]; */

function App() {
  const [mealCategory, setmealCategory] = useState({ category: "", meals: []});

  const addmealCategory = (category) => {
    setmealCategory({ ...mealCategory, category})
  }

  const addMeal = (meal) => {
    let newMeals;
    if(!mealCategory.meals.includes(meal)) {
      newMeals = [...mealCategory.meals, meal];
    } else {
      newMeals = mealCategory.meals.filter(item => item !== meal);
    }
    setmealCategory({ ...mealCategory, meals:[newMeals]})
  }
  /*const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "flex meal") {
      setMenuItems(items);
      return console.log(setMenuItems(items));
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }; */
  return (
      <>
        <Header />
        <div className="w-4/5 mx-auto">
        
          <Switch>
            <Route path="/category">
              <Category addmealCategory={addmealCategory} mealCategory={mealCategory} />
            </Route>
            <Route path="/flex">
              <Flex  addMeal={addMeal}  mealCategory={mealCategory}/>
            </Route>
            <Route path="/breakfast">
              <Breakfast  addMeal={addMeal}  mealCategory={mealCategory}/>
            </Route>
            <Route path="/lunch">
              <Lunch  addMeal={addMeal}  mealCategory={mealCategory}/>
            </Route>
            <Route path="/dinner">
              <Dinner  addMeal={addMeal}  mealCategory={mealCategory}/>
            </Route>
            <Route path="/menu">
              <Menu/>
            </Route>
            <Route path="/order">
              <Order mealCategory={mealCategory} />
            </Route>
            <Route path="/" component={Home}/>
          </Switch>
      </div>
      </>
  );
}

export default App;
