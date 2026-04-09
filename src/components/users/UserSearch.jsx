import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'

function UserSearch() {
    const [text, setText] = useState(' ')

    const { users } = useContext(GithubContext)

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (text === ' ') {
            alert('Please enter something')
        } else {
            // To-Do Search Users
            alert(text)
            setText(' ')
        }
    }

    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='form-control'>
                        <div className='relative'>
                            <input
                                type='text'
                                className='w-full pr-40 bg-white input input-lg text-black border-2 py-3 px-10 rounded'
                                placeholder='Search Profile'
                                value={text}
                                onChange={handleChange}
                            />
                            <button className='absolute  w-36  btn-xl text-white bg-black py-3 px-10 rounded'>
                                Go
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {users.length > 0 && (
                <div>
                    <button
                        className='btn btn-ghost btn-lg bg-gray-400 py-3 px-10 6 text-white rounded'
                        style={{ marginLeft: '120px' }}
                    >
                        Clear
                    </button>
                </div>
            )}
        </div>
    )
}

export default UserSearch
