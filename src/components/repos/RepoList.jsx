import React from 'react'
import RepoItem from './RepoItem'

function RepoList({ repos }) {
    return (
        <div className='rounded shadow card bg-base-100 p-10'>
            <div className='card-body'>
                <h2 className='text-3xl my-4 font-bold card-title'>
                    Latest Repositories
                </h2>
                {repos.map((repo, index) => (
                    <RepoItem key={repo.id} repo={repo} />
                ))}
            </div>
        </div>
    )
}

export default RepoList
