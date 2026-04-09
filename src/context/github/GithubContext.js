import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

const GITHUB_URL = 'https://api.github.com'
// const GITHUB_TOKEN = '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'

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        loading: false,
    }

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

    // Clear Users
    const clearUsers = () => dispatch({ type: 'CLEAR_USERS' })

    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                loading: state.loading,
                searchUsers,
                clearUsers,
            }}
        >
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext
