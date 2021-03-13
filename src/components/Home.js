import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="max-w-screen-md flex flex-col justify-items-center items-center mt-40 mx-auto">
            <h2 className="text-2xl md:text-4xl text-green-300 text-center font-bold my-4 tracking-widest">
                Welcome to Foodies Delight!!!
            </h2>
            <Link to="/category">
                <button className="text-xl mx-auto text-gray-200 font-medium my-8 mb-40 py-4 px-8 border-4 border-green-300 rounded-full tracking-wider transition-all duration-300 hover:bg-green-300 hover:bg-opacity-10 focus:outline-none">
                    Create your Meal
                </button>
            </Link>
        </div>
    )
}


export default Home;