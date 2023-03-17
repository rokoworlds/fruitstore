import React from "react";
import kiwi from '../images/kiwi.jpg'
import lemon from '../images/lemon.jpg'
import orange from '../images/orange.jpg'
import blueberries from '../images/blueberries.jpg'
import bananas from '../images/bananas.jpg'
import blackberries from '../images/blackberries.jpg'
import redApples from '../images/red-apples.jpg'
import strawberries from '../images/strawberries.jpg'
import grapes from '../images/grapes.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faFacebook, faInstagram, faTelegram} from "@fortawesome/free-brands-svg-icons"



export default function Home() {
    return (
        <>
        <div className="grid place-items-center min-h-screen mt-28 mb-12">
        <div className="p-4 max-w-5xl grid gap-4 xs:grid-cols-2 md:grid-cols-4">
            <h1 className="text-4xl font-extrabold xs:col-span-2 
            xs:grid xs:grid-cols-2 xs:gap-4
            md:col-span-3 md:text-5xl md:grid-cols-3"
            >
            <span className="md:col-span-2 font-tilt">We provide you with vitamines since 1973</span>  </h1>
            <p className="xs:row-start-2 xs:col-start-2 xs:self-center 
            md: col-start-1 md:col-span-2 md:pr-12 md:text-lg
            font-kalam text-center
            ">Eating fruits is essential for maintaining a healthy and balanced diet. 
            Fruits are rich in vitamins, minerals, fiber, and antioxidants, which are vital 
            for the proper functioning of our body. 
            </p>
            <div className="h-10 xs:h-auto xs:square bg-blue-500 tile rounded-xl"> <img src={blackberries} alt="" className="h-16 xs:h-auto xs:square object-cover rounded-xl" /></div>
            <div className="h-10 xs:h-auto xs:square bg-orange-500 tile rounded-xl"><img src={orange} alt="" className="h-16 xs:h-auto xs:square object-cover rounded-xl" /></div>
            <div className="h-10 xs:h-auto xs:square bg-sky-500 tile rounded-xl"><img src={blueberries} alt="" className="h-16 xs:h-auto xs:square  object-cover rounded-xl" /></div>
            <div className="h-10 xs:h-auto xs:square md:col-start-2 bg-red-500 tile rounded-xl"><img src={redApples} alt="" className="h-16 xs:h-auto xs:square object-cover rounded-xl col-start-2" /></div>
            <div className="h-10 xs:h-auto xs:square bg-lime-500 tile rounded-xl"> <img src={kiwi} alt="" className="h-16 xs:h-auto xs:square object-cover rounded-xl" /></div>
            <div className="h-10 xs:h-auto xs:square bg-purple-500 tile rounded-xl"> <img src={strawberries} alt="" className="h-16 xs:h-auto xs:square object-cover rounded-xl" /></div>
            <div className="h-10 xs:h-auto xs:square bg-green-500 tile rounded-xl"> <img src={grapes} alt="" className="h-16 xs:h-auto xs:square object-cover rounded-xl" /></div>
            <div className="h-10 xs:h-auto xs:square bg-yellow-500 tile rounded-xl"><img src={lemon} alt="" className="h-16 xs:h-auto xs:square object-cover rounded-xl" /></div>
            <div className="md:col-span-2 flex flex-col items-center justify-center">
            <p className="self-center md:text-ld  md-text-center md:px-4 font-kalam text-center ">Incorporating a variety of fruits in our 
            daily diet can reduce the risk of chronic diseases such as heart disease, stroke, 
            and certain types of cancer. For more info follow us!</p>
            <div className=" text-3xl pt-6">
            <FontAwesomeIcon icon={faFacebook}  className="hover:text-blue-800 cursor-pointer" />
            <FontAwesomeIcon icon={faInstagram} className="px-4 hover:text-rose-500 cursor-pointer" />
            <FontAwesomeIcon icon={faTelegram} className="hover:text-sky-400 cursor-pointer" />
            </div>
            </div>
        </div>
        </div>
        
        </>

    )
}