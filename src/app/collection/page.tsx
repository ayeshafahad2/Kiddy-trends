import Image from "next/image";
import React from "react";

// Collection component for both Summer and Winter
export default function Collection() {
    const collections = [
        {
            season: "Winter Collection",
            items: [
                { src: "/kiddytrends8.jpg", caption: "Dapper Look - Kid's Formal Suit", price: "1500 Rupees each" },
                { src: "/kiddytrends9.jpg", caption: "Smart Casual - Kid's Blazer Set", price: "1800 Rupees each" },
                { src: "/kiddytrends6.jpg", caption: "Classic Charm - Kid's Dress Suit", price: "1600 Rupees each" },
                { src: "/kiddytrends7.jpg", caption: "Elegant Style - Kid's Tuxedo", price: "2000 Rupees each" },
                { src: "/kiddytrends10.jpg", caption: "Stylish Fit - Kid's Wedding Suit", price: "1900 Rupees each" },
                { src: "/kiddytrends11.jpg", caption: "Fashion Forward - Kid's Party Suit", price: "1750 Rupees each" },
            ],
        },
        {
            season: "Summer Collection",
            items: [
                { src: "/summerN.jpg", caption: "Cool Breeze - Kid's Light Formal Suit", price: "1500 Rupees each" },
                { src: "/summerl.jpg", caption: "Sunny Day - Kid's Casual Blazer Set", price: "1800 Rupees each" },
                { src: "/summerk.jpg", caption: "Summer Charm - Kid's Stylish Dress", price: "1600 Rupees each" },
                { src: "/summerg.jpg", caption: "Elegant Cool - Kid's Summer Tuxedo", price: "2000 Rupees each" },
                { src: "/summerf.jpg", caption: "Beach Party - Kid's Fun Wedding Suit", price: "1900 Rupees each" },
                { src: "/summere.jpg", caption: "Trendy Vibes - Kid's Party Outfit", price: "1750 Rupees each" },
                { src: "/summerd.jpg", caption: "Chic Comfort - Kid's Formal Tuxedo", price: "2000 Rupees each" },
                { src: "/summera.jpg", caption: "Wedding Day - Kid's Summer Suit", price: "1900 Rupees each" },
                { src: "/summerb.jpg", caption: "Elegant Touch - Kid's Stylish Tux", price: "2000 Rupees each" },
                { src: "/summerc.jpg", caption: "Summer Fun - Kid's Party Look", price: "1750 Rupees each" },
            ],
        },
    ];

    return (
        <div className="bg-white min-h-screen p-8">
            {collections.map((collection, index) => (
                <div key={index} className="mb-16">
                    <h1 className="text-brown-700 mb-12 text-center text-6xl font-bold font-geistSans">{collection.season}</h1>
                    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
                        {collection.items.map((item, idx) => (
                            <div
                                key={idx}
                                className="relative overflow-hidden bg-brown-100 shadow-lg transition-transform duration-300 ease-in-out group rounded-t-3xl"
                            >
                                <div className="relative h-48 overflow-hidden rounded-t-3xl bg-brown-cream-200">
                                    <Image
                                        src={item.src}
                                        alt={`${collection.season} ${idx + 1}`}
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
            ))}
        </div>
    );
}
