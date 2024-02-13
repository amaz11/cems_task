'use client'
import React, { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Notification from '@/public/icons/notifications_FILL0_wght400_GRAD0_opsz48.svg'
import logo from '@/public/logo/gracenote_logo.svg'


const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
    { name: 'Reports', href: '#', current: false },
]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]

const imogIcons = [
    { icon: '/icons/sentiment_very_satisfied_FILL0_wght400_GRAD0_opsz48.svg' },
    { icon: '/icons/sentiment_satisfied_FILL0_wght400_GRAD0_opsz48.svg' },
    { icon: '/icons/sentiment_dissatisfied_FILL0_wght400_GRAD0_opsz48.svg' },
    { icon: '/icons/sentiment_very_dissatisfied_FILL0_wght400_GRAD0_opsz48.svg' }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Navbar = () => {
    const [send, isSend] = useState(false)
    const [show, isShow] = useState(false)

    const sendFeedback = () => {
        isSend(!send)
        setTimeout(closePopUp, 5000)

    }
    const closePopUp = () => {
        isShow(!show)
    }


    return (
        <div className='border-b-black'>
            <Disclosure as="nav" className="bg-white border-b border-zinc-200">
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex justify-between h-16">
                                <div className="flex">
                                    <div className="flex-shrink-0 flex items-center">
                                        <Image src={logo} alt='logo' />

                                    </div>
                                    <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? 'border-zinc-950 text-zinc-950'
                                                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                                    'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                                    <Menu as="div" className="ml-3 relative">
                                        <div>
                                            <Menu.Button className="max-w-xs bg-white border border-zinc-200 flex items-center text-sm rounded-md px-6 py-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500" onClick={closePopUp} >
                                                <span className="text-zinc-950">Feedback</span>
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            show={show}
                                            enter="transition ease-out duration-200"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"

                                        >
                                            <Menu.Items className="origin-top-right absolute right-0 mt-2  rounded-md shadow-lg shadow-zinc-50  bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-30">
                                                {send ? <div>
                                                    <div className='flex flex-col gap-4 py-4 px-6  items-center w-64 justify-center'>
                                                        <Image src={`/icons/check_circle_FILL0_wght400_GRAD0_opsz48.svg`} width={38} height={38} onClick={closePopUp} alt='check' />
                                                        <div>
                                                            <h4 className='text-zinc-950 text-[16px] font-bold text-center'>Thanks For you Feedback!</h4>
                                                            <p className='text-zinc-500 text-sm mt-2 text-center'>We'll in touch soon</p>
                                                        </div>

                                                    </div>

                                                </div> :
                                                    <div >
                                                        <div className='p-2 border-b border-b-zinc-200'>
                                                            <textarea className='border border-zinc-200 rounded-md' name="" id="" cols="30" rows="4"></textarea>
                                                        </div>
                                                        <div className='flex justify-between items-center px-2 py-3 bg-zinc-50'>
                                                            <div className='flex gap-2 items-center'>
                                                                {imogIcons.map((item, index) => <Image src={`${item.icon}`} key={index} width={24} height={24} style={{ filter: 'invert(45%) sepia(3%) saturate(1646%) hue-rotate(182deg) brightness(98%) contrast(90%)' }} alt='icons' />)}
                                                            </div>
                                                            <input type="submit" className='text-white text-sm font-bold bg-black p-2 rounded-md' value={'Send'} onClick={sendFeedback} />
                                                        </div>
                                                    </div>}

                                            </Menu.Items>

                                        </Transition>

                                    </Menu>
                                    <button
                                        type="button"
                                        className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500"
                                    >
                                        <span className="sr-only">View notifications</span>
                                        <Image src={Notification} height={28} width={28} style={{ filter: 'invert(45%) sepia(3%) saturate(1646%) hue-rotate(182deg) brightness(98%) contrast(90%)' }} alt='notify' />
                                    </button>

                                    {/* Profile dropdown */}
                                    <Menu as="div" className="ml-3 relative">
                                        <div>
                                            <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500">
                                                <span className="sr-only">Open user menu</span>
                                                <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                {userNavigation.map((item) => (
                                                    <Menu.Item key={item.name}>
                                                        {({ active }) => (
                                                            <a
                                                                href={item.href}
                                                                className={classNames(
                                                                    active ? 'bg-gray-100' : '',
                                                                    'block px-4 py-2 text-sm text-gray-700'
                                                                )}
                                                            >
                                                                {item.name}
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                ))}
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                                <div className="-mr-2 flex items-center sm:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500 ">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="pt-2 pb-3 space-y-1">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current
                                                ? 'bg-indigo-50 border-zinc-500 text-zinc-950'
                                                : 'border-transparent text-zinc-600 hover:bg-gray-50 hover:border-gray-300 hover:text-zinc-950',
                                            'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                            <div className="pt-4 pb-3 border-t border-gray-200">
                                <div className="flex items-center px-4">
                                    <div className="flex-shrink-0">
                                        <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                    </div>
                                    <div className="ml-3">
                                        <div className="text-base font-medium text-gray-800">{user.name}</div>
                                        <div className="text-sm font-medium text-gray-500">{user.email}</div>
                                    </div>
                                    <button
                                        type="button"
                                        className="ml-auto bg-white flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        <span className="sr-only">View notifications</span>
                                        <Image src={Notification} height={28} width={28} style={{ filter: 'invert(45%) sepia(3%) saturate(1646%) hue-rotate(182deg) brightness(98%) contrast(90%)' }} alt='notify' />
                                    </button>
                                </div>
                                <div className="mt-3 space-y-1">
                                    {userNavigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                            </div>
                        </Disclosure.Panel>
                        {show ? <div className='bg-black absolute left-0 opacity-0 w-full h-screen ' onClick={() => isShow(!show)}>
                        </div> : null}
                    </>
                )}

            </Disclosure>
        </div>
    )
}

export default Navbar