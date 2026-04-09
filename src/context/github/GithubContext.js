import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

const GITHUB_URL = 'https://api.github.com'
const GITHUB_TOKEN = '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'

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        loading: true,
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    const fetchUsers = async () => {
        try {
            const response = await fetch(`${GITHUB_URL}/users`)
            const data = await response.json()
            dispatch({ type: 'GET_USERS', payload: data })
        } catch (error) {}
    }
    return (
        <GithubContext.Provider
            value={{ users: state.users, loading: state.loading, fetchUsers }}
        >
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext
