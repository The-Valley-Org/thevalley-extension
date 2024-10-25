import React from 'react'
import Image from 'next/image';
import Button from './button';

function ListItem({
    iconSrc,
    title,
    date
}: {
    iconSrc: string;
    title: string;
    date?: string;
}) {
  return (
    <div className="w-[156px] h-[170px] flex flex-col justify-end items-center gap-4 pb-4 bg-white px-4">
        <Image
        src={iconSrc}
        height={32}
        width={32}
        alt="company logo"
        className='h-8 w-8 object-contain'
        />

        <div className='flex flex-col items-center justify-start'>
            <h3 className='text-[#000000] font-medium text-center'>
                {title}
            </h3>

            {
                date && (
                    <p className="text-[#5A6F8C] text-[12px] font-medium">
                        {date}
                    </p>
                )
            }
        </div>

        <div className='flex justify-between gap-1 w-full'>
            <Button
            className='bg-lightGreen grow max-h-[34px] text-white'
            text="Autofill"
            />

            <button className='flex justify-center items-center rounded-[8px] bg-lighterGreen border border-lightGreen w-[34px] h-[34px]'>
                <Image
                src="/mail.svg"
                alt="message icon"
                height={14}
                width={14}
                className='w-4 h-4 object-cover object-center'
                />
            </button>
        </div>
    </div>
  )
}

export default ListItem