import React from 'react'
import { useRouter } from 'next/router';

export default function NotFound() {
    const router = useRouter();
    return (
        <div className='container py-14'>
            <h1 className='text-6xl text-red-600 font-bold text-center'>404 </h1>
            <h1 className='text-5xl text-sky-500 font-bold text-center'>Page Not Found </h1>
            <h1 className='text-center mt-8'><button onClick={() => router.push('/')} className="bg-green-500 hover:bg-green-600 text-gray-100 rounded-lg py-1 px-3 block mx-auto">Back To Home</button></h1>

        </div>
    )
}