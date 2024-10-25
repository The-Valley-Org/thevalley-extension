

import React, { ReactNode } from 'react'
import Button from './button'

function PaginatedList({
    title,
    children,
    btnText
}: {
    title: string
    children: ReactNode
    btnText: string
}) {
  return (
    <div className='w-full flex flex-col gap-4 justify-start items-start'>
        <h2 className="font-semibold text-lg text-[#000000]">
            {title}
        </h2>

        <div className="grid grid-cols-2 w-full gap-4">
            {children}
        </div>

        <div className='flex w-full justify-center items-center'>
            <Button
            text={btnText}
            className='h-[30px] w-[138px] text-[12px] font-semibold border border-lightGreen bg-lighterGreen text-lightGreen'
            />
        </div>
    </div>
  )
}

export default PaginatedList