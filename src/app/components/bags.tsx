import Image from "next/image";
import React from "react";

// Accessories component updated for Bags
export function Bags() {
    const images = [
        { src: "/bag1.jpg", caption: "Kiddy Trends - Stylish Backpack", price: "1200 Rupees each" },
        { src: "/bag2.jpg", caption: "Kiddy Trends - Trendy Shoulder Bag", price: "850 Rupees each" },
        { src: "/bag3.jpg", caption: "Kiddy Trends - Cute Mini Bag", price: "700 Rupees each" },
        { src: "/bag4.png", caption: "Kiddy Trends - Cozy Handbag", price: "950 Rupees each" },
        { src: "/bag5.jpg", caption: "Playful Travel Bag", price: "1500 Rupees each" },
        { src: "/bag6.jpg", caption: "Winter-Themed Tote Bag", price: "1000 Rupees each" },
        { src: "/bag7.jpg", caption: "Warm Textured Bag", price: "1100 Rupees each" },
        { src: "/bag9.jpg", caption: "Winter Style Backpack", price: "1300 Rupees each" },
    ];

    return (
        <div className="bg-white min-h-screen p-8">
            <h1 className="text-brown-700 mb-12 text-center text-6xl font-bold font-geistSans">Bags</h1>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
                {images.map((item, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden bg-brown-100 shadow-lg transition-transform duration-300 ease-in-out group rounded-t-3xl"
                    >
                        <div className="relative h-48 overflow-hidden rounded-t-3xl bg-brown-cream-200">
                            <Image
                                src={item.src}
                                alt={`Bag ${index + 1}`}
                                layout="fill"
                                objectFit="cover"
                                className="transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                            />
                        </div>
                        <div className="p-4 text-center">
                            <p className="text-gray-700 font-semibold">{item.caption}</p>
                            <p className="text-gray-500 font-medium">{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Bags;

