import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar({ title = 'Github Finder' }) {
    return (
        <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content bg-black'>
            <div className='container mx-auto pt-5'>
                <div className='flex-none px-2 mx-2 '>
                    <FaGithub className='inline pr-2  text-3xl text-white ' />
                    <Link
                        to='/'
                        className='text-lg font-bold  justify-content-center align-content-center text-white'
                    >
                        {title}
                    </Link>
                </div>
                <div className='px-2 mx-2 flex-1'>
                    <div className='flex justify-end'>
                        <Link
                            to='/'
                            className='btn btn-ghost btn-sm rounded-btn pr-5 text-white  bg-gray-400 px-10 py-2 mr-2 align-content-center justify-content-center mb-5'
                        >
                            Home
                        </Link>
                        <Link
                            to='/about'
                            className='btn btn-ghost btn-sm rounded-btn text-white bg-gray-400 px-10 py-2 ml-2 align-content-center justify-content-center mb-5'
                        >
                            About
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
