import React from "react";
import GroupPlus from "@/public/images/GroupService.svg";
import Image from "next/image";
import Plane from "@/public/images/PlaneService.svg";
import Satellite from "@/public/images/statellite.svg";
import Microphone from "@/public/images/mic.png";
import Wheel from "@/public/images/Wheel.svg";

export const Service:React.FC = () => {
    return (
        <section className="relative flex flex-col px-36 mt-36">
            <div className="absolute plus">
                <Image src={GroupPlus} alt="GroupPlus"/>
            </div>
            <h1 className="service-heading text-t-color uppercase">Category</h1>
            <h2 className="text-accent capitalize font-serif font-bold font text-center text-5xl mt-6">We Offer Best Services</h2>
            <div className="relative flex flex-row justify-between it gap-8 my-32">
                <div>
                    <div className="flex justify-center image-div mx-auto mb-4">
                    <Image className="w-full h-full object-contain" src={Satellite} alt="statelite" />
                    </div>
                    <h3 className="service-subHeading">Calculated Weather</h3>
                    <p className="service-paragraph">Built Wicket longer admire do barton vanity itself do in it.</p>
                </div>
                <div className="div-active -mt-10">
                    <div className="flex justify-center image-div-2 mx-auto mb-4">
                    <Image className="w-full h-full object-contain"  src={Plane} alt="Plane" />
                    </div>
                    <h3 className="service-subHeading -mt-6">Best Flights</h3>
                    <p className="service-paragraph">Engrossed listening. Park gate sell they west hard for the.</p>
                </div>
                <div>
                    <div className="flex justify-center image-div mx-auto mb-4">
                    <Image src={Microphone} alt="Microphone" />
                    </div>
                    <h3 className="service-subHeading">Local Events</h3>
                    <p className="service-paragraph">Barton vanity itself do in it. Preferd to men it engrossed listening. </p>
                </div>
                <div>
                    <div className="flex justify-center image-div mx-auto mb-4">
                    <Image src={Wheel} alt="Wheel" />
                    </div>
                    <h3 className="service-subHeading">Customization</h3>
                    <p className="service-paragraph">We deliver outsourced aviation services for military customers</p>
                </div>
            </div>
        </section>
    );
};
