import React from "react";
import img from "../../src/assets/—Pngtree—casual man flat design avatar_15526568.png"

export function ProfilePage({username}){
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="max-w-xl w-full p-8 bg-white rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
              <img
                src={img}
                alt="Profile"
                className="h-24 w-24 rounded-full"
              />
              <div>
                <h1 className="text-2xl font-bold">{username}</h1>
                <p className="text-gray-600">@{username}</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus suscipit tortor eget felis porttitor volutpat. Proin
                eget tortor risus.
              </p>
            </div>
          </div>
        </div>
      );
}