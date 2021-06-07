import React, { ReactNode, createContext, useEffect, useState } from 'react';

import firebase from '../firebaseConfig';

export interface AuthContextValue {
    user: firebase.User | null; // null when not logged in
}

const defaultValue: AuthContextValue = {
    user: null
};

export const AuthContext = createContext( defaultValue );

export function AuthContextProvider( { children }: { children: ReactNode; } ) {
    const [ user, setUser ] = useState<firebase.User | null>( null );

    useEffect( () => { // useEffect to only register once at start
        return firebase.auth().onAuthStateChanged( newUser => {
            setUser( newUser );
        } );
    }, [] );

    return (
        <AuthContext.Provider value={ { user } }>
            {children }
        </AuthContext.Provider>
    );
};