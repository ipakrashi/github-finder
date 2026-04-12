import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

const GITHUB_URL = 'https://api.github.com'
// const GITHUB_TOKEN = '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'

export const GithubProvider = ({ children }) => {
    // Initial State defined
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
    }

    // Reducer function called and used
    const [state, dispatch] = useReducer(githubReducer, initialState)

    // Set Loading function to change the value of Loading
    const setLoading = () => dispatch({ type: 'SET_LOADING' })

    //Search Users
    const searchUsers = async (text) => {
        setLoading()
        console.log(text)

        try {
            const response = await fetch(`${GITHUB_URL}/search/users?q=${text}`)
            const { items } = await response.json()
            dispatch({ type: 'GET_USERS', payload: items })
        } catch (error) {}
    }

    //Single User
    const getUser = async (login) => {
        setLoading()
        console.log(login)

        try {
            const response = await fetch(`${GITHUB_URL}/users/${login}`)
            if (response.status === 404) {
                window.location = '/notfound'
            } else {
                const data = await response.json()
                dispatch({ type: 'GET_USER', payload: data })
            }
        } catch (error) {}
    }

    //Get User Repos
    const getUserRepos = async (login) => {
        setLoading()
        console.log(login)

        try {
            const response = await fetch(
                `${GITHUB_URL}/users/${login}/repos?sort='created'&per_page=10`,
            )
            const data = await response.json()
            dispatch({ type: 'GET_REPOS', payload: data })
        } catch (error) {}
    }

    // Clear Users
    const clearUsers = () => dispatch({ type: 'CLEAR_USERS' })

    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                user: state.user,
                repos: state.repos,
                loading: state.loading,
                searchUsers,
                clearUsers,
                getUser,
                getUserRepos,
            }}
        >
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext
