// all API calls in this file

import React, { useEffect, useState } from "react";
import { createShoutOut, deleteShoutOut, readAllShoutOuts } from "../service/ShoutOutApiService";

import ShoutOut from "../model/ShoutOut";
import ShoutOutCard from "./ShoutOutCard";
import { ShoutOutForm } from "./ShoutOutForm";

export default function ShoutOutsList() {
    // array of ShoutOuts from the API
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
        <div className="ShoutOutsList">
            <h2>All Shout Outs</h2>
            { !shoutOutsLoaded ?
                <p>Loading...</p>
                : shoutOuts.length === 0 ?
                    <p>No ShoutOuts</p>
                    : shoutOuts.map( shoutOutCard =>
                        <ShoutOutCard key={ shoutOutCard._id } shoutOut={ shoutOutCard } onDelete={ () => handleDeleteShoutOut( shoutOutCard._id ) } /> )
            }
            <h2>Leave a Shout Out</h2>
            <ShoutOutForm onSubmit={ handleAddShoutOut } />
        </div>
    );
}