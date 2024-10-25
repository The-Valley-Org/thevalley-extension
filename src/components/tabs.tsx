'use client'
import React, { ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/util'
import Image from 'next/image'

const tabs = [
    {
        tab: 'home',
        path: '/',
        icon: "/tabs/home.svg",
        iconActive: "/tabs/home-green.svg"
    },
    {
        tab: 'user',
        path: '/profile',
        icon: "/tabs/user.svg",
        iconActive: "/tabs/user-green.svg"
    },
    {
        tab: 'company',
        path: '/company',
        icon: "/tabs/company.svg",
        iconActive: "/tabs/company-green.svg"
    },
    {
        tab: 'answers',
        path: '/answers',
        icon: "/tabs/answers.svg",
        iconActive: "/tabs/answers-green.svg"
    },
]

function Tabs() {
    const pathname = usePathname()
    return (
        <div className="flex justify-start">
            {
                tabs.map(({tab, icon, iconActive, path}) => {
                    const active = pathname == path
                    return(
                        <TabItem
                        isActive={active}
                        icon={active ? iconActive : icon}
                        text={tab}
                        path={path}
                        key={tab}
                        />
                    )
                })
            }
        </div>
    )
}

export default Tabs

function TabItem({
    isActive,
    icon,
    text,
    path
}: {
    isActive: boolean
    icon: string
    text: string
    path: string
}) {
    return(
        <Link href={path}>
            <button className={cn(
                'flex flex-col w-[90px] h-[80px] gap-2 justify-center items-center relative',
                {
                    "bg-gradient-to-t from-[#EFFAF5] via-white to-white": isActive,
                    "bg-white": !isActive,
                }
            )}>
                <Image
                src={icon}
                height={16}
                width={16}
                alt="tab button icon"
                className='object-contain object-center'
                />

                <p className="capitalize font-medium text-base">
                    {text}
                </p>

                <div className={cn(
                    "h-1 w-full absolute bottom-0 left-0",
                    {
                        "bg-lightGreen":isActive,
                        "bg-transparent":!isActive,
                    }
                )} />
            </button>
        </Link>
    )
}