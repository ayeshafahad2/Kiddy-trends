import React from 'react';

export default function Review() {
  return (
    <div className="bg-lightBrown-100 min-h-screen p-8">
      {/* Title */}
      <h1 className="text-brown-900 mb-12 text-center text-6xl font-bold font-geistSans">
        KIDDY TRENDS <br />
        <span className="text-4xl text-brown-700">REVIEW FROM OUR CLIENTS</span>
      </h1>
      
      {/* Grid Container for 8 Boxes */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4">
        
        {/* Comment Box 1 */}
        <div className="w-full p-6 bg-brown-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-lightBrown-300 animate-fadeInUp">
          <h3 className="text-xl font-semibold mb-2">Quality Fabric</h3>
          <p className="text-sm">
            Our clothes are made with high-quality, soft fabrics to keep your child comfortable all day.
          </p>
          <p className="text-center mt-4 font-semibold text-darkBrown-900">— Ayesha Iqbal</p>
        </div>

        {/* Comment Box 2 */}
        <div className="w-full p-6 bg-brown-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-lightBrown-300 animate-fadeInUp">
          <h3 className="text-xl font-semibold mb-2">Stylish Designs</h3>
          <p className="text-sm">
            Trendy and playful designs that match my childs personality.
          </p>
          <p className="text-center mt-4 font-semibold text-darkBrown-900">— Zainab Khan</p>
        </div>

        {/* Comment Box 3 */}
        <div className="w-full p-6 bg-brown-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-lightBrown-300 animate-fadeInUp">
          <h3 className="text-xl font-semibold mb-2">Plus point</h3>
          <p className="text-sm">
          Ideal for any occasion.
          </p>
          <p className="text-center mt-4 font-semibold text-darkBrown-900">— Sadaf Malik</p>
        </div>

        {/* Comment Box 4 */}
        <div className="w-full p-6 bg-brown-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-lightBrown-300 animate-fadeInUp">
          <h3 className="text-xl font-semibold mb-2">Affordable Prices</h3>
          <p className="text-sm">
            High-quality kids fashion that fits my budget.
          </p>
          <p className="text-center mt-4 font-semibold text-darkBrown-900">— Fatima Noor</p>
        </div>

        {/* Comment Box 5 */}
        <div className="w-full p-6 bg-brown-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-lightBrown-300 animate-fadeInUp">
          <h3 className="text-xl font-semibold mb-2">Durable Clothes</h3>
          <p className="text-sm">
            Our clothes are made to withstand even the most active playtimes.
          </p>
          <p className="text-center mt-4 font-semibold text-darkBrown-900">— Hina Saeed</p>
        </div>

        {/* Comment Box 6 */}
        <div className="w-full p-6 bg-brown-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-lightBrown-300 animate-fadeInUp">
          <h3 className="text-xl font-semibold mb-2">Excellent Customer Service</h3>
          <p className="text-sm">
            The customer support team are very helpful.
          </p>
          <p className="text-center mt-4 font-semibold text-darkBrown-900">— Mehwish Ali</p>
        </div>

        {/* Comment Box 7 */}
        <div className="w-full p-6 bg-brown-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-lightBrown-300 animate-fadeInUp">
          <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
          <p className="text-sm">
            Quick delivery, and the clothes arrived in perfect condition.
          </p>
          <p className="text-center mt-4 font-semibold text-darkBrown-900">— Rabia Sheikh</p>
        </div>

        {/* Comment Box 8 */}
        <div className="w-full p-6 bg-brown-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-lightBrown-300 animate-fadeInUp">
          <h3 className="text-xl font-semibold mb-2">Unique Styles</h3>
          <p className="text-sm">
            The styles are comfortable
          </p>
          <p className="text-center mt-4 font-semibold text-darkBrown-900">— Saima Javed</p>
        </div>
      </div>
    </div>
  );
}
