import React, { useRef } from "react";
import './AboutUs.css'; // Make sure to import the CSS file

export function AboutUs() {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 300; // Adjust the scroll amount as needed
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="p-10 bg-gray-900 relative text-white">
      <div
        className="flex overflow-x-auto scroll-smooth no-scrollbar"
        ref={scrollContainerRef}
      >
        <div className="flex flex-nowrap space-x-6">
          {/* Card 1 */}
          <div className="flex-none w-80 bg-gray-800 shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-semibold text-white mb-4">About Us</h2>
            <p className="text-lg">
              Welcome to Golden Label, a brand synonymous with excellence, tradition, and craftsmanship. Our journey began several decades ago, with a singular vision: to create exceptional alcoholic beverages that capture the essence of quality and tradition.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex-none w-80 bg-gray-800 shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-semibold text-white mb-4">Our Craft</h2>
            <p className="text-lg">
              At Golden Label, we pride ourselves on our meticulous brewing process, where every detail matters. From selecting the finest ingredients to employing state-of-the-art techniques, our team of professionals ensures that each bottle reflects our commitment to perfection.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex-none w-80 bg-gray-800 shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-semibold text-white mb-4">Our Process</h2>
            <p className="text-lg">
              Our brewing process is a blend of age-old traditions and modern innovations. We start with the finest raw materials, carefully sourced from around the world. Our master brewers then apply their extensive knowledge and expertise, honed over years of experience, to create beverages that are rich in flavor and character.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex-none w-80 bg-gray-800 shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-semibold text-white mb-4">Our Tradition</h2>
            <p className="text-lg">
              We believe in preserving the legacy of our brand by honoring the traditions that have been passed down through generations. Each bottle of Golden Label is a testament to our dedication to maintaining the highest standards of quality and consistency. Our tradition of excellence is not just a part of our history; it is the foundation upon which we build our future.
            </p>
          </div>

          {/* Card 5 */}
          <div className="flex-none w-80 bg-gray-800 shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-semibold text-white mb-4">Our Products</h2>
            <p className="text-lg">
              Golden Label offers a diverse range of alcoholic beverages, each crafted to cater to different tastes and preferences. From smooth whiskies to rich, full-bodied wines, our products are designed to provide a unique and satisfying experience for every connoisseur.
            </p>
          </div>

          {/* Card 6 */}
          <div className="flex-none w-80 bg-gray-800 shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-semibold text-white mb-4">Our Commitment</h2>
            <p className="text-lg">
              We are committed to sustainability and responsible brewing practices. Our efforts extend beyond creating exceptional beverages; we are dedicated to ensuring that our operations have a positive impact on the environment and the communities we serve.
            </p>
          </div>

          {/* Card 7 */}
          <div className="flex-none w-80 bg-gray-800 shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-semibold text-white mb-4">Join Us</h2>
            <p className="text-lg">
              Explore the world of Golden Label and discover what makes our brand a symbol of quality and tradition. Whether you are a long-time aficionado or a new enthusiast, we invite you to join us on this journey of excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Buttons */}
      <button
        onClick={() => handleScroll("left")}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 transition-colors duration-300 ease-in-out"
      >
        &lt;
      </button>
      <button
        onClick={() => handleScroll("right")}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 transition-colors duration-300 ease-in-out"
      >
        &gt;
      </button>
    </div>
  );
}