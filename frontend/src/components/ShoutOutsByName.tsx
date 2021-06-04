// all API calls in this file

import React, { useEffect, useState } from "react";
import { createShoutOut, deleteShoutOut, readAllShoutOuts } from "../service/ShoutOutApiService";

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

    function handleDeleteShoutOut( studentId: string | undefined ): void {
        if ( studentId ) {
            deleteShoutOut( studentId ).then( loadShoutOuts );
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
            <h3>Leave a Shout Out</h3>
            <ShoutOutForm onSubmit={ handleAddShoutOut } />
        </div>
    );
}