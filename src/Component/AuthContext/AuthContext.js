
import React, { createContext } from 'react'
import { getAuth } from 'firebase/auth'
import app from '../Firebase/Firebase'
export const AuthContext = createContext()
const auth = getAuth(app)

const ContextProvider = ({ children }) => {


    const s = { name: 'mohammed naizm' }
    const userInfo = { s }

    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default ContextProvider
