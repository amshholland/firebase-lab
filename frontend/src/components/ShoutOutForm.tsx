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

        // clear form
        setTo( "" );
        setFrom( "" );
        setMessage( "" );
    }


    function handleAddShoutOut() {

    }

    return (
        <form onSubmit={ handleSubmit } className="ShoutOutForm">
            <h1>Leave a Shout Out</h1>
            <label>To
                <input type="text" />
            </label>
            <label>From
                <input type="text" />
            </label>
            <label>Message
                <input type="text" />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}