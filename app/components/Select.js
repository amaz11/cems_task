import React from 'react'
import { Menu } from "@headlessui/react";

const Select = ({ setSortValue, sortFunction, title }) => {
    return (
        <div className="mr-10">
            <Menu as="div" className=" relative">
                <Menu.Button className={'border-b border-b-zinc-200 text-xs md:text-base'}>
                    {title}
                </Menu.Button>
                <Menu.Items className={'flex flex-col origin-top-right absolute right-0  mt-2  rounded-md shadow-lg shadow-zinc-50  bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-30'} >
                    <Menu.Item className='border-b p-2 md:p-4 border-b-zinc-200' >
                        {({ active }) => (
                            <a
                                className={`${active && 'cursor-pointer text-xs md:text-base'}`}
                                onClick={() => { setSortValue('ascending'); sortFunction() }}
                            >
                                Ascending
                            </a>
                        )}
                    </Menu.Item>
                    <Menu.Item className='p-2 md:p-4'>
                        {({ active }) => (
                            <a
                                className={`${active && 'cursor-pointer text-xs md:text-base'}`}
                                onClick={() => { setSortValue('descending'); sortFunction() }}
                            >
                                Descending
                            </a>
                        )}
                    </Menu.Item>
                </Menu.Items>
            </Menu>
        </div>
    )
}

export default Select