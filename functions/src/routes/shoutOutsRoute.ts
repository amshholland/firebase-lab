import * as functions from "firebase-functions";

import cors from "cors";
import express from "express";

// import ShoutOuts from '../model/ShoutOuts';



const app = express();
app.use( cors() );
app.use( express.json() );

app.get( "/", ( req, res ) => {
    res.json( { message: "Hello World!" } );
} );

export default functions.https.onRequest( app );
