import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Logo() {
  return (
    <Link href="/">
        <Image
        src="/logo/logo.svg"
        height={40}
        width={137}
        alt="The Valley logo"
        className='h-10 w-[137px] object-contain object-center'
        />
    </Link>
  )
}

export default Logo