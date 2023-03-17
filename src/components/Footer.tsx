import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faFacebook, faInstagram, faTelegram, faGithub } from "@fortawesome/free-brands-svg-icons"


export default function Footer() {
    return (
        <div className="bg-neutral-50  font-tilt p-5 lg:px-32 mt-14 ">
            <div className="divide-y-2 divide-gray-900 underline">
                    fruitstore
            </div>

        <div className="grid grid-cols-3">
                <div className=" flex justify-center">    
                    <ul className="text-gray-500 cursor-pointer">
                        <li className="hover:text-gray-800">delivery</li>
                        <li className="hover:text-gray-800">support</li>
                        <li className="hover:text-gray-800">careers</li>
                        <li className="hover:text-gray-800">for buisness</li>
                    </ul>
                </div>
                    <div className="text-gray-500">
                        hot-line: +069-123-456-7
                    </div>
                <div className="text-center ">
                    {/* hot-line, online order-support, markets */}
                    social links
                    <div className=" text-2xl text-gray-600">
                        <a href="https://github.com/rokoworlds/fruitstore" target='_blank'><FontAwesomeIcon icon={faGithub}  className="hover:text-violet-900 cursor-pointer px-2" /></a>
                        <FontAwesomeIcon icon={faFacebook}  className="hover:text-blue-800 cursor-pointer px-2" />
                        <FontAwesomeIcon icon={faInstagram} className=" hover:text-rose-500 cursor-pointer px-2" />
                        <FontAwesomeIcon icon={faTelegram} className="hover:text-sky-400 cursor-pointer px-2" />
                    </div> 

                </div>
    
                <div className="mt-12 text-xs text-gray-600">
                © ROKO 2023
                </div>
                <a href="https://rokoworlds.github.io/roko-portfolio/" target='_blank' className="col-start-3 text-center mt-12 text-sm text-gray-600 cursor-pointer hover:text-teal-500">
                <span className="text-xs">made by</span> ROKO:Dev
                </a>
        </div>
        </div>
    )
}