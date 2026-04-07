import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className='hero'>
            <div className='text-center hero-content'>
                <div className='mx-w-lg'>
                    <h1 className='text-8xl font-bold mb-8'>Oops!</h1>
                    <p className='text-5xl mb-8 '>404 - Page Not Found!</p>
                    <Link
                        className='btn btn-primary btn-lg bg-blue-400 text-center align-content-center justify-content-center'
                        to='/'
                    >
                        <FaHome className='text-4xl m-auto align-content-center justify-content-center  ' />
                        Back To Home
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound
