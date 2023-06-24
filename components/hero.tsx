import React from "react";
import Image from "next/image";
import HeroDecore from "@/public/images/Hero-Decore.svg";
import Plane from "@/public/images/plane.svg";
import Traveller from "@/public/images/Traveller 1.png";
import PlayButton from "@/public/images/PlayButton.svg";
import BorderLine from "@/public/images/Border-line.svg";

export const Hero: React.FC = () => {
    return (<>
            <div className="absolute Hero-Decore -top-12 -z-20 -right-36">
                <Image className="w-full h-full object-contain" src={HeroDecore} alt="Decore"/>
            </div>
            <div className="relative flex flex-row">
                <div className="mt-28">
                    <h1 className="uppercase text-secondary font-poppins font-bold text-md tracking-wider leading-10">best
                        destinations around the world</h1>
                    <h2 className="heading-text font-serif text-accent text-8xl font-bold tracking-tighter my-2">Travel,
                        <span>
                            &nbsp;enjoy
                            <div className="relative">
                                <Image className="absolute border-line" src={BorderLine} alt="border-line"/>
                            </div>
                        </span> and live
                        a new and full life
                    </h2>
                    <p className="paragraph-text font-poppins text-base font-medium">Built Wicket longer admire do
                        barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell
                        they west hard for the.</p>
                    <div className="flex flex-row gap-2 mt-6">
                        <button className="btn-cta mt-3 h-fit py-4 px-6">
                            <a className="text-center text-md text-white">
                                Find Out More
                            </a>
                        </button>
                        <button>
                            <a className="inline-flex items-center">
                                <div>
                                    <Image
                                        className="w-full h-full object-contain"
                                        src={PlayButton}
                                        alt="PlayButton"/>
                                </div>
                                <span className="self-center -mt-6 btn-text">Play Demo</span>
                            </a>
                        </button>
                    </div>
                </div>
                <div className="relative z-10">
                    <div className="plane-right">
                        <Image src={Plane} alt="Plane"/>
                    </div>
                <div className="absolute traveller w-[765px] h-[764px]">
                    <Image className="w-full h-full object-contain" src={Traveller} alt="Traveller"/>
                </div>
                </div>
            </div>
        </>);
};

