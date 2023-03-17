
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faSquareMinus, faSquarePlus} from "@fortawesome/free-regular-svg-icons"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl}: StoreItemProps){

    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
    } = useShoppingCart()

    const quantity = getItemQuantity(id)


return (
    <div className="h-auto border rounded-xl overflow-hidden">
        <img className='h-40 w-full object-cover rounded-t-xl hover:transition-transform ease-in-out hover:translate-y-1 hover:scale-110 duration-700 ' src={imgUrl} alt="" />
        <div className='flex flex-col'>
            <div className='flex justify-between items-baseline mb-2 p-3'>
                <span className='font-tilt text-lg'>{name} <span className='text-xs text-gray-500'>(kg)</span> </span>
                <span className='font-tilt text-sm text-gray-700'>{formatCurrency(price)}</span>
            </div>
                <div className='flex justify-center'>
            { quantity === 0 ?
                (<button 
                    onClick={() => increaseCartQuantity(id)}
                    className='border bg-green-300 mb-3 rounded-xl 
                    font-tilt px-3 py-2 text-sm hover:bg-green-200
                    active:bg-green-400 focus:outline-none focus:ring focus:ring-green-300'
                >
                    Add to cart
                </button>)
                :
                (<div className='flex flex-col items-center'>
                    <div className='flex items-center justify-center pb-2'>
                        <button 
                            onClick={() => decreaseCartQuantity(id)}
                            className='text-xl text-gray-800 hover:text-red-600'
                        >
                            <FontAwesomeIcon icon={faSquareMinus} />
                        </button>
                        <p className='px-3'> <span className="text-lg">{quantity}</span> in cart</p>

                        <button 
                            onClick={() => increaseCartQuantity(id)}
                            className='text-xl text-gray-800 hover:text-green-600'
                        >
                            <FontAwesomeIcon icon={faSquarePlus} />
                        </button>
                    </div>

                    <button
                    onClick={() => removeFromCart(id)} 
                    className='border bg-red-300 mb-3 rounded-xl 
                    font-tilt px-3 py-2 text-sm hover:bg-red-200
                    active:bg-red-400 focus:outline-none focus:ring focus:ring-red-300'
                    >
                        Remove
                    </button>
                </div>)}
            </div>

        </div>

    </div>

)
}