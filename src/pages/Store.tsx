import { StoreItem } from '../components/StoreItem'
import storeItems from '../data/items.json'


export function Store() {
    return (
    <>
    <div className='flex flex-col items-center justify-center pt-7 '>
        <div className="flex divide-x-2 divide-gray-900 items-center justify-center mt-16 h-36 w-1/2 bg-green-300 rounded-lg
            hover:transition-transform ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-700 cursor-pointer
        ">
            <h1 className='text-3xl px-2 font-kalam'>Spring<span className='font-tilt'>Sale*</span> </h1>
            <p  className='px-2 font-tilt'>UP TO 50% OFF!</p>
        </div>

        <div className=' grid grid-cols-1 md:grid-cols-4 xs:grid-cols-2 gap-6 py-16 '>
            {storeItems.map(item => (
                <div key={item.id}>
                    <StoreItem {...item} />
                </div>
            ))}
            
        </div>

    </div>
    
    </>
)
}