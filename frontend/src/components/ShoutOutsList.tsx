// all API calls in this file

import './ShoutOutsList.css';

import React, { useEffect, useState } from "react";
import { createShoutOut, deleteShoutOut, readAllShoutOuts } from "../service/ShoutOutApiService";

import ShoutOut from "../model/ShoutOut";
import ShoutOutCard from "./ShoutOutCard";
import { ShoutOutForm } from "./ShoutOutForm";

export default function ShoutOutsList() {
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
            <ShoutOutForm onSubmit={ handleAddShoutOut } />

            <div className="shoutOutsDiv">
                <h3>All Shout Outs</h3>
                { !shoutOutsLoaded ?
                    <p className="ShoutOutList__message">Loading...</p>
                    : shoutOuts.length === 0 ?
                        <h4 className="ShoutOutList__message">No Shout Outs</h4>
                        :
                        shoutOuts.map( eachShoutOut =>
                            <ShoutOutCard key={ eachShoutOut._id } shoutOut={ eachShoutOut }
                                onDelete={ () => handleDeleteShoutOut( eachShoutOut._id ) }
                            /> )
                }
            </div>

        </div>
    );
}