// all API calls in this file

import React, { useEffect, useState } from "react";
import { createShoutOut, deleteShoutOut, readAllShoutOuts } from "../service/ShoutOutApiService";

import { AuthContext } from "../context/auth-context";
import ShoutOut from "../model/ShoutOut";
import ShoutOutCard from "./ShoutOutCard";
import { ShoutOutForm } from "./ShoutOutForm";

export default function ShoutOutsByName() {
    const [ shoutOuts, setShoutOuts ] = useState<ShoutOut[]>( [] );
    const [ shoutOutsLoaded, setShoutOutsLoaded ] = useState( false );

    useEffect( () => {
        loadShoutOuts();
    }, [] );

    function loadShoutOuts() {
        readAllShoutOuts().then( shoutOutsFromApi => {
            setShoutOuts( shoutOutsFromApi );
            setShoutOutsLoaded( true );
        } );
    }

    function handleAddShoutOut( shoutOut: ShoutOut ): void {
        createShoutOut( shoutOut ).then( loadShoutOuts );
    }

    function handleDeleteShoutOut( shoutOutId: string | undefined ): void {
        if ( shoutOutId ) {
            deleteShoutOut( shoutOutId ).then( loadShoutOuts );
        }
    }

    return (
        <div className="ShoutOutsByName">
            { !shoutOutsLoaded ?
                <p className="ShoutOutList__message">Loading...</p>
                : shoutOuts.length === 0 ?
                    <p className="ShoutOutList__message">No Shout Outs</p>
                    :
                    shoutOuts.map( eachShoutOut =>
                        <ShoutOutCard key={ eachShoutOut._id } shoutOut={ eachShoutOut }
                            onDelete={ () => handleDeleteShoutOut( eachShoutOut._id ) }
                        /> )
            }
            {!AuthContext ?
                <ShoutOutForm onSubmit={ handleAddShoutOut } /> :
                <p>Log In to Send A Shout Out</p>
            }
        </div>
    );
}