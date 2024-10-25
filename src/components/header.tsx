import React from 'react'
import Logo from './logo'
import Link from 'next/link'
import Image from 'next/image'

const icons = [
    "/nav/time.svg",
    "/nav/headphones.svg",
    "/nav/settings.svg",
    "/nav/cancel.svg",
]

function HeaderNav() {
  return (
    <header className="px-4 h-[72px] w-full max-w-[360px] bg-lightGreen flex justify-between items-center fixed top-0 left-0">
        <Logo/>

        <nav className="flex justify-start">
            {
                icons.map(icon => (
                    <NavItem
                    iconSrc={icon}
                    key={icon}
                    />
                ))
            }
        </nav>
    </header>
  )
}

export default HeaderNav

function NavItem ({ iconSrc }: {iconSrc: string}) {
    return (
        <Link href="/">
            <button className="flex justify-center items-center h-10 w-10 bg-lightGreen rounded-md hover:bg-darkGreen transition-all duration-300 ease">
                <Image
                src={iconSrc}
                alt="Navigation header icon"
                height={20}
                width={20}
                className='w-5 h-5 object-contain'
                />
            </button>
        </Link>
    )
}