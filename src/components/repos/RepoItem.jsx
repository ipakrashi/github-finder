import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'
import React from 'react'

function RepoItem({ repo }) {
    const {
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count,
    } = repo
    return (
        <div className='mb-2 card rounded bg-gray-800 p-2 hover:bg-gray-900 text-white flex justify-content-center align-items-center'>
            <div className='card-body'>
                <h3 className='font-semibold mb-2 text-xl'>
                    <a href={html_url}>
                        <FaLink className='inline mr-1' /> {name}
                    </a>
                </h3>
                <p className='mb-3'>{description}</p>

                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div className='mr-4 badge badge-info'>
                        <FaEye /> {watchers_count}
                    </div>

                    <div className='mr-4 badge badge-success'>
                        <FaStar className='mr-2' /> {stargazers_count}
                    </div>
                    <div className='mr-4 badge badge-success'>
                        <FaInfo className='mr-2' /> {open_issues}
                    </div>
                    <div className='mr-4 badge badge-success'>
                        <FaUtensils className='mr-2' /> {forks}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RepoItem
