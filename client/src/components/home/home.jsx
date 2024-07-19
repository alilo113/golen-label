import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/pexels-craytive-1545529.jpg"; // Adjust the path to your image
import img2 from "../../assets/johnnie_walker_gold_800x.webp";
import { AboutUs } from "./about";
import "./home.css"

export function Home({ username }) {
  const [quality, setQuantity] = useState(0)

  function reduce(){
    setQuantity(quality - 1)
  }

  function increase(){
    setQuantity(quality + 1)
  }

  useEffect(() => {
    const element = document.getElementById('animated-element');
    setTimeout(() => {
      element.classList.add('translate-final');
    }, 100); // Delay to ensure the initial state is applied
  }, []);

  return (
    <>
      <div
        id="animated-element"
        className="translate-init text-white p-3 bg-cover"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh" // Adjust the height as needed
        }}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-orange-600 font-bold text-2xl cursor-pointer">GOlDEN LABEL</h1>
          <nav className="flex items-center gap-5">
            <div>About</div>
            <div>Product</div>
            {username ? (
              <Link to="/profile" className="text-white bg-orange-600 p-2 hover:bg-orange-800 rounded">Welcome {username}</Link>
            ) : (
              <>
                <Link to="/log-in" className="bg-orange-600 text-white p-3 rounded hover:bg-orange-800">Log in</Link>
                <Link to="/sign-up" className="bg-orange-600 text-white p-3 rounded hover:bg-orange-800">Sign up</Link>
              </>
            )}
          </nav>
        </div>
        <div className="p-20 flex flex-col gap-y-8">
          <h1 className="text-3xl font-bold" style={{ width: "500px" }}>OUR CRAFT OUR PROCESS OUR TRADITION</h1>
          <p style={{ width: "510px" }}>
            The best brand has a full family of alcoholic beverages, each unique and
            expertly made by our team of professionals, who have perfected the art of
            brewing over the last several decades. Explore what makes our products
            special and worthy of the best brand name.
          </p>
          <button className="bg-orange-600 text-white p-3 rounded hover:bg-orange-800 w-60">MORE ABOUT BEST BRAND</button>
        </div>            
      </div>
      <div className="p-4 max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex">
        <div className="w-1/2">
          <img className="w-full h-full object-cover" src={img2} alt="Johnnie Walker Gold" />
        </div>
        <div className="w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Johnnie Walker Gold Label</h2>
            <p className="text-gray-600 mt-2">750ml</p>
            <p className="text-gray-600 mt-2">$60.00</p>
            <p className="text-gray-600 mt-4 mb-3">
              Johnnie Walker Gold Label is a rich, luxurious, and creamy blend, renowned for its smooth balance of flavors and exceptional quality. Perfect for celebrations and special occasions.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-white p-3 bg-orange-600 hover:bg-orange-800" onClick={reduce}>-</button>
            <span className="text-gray-800">{quality}</span>
            <button className="text-white p-3 bg-orange-600 hover:bg-orange-800" onClick={increase}>+</button>
          </div>
          <button className="mt-6 bg-orange-600 text-white p-3 rounded hover:bg-orange-800 self-start">Buy Now</button>
        </div>
      </div>
      <AboutUs></AboutUs>
    </>
  );
}