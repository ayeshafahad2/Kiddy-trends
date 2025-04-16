import Image from "next/image";
import React from "react";

// Combined Accessories and Hoodies component
const Accessories = () => {
    // Accessories data
    const accessories = [
        { src: "/Accorseries1.png", caption: "Kiddy Trends-COZY SOCKS", price: "250 Rupees each / 999 Rupees for 4 pairs" },
        { src: "/Accorseries2.png", caption: "Kiddy Trends-COZY SOCKS", price: "250 Rupees each / 999 Rupees for 4 pairs" },
        { src: "/Accorseries3.png", caption: "Kiddy Trends-COZY SOCKS", price: "250 Rupees each" },
        { src: "/Accorseries4.png", caption: "Kiddy Trends-COZY CAP", price: "550 Rupees each" },
        { src: "/Accorseries5.png", caption: "Playful Headband", price: "650 Rupees each" },
        { src: "/Accorseries6.png", caption: "Winter Leggings", price: "450 Rupees each" },
        { src: "/Accorseries7.png", caption: "Warm Leggings", price: "550 Rupees each" },
        { src: "/Accorseries8.png", caption: "Winter Leggings", price: "550 Rupees each" },
    ];

    // Hoodies data
    const hoodies = [
        { src: "/Kiddytrends1.jpg", caption: "Classic Hoodie in Light Grey", price: "550 Rupees each" },
        { src: "/Kiddytrends2.png", caption: "Cozy Grey Hoodie", price: "550 Rupees each" },
        { src: "/Kiddytrends3.png", caption: "Stylish Yellow Hoodie", price: "550 Rupees each" },
        { src: "/Kiddytrends4.png", caption: "Bright Green Hoodie", price: "550 Rupees each" },
    ];

    return (
        <div className="bg-white min-h-screen p-8">
            {/* Accessories Section */}
            <h1 className="text-brown-700 mb-12 text-center text-6xl font-bold font-geistSans">Accessories</h1>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
                {accessories.map((item, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden bg-brown-100 shadow-lg transition-transform duration-300 ease-in-out group rounded-t-3xl"
                    >
                        <div className="relative h-48 overflow-hidden rounded-t-3xl bg-brown-cream-200">
                            <Image
                                src={item.src}
                                alt={`Accessory ${index + 1}`}
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

            {/* Hoodies Section */}
            <h1 className="text-brown-700 mb-12 text-center text-6xl font-bold font-geistSans mt-16">Hoodies</h1>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
                {hoodies.map((item, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden bg-white shadow-lg transition-transform duration-300 ease-in-out group rounded-t-3xl"
                    >
                        <div className="relative h-48 overflow-hidden rounded-t-3xl bg-gray-100">
                            <Image
                                src={item.src}
                                alt={`Hoodie ${index + 1}`}
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
};

export default Accessories;

