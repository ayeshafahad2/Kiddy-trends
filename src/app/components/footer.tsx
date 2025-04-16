import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Meet() {
    return (  // Add return statement here
        <>
            {/* Fixed Footer */}
            <footer className="bg-brown-200 text-brown-800 w-full py-6 bottom-0">
                <div className="flex flex-col items-center">
                    {/* Kiddy Trends Logo */}
                    <Link href="/">
                        <Image src="/kids.png" alt="Kiddy Trends" width={100} height={100} className="mb-2" />
                    </Link>
                    
                    {/* Social Media Links */}
                    <div className="flex space-x-4 mb-2">
                        <Link href="http://instagram.com/trendykids.2020">
                            <Image src="/instagram.png" alt="Instagram" width={40} height={40} />
                        </Link>
                        <Link href="http://facebook.com/thetrendykidsshop">
                            <Image src="/facebook-logo.png" alt="Facebook" width={40} height={40} />
                        </Link>
                        <Link href="https://whatsapp.com/channel/0029VaCTdwaAzNc3cL4wVu0U">
                            <Image src="/whatsapp.png" alt="WhatsApp" width={40} height={40} />
                        </Link>
                    </div>

                    {/* Copyright Text */}
                    <p className="text-center text-lg">© 2024 Kiddy Trends. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    );
}

