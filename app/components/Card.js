import React from 'react'
import Image from "next/image";

const Card = ({ item }) => {
    return (
        <div>
            <div className="relative rounded-md group transition duration-500 cursor-pointer">
                <div className="relative rounded-md">
                    <Image className="group-hover:scale-100" src={`${item.image}`} alt="product" width={500} height={500} loading="lazy" style={{
                        width: '100%',
                        height: '300px',
                    }} />
                    <div className="bg-white opacity-50 absolute left-0 top-0 w-full h-full hidden group-hover:block"></div>
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block">
                    <button className="px-6 py-2 bg-violet-600 text-white text-xs rounded-full">Buy Now</button>
                </div>

            </div>
            <div className="flex justify-between mt-4 gap-5">
                <div>
                    <h5 className="text-base font-semibold line-clamp-1 w-32">{item.title}</h5>
                    <span className="text-sm text-zinc-500">{item.category}</span>
                </div>
                <div>
                    <span className="text-lg font-semibold">{item.price}/-</span>
                </div>
            </div>
        </div>
    )
}

export default Card