import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from '../data/items.json'
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({id, quantity}: CartItemProps) {
    const { removeFromCart } = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if (item == null) return null

    return (
        <div className='flex items-center justify-between font-tilt my-6'>
             <img 
                 src={item.imgUrl} 
                 alt=""
                 className="w-32 h-16 object-cover rounded-lg"
                 />
                 <div className="me-auto">
                     <div>
                         {item.name} { quantity > 1 && <span className="text-gray-600 text-xs">
                             x{quantity}
                         </span>}
                     </div>
                     <div className="text-gray-600 text-xs">
                         {formatCurrency(item.price)}
                     </div>
                 </div>
                     <div>  {formatCurrency(item.price * quantity)}</div>
                     <button className="flex items-center justify-center 
                     border-red-400 border-2 rounded-lg h-6 w-6 hover:bg-red-300"
                        
                         onClick={() => removeFromCart(item.id)}
                     >&times;</button>
        </div> 
 
     )
 }