import * as functions from "firebase-functions";

import { ObjectId } from "mongodb";
import ShoutOut from "../model/ShoutOut";
import cors from "cors";
import express from "express";
import { getClient } from '../db';

const app = express();
app.use( cors() );
app.use( express.json() );

// Get all shout outs
app.get( "/", async ( req, res ) => {
    const to = req.query.to;

    // initially search for everything
    const mongoQuery: any = {};

    // if there is a name to query, add it to mongo query
    if ( to ) {
        mongoQuery.name = to;
    }

    try {
        const client = await getClient();
        const results = await client.db().collection<ShoutOut>( 'shoutOuts' ).find().toArray();
        res.json( results ); // send JSON results
    } catch ( err ) {
        console.error( "FAIL", err );
        res.status( 500 ).json( { message: "Internal Server Error" } );
    }
} );

app.get( "/", async ( req, res ) => {


} );

// Add new shout out
app.post( "/", async ( req, res ) => {
    const shoutOut = req.body as ShoutOut;
    try {
        const client = await getClient();
        const result = await client.db().collection<ShoutOut>( 'shoutOuts' ).insertOne( shoutOut );
        shoutOut._id = result.insertedId;
        res.status( 201 ).json( shoutOut );
    } catch ( err ) {
        console.error( "FAIL", err );
        res.status( 500 ).json( { message: "Internal Server Error" } );
    }
} );

// Delete shout out
app.delete( "/:id", async ( req, res ) => {
    const id = req.params.id;
    try {
        const client = await getClient();
        const result = await client.db().collection<ShoutOut>( 'shoutOuts' ).deleteOne( { _id: new ObjectId( id ) } );
        if ( result.deletedCount === 0 ) {
            res.status( 404 ).json( { message: "Not Found" } );
        } else {
            res.status( 204 ).end();
        }
    } catch ( err ) {
        console.error( "FAIL", err );
        res.status( 500 ).json( { message: "Internal Server Error" } );
    }
} );

export default functions.https.onRequest( app );