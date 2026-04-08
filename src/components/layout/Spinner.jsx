import React from 'react'
import preview from '../../preview.gif'

function Spinner() {
    return (
        <div className='w-100 mt-20'>
            <img
                src={preview}
                alt='Loading....'
                width={180}
                className='text-center mx-auto'
            />
        </div>
    )
}

export default Spinner
