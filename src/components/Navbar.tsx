import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faLemon} from "@fortawesome/free-regular-svg-icons"
import { faBasketShopping} from "@fortawesome/free-solid-svg-icons"
import { useShoppingCart } from '../context/ShoppingCartContext'


export function Navbar() {
    const {openCart, cartQuantity} = useShoppingCart()

    return (
      <div className="fixed top-0 left-0 right-0 h-14 bg-white shadow-lg 
      flex justify-between items-center z-10">
        <NavLink to={'/'} className='flex text-4xl pl-5 hover:text-amber-400 cursor-pointer'>
        <h1 className='text-2xl font-tilt pr-1 hidden xs:block'>fruitstore</h1>
        <FontAwesomeIcon icon={faLemon} />
        </NavLink>
        <div className='text-lg'>
          <NavLink className='pr-5 hover:text-rose-500 font-tilt' to={"/"}>ABOUT</NavLink>
          <NavLink to={"/store"} className='hover:text-green-700 font-tilt'>STORE</NavLink>
        </div>
        <div>
        <button 
          className='text-2xl pr-10'
          onClick={openCart}  
        >
        <FontAwesomeIcon icon={faBasketShopping} className=" hover:text-indigo-800" />
        <div className='rounded-full bg-red-600 flex justify-center items-center
          text-white text-xs w-4 h-4 absolute bottom-2 right-8
        '>
          {cartQuantity}
        </div>
        </button>
        </div>

      </div>
)}