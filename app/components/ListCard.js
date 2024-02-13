import Image from 'next/image'
import React from 'react'

const ListCard = ({ item }) => {
    return (
        <div className='flex gap-10 justify-between items-center'>
            <div className='flex gap-10 items-center'>
                <div>
                    <Image className="group-hover:scale-100" src={`${item.image}`} alt="product" width={500} height={500} loading="lazy" style={{
                        width: '200px',
                        height: '200px',
                    }} />
                </div>
                <div>
                    <h5 className="text-base font-semibold line-clamp-1">{item.title}</h5>
                    <span className="text-sm text-zinc-500">{item.category}</span>
                    <p className="text-lg font-semibold">{item.price}/-</p>
                </div>
            </div>
            <div>
                <button className="px-6 py-2 bg-violet-600 text-white text-xs rounded-full">Buy Now</button>

            </div>
        </div>
    )
}

export default ListCard