import './ShoutOutForm.css';

import { ChangeEvent, FormEvent, useState } from "react";

import ShoutOut from "../model/ShoutOut";

interface Props {
    onSubmit: ( shoutOut: ShoutOut ) => void;
}

export function ShoutOutForm( { onSubmit }: Props ) {
    const [ to, setTo ] = useState( "" );
    const [ from, setFrom ] = useState( "" );
    const [ message, setMessage ] = useState( "" );

    function handleSubmit( event: FormEvent ): void {
        event.preventDefault();
        const shoutOut: ShoutOut = {
            to: to,
            from: from,
            message: message
        };
        onSubmit( shoutOut );

        setTo( "" );
        setFrom( "" );
        setMessage( "" );
    }

    return (
        <form onSubmit={ handleSubmit } className="ShoutOutForm">

            <h3>Leave a Shout Out</h3>

            <label className="toFrom"><strong>To: </strong>
                <input type="text" className="inputBox" value={ to } onChange={ e => setTo( e.target.value ) } required />
            </label>
            <label className="toFrom"><strong>From: </strong>
                <input type="text" className="inputBox" value={ from } onChange={ e => setFrom( e.target.value ) } required />
            </label>
            <label className="message"><strong>Message: </strong>
                <textarea rows={ 4 } value={ message } onChange={ e => setMessage( e.target.value ) } required></textarea>
            </label>

            <button type="submit" className="submit">Submit</button>
        </form >
    );
}