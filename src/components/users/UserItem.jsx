import React from 'react'
import { Link } from 'react-router-dom'

function UserItem({ user: { login, avatar_url } }) {
    return (
        <div className='card shadow-md compact side bg-slate-700 p-3'>
            <div className='flex-row items-center space-x-4 card-body'>
                <div className=''>
                    <div className='avatar '>
                        <div className='rounded-full shadow w-14 h-14 mx-3'>
                            <img
                                src={avatar_url}
                                alt=''
                                className='rounded-full w-14 h-14'
                            />
                        </div>
                    </div>
                </div>
                <div className=''>
                    <h2 className='card-title text-gray-200'>{login}</h2>
                    <Link
                        className='text-base-content text-opacity-40 text-white'
                        to={`/users/${login}`}
                    >
                        Visit Profile
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UserItem
