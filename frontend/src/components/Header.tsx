import './Header.css';

import { signInWithGoogle, signOut } from '../firebaseConfig';

import { AuthContext } from '../context/auth-context';
import { useContext } from 'react';

export default function Header() {

    const { user } = useContext( AuthContext );
    console.log( user );

    return (
        <header className="Header">
            {/* If not logged in, display sign in button, otherwise display sign out button */ }
            {user ?
                <div>
                    <button onClick={ signOut }>Sign Out</button>
                    <br />
                    <h2 className="welcome">Welcome { user.displayName }</h2>
                </div> :
                <button onClick={ signInWithGoogle }>Sign in with Google</button> }
        </header>
    );
};