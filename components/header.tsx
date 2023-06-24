import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/Logo.svg"
import {Hero} from "@/components/hero";

export const Header: React.FC = () => {
    return (
            <header className="mt-14 px-40 z-40">
                <nav>
                    <ul className="flex flex-row justify-between items-center font-sans text-base text-primary">
                        <div>
                            <Image className="w-[115px] h-[34px]" src={Logo} alt="logo" />
                        </div>
                        <div className="flex flex-row justify-between items-center gap-14">
                            <li>Home</li>
                            <li>Destinations</li>
                            <li>Hotels</li>
                            <li>Flights</li>
                            <li>Bookings</li>
                            <button className="btn px-6 py-2 rounded-lg">
                                <Link href="">Sign Up</Link>
                            </button>
                        </div>
                    </ul>
                </nav>
                <Hero />
            </header>
    )
}