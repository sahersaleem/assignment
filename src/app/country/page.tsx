import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div className=" w-full h-screen flex justify-center items-center bg-white text-black flex-col">
        <h1 className='text-3xl font-bold'>Countries</h1>
       <div className='text-xl flex flex-col'>
        <Link href={"/country/UnitedStates"}>United States</Link>
        <Link href={"/country/Canada"}>Canada</Link>
        <Link href={"/country/Japan"}>Japan</Link>
        <Link href={"/country/Germany"}>Germany</Link>
        <Link href={"/country/India"}>India</Link>
        </div>
    </div>
  )
}

export default page
