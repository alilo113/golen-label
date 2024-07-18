import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/pexels-craytive-1545529.jpg"; // Adjust the path to your image
import img2 from "../../assets/johnnie_walker_gold_800x.webp";

export function Home({ username }) {
  return (
    <>
    <div className="text-white p-3" style={{backgroundImage: `url(${img})`}}>
        <div className="flex justify-between items-center">
            <h1 className="text-orange-600 font-bold text-2xl">GOlDEN LABEL</h1>
            <nav className="flex items-center gap-5">
                <div>About</div>
                <div>Product</div>
                {username ? (
                    <Link to="/profile" className="text-white bg-orange-600 p-2 hover:bg-orange-800 rounded">Welcome {username}</Link>
                ) : (
                <>
                  <Link to="/log-in" className="bg-orange-600 text-white p-3 rounded hover:bg-orange-800">Log in</Link>
                  <Link to="sign-up"className="bg-orange-600 text-white p-3 rounded hover:bg-orange-800">Sign up</Link>
                </>
            )}
            </nav>
        </div>
        <div>
            
        </div>
    </div>
    </>
  );
}