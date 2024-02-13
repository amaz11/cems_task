'use client'
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Select from "../components/Select";
import Card from "../components/Card";
import ListCard from "../components/ListCard";
import { Switch } from "@headlessui/react";
import Image from "next/image";



export default function Page() {
    const [products, setproduct] = useState([])
    const [firstItem, setfirstItem] = useState(0)
    const [lastItem, setLastItem] = useState(10)
    const [isLoading, setisLoading] = useState(false)
    const [priceSort, setpriceSort] = useState('')
    const [nameSort, setnameSort] = useState('')
    const [isGrid, setIsGrid] = useState(false)
    const fetchProduct = async () => {
        try {
            setisLoading(true)
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json();
            setproduct(data)
            setisLoading(false)

        } catch (error) {
            window.alert(error.message)
        }

    }
    const perviousPage = () => {
        setfirstItem(0)
        setLastItem(10)
    }
    const nextPage = () => {
        setfirstItem(10)
        setLastItem(21)
    }

    const sortbyPrice = () => {
        let priceFilter = [...products]
        if (priceSort === "ascending") {
            priceFilter = priceFilter.sort((a, b) => a.price - b.price);
            console.log(priceFilter);
            setproduct(priceFilter)
        } else {
            priceFilter = priceFilter.sort((a, b) => b.price - a.price);
            setproduct(priceFilter)
        }
    }

    const sortbyName = () => {
        let nameFilter = [...products]
        if (nameSort === "ascending") {
            nameFilter = nameFilter.sort((a, b) => a.title.localeCompare(b.title));
            console.log(nameSort);
            setproduct(nameFilter)
        } else {
            nameFilter = nameFilter.sort((a, b) => b.title.localeCompare(a.title));
            setproduct(nameFilter)
        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    if (isLoading) {
        return <Loading />
    }
    return (
        <>
            <div className="min-h-full">
                <main className="my-4">
                    <div className="flex justify-center ml-2  lg:justify-end gap-4">
                        <div className="flex items-center gap-2">
                            <span className="text-xs md:text-base">{isGrid ? 'Grid-view' : 'List-view'}:</span>
                            <Switch
                                checked={isGrid}
                                onChange={setIsGrid}
                                className={`${isGrid ? 'bg-violet-600' : 'bg-violet-700'}
          relative inline-flex h-[24px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
                            >
                                <span
                                    aria-hidden="true"
                                    className={`${isGrid ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[20px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                />
                            </Switch>
                        </div>
                        <Select setSortValue={setpriceSort} sortFunction={sortbyPrice} title='Price Sort' />
                        <Select setSortValue={setnameSort} sortFunction={sortbyName} title='Name Sort' />
                    </div>
                    <div className={`mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 grid ${isGrid ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 '}  gap-10`}>
                        {products?.slice(firstItem, lastItem)?.map((item) => <div className="" key={item.id}>
                            {
                                isGrid ? <ListCard item={item} /> : <Card item={item} />
                            }

                        </div>
                        )}
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <button onClick={perviousPage} className="px-6 py-2 bg-violet-600 text-white rounded-md" disabled={firstItem === 0 ? true : false}>
                            Previous
                        </button>
                        <button onClick={nextPage} className="px-6 py-2 bg-violet-600 text-white rounded-md" disabled={firstItem === 11 ? true : false}>
                            Next
                        </button>
                    </div>
                </main >
            </div >
        </>
    )
}
