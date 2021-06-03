import * as functions from "firebase-functions";

import { MongoClient } from "mongodb";

const uri = functions.config().mongodb.uri;
let client;

export default async () => {

  if ( client && client.isConnected() ) {
    console.log( 'DB CLIENT ALREADY CONNECTED' );

  } else try {
    client = await MongoClient.connect( uri, { useNewUrlParser: true } );
    console.log( 'DB CLIENT RECONNECTED' );
  }

  catch ( e ) {
    throw e;
  }

  return client;
};