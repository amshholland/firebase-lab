import './Header.css';

import { signInWithGoogle, signOut } from '../firebaseConfig';

import { AuthContext } from '../context/auth-context';
import { useContext } from 'react';

export default function Header() {

    const { user } = useContext( AuthContext );
    console.log( user );

    return (
        <header className="Header">
            <button onClick={ signInWithGoogle }>Sign in with Google</button>
            <button onClick={ signOut }>Sign Out</button>
            {user && <div>
                Welcome { user.displayName }
            </div> }
        </header>
    );
};