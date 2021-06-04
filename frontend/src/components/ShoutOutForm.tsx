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
            <h2>Leave a Shout Out</h2>
            <label><strong>To</strong><br />
                <input type="text" value={ to } onChange={ e => setTo( e.target.value ) } required />
            </label>
            <label><strong>From</strong><br />
                <input type="text" value={ from } onChange={ e => setFrom( e.target.value ) } required />
            </label>
            <label><strong>Message</strong><br />
                <textarea rows={ 4 } value={ message } onChange={ e => setMessage( e.target.value ) } required></textarea>
            </label>
            <button type="submit">Submit</button>
        </form >
    );
}