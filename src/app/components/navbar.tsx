
import React from "react";
import Image from "next/image";


export default function Navbar() {
    return (
        <>

            <Image src="/kid.jpg" alt="kiddytrends" width={1400} height={800} className="w-full max-h-[800px]" />

            {/* Welcome Message */}
            <div className="flex flex-col items-center text-center px-4 py-10 bg-white text-brown-900">
                <h2 className="text-8xl font-bold mb-4">Welcome to Kiddy Trends</h2>
                <p className="max-w-4xl text-lg leading-relaxed text-brown-700">
                    Hello, Awesome MOMSs and your little trendsetters! Dive into a world of style where every season brings new, cozy, and colorful vibes that your kids will love. Our collection is inspired by your journey, crafted with warmth and a dash of fun to make each weather change feel like an adventure! Whether its sunny, rainy, or snowy, weve got just the right outfits to keep your little ones snug and happy as they explore the world around them. Enjoy shopping with love, comfort, and joy  because  
                    nothing like the magical bond between moms and kids!
                    <br/>
                </p>
            </div>
        </>
    );
}
