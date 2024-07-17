import React from "react";
import img from '../../assets/pexels-craytive-1545529.jpg';

export function Home() {
    return (
        <div 
            className="relative bg-cover bg-center h-screen" 
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className="flex justify-between p-3 items-center h-16 bg-opacity-75">
                <div className="text-orange-600 text-2xl font-bold cursor-pointer">Golden label</div>
                <nav className="flex gap-4 items-center">
                    <div className="cursor-pointer hover:underline text-white">Home</div>
                    <div className="cursor-pointer hover:underline text-white">About</div>
                    <div className="cursor-pointer hover:underline text-white">Products</div>
                    <button className="bg-orange-600 text-white p-3 rounded hover:bg-orange-800">Log in</button>
                    <button className="bg-orange-600 text-white p-3 rounded hover:bg-orange-800">Sign up</button>
                </nav>
            </div>
            <div className="text-white p-6 m-10">
                <h1 className="text-4xl" style={{width: "500px"}}>OUR CRAFT OUR PROCESS OUR TRADITION</h1>
                <p className="w-3/4 mt-4" style={{width: "550px"}}>
                    The best brand has a full family of alcoholic beverages, each unique and expertly made by our team of professionals, who have perfected the art of brewing over the last several decades. Explore what makes our products special and worthy of the best brand name.
                </p>
                <button className="mt-6 bg-orange-600 text-white p-3 rounded hover:bg-orange-800">MORE ABOUT BEST BRAND</button>
            </div>
        </div>
    );
}