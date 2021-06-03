import ShoutOut from "../model/ShoutOut";

interface Props {
    shoutOut: ShoutOut;
    onDelete: () => void;
}

export default function ShoutOutCard( { shoutOut, onDelete }: Props ) {

    return (
        <div className="ShoutOutCard">
            <div>
                <h3>Shout out to { shoutOut.to }</h3>
            </div>
            <div>
                <h3>-from { shoutOut.from }</h3>
            </div>
            <p>{ shoutOut.message }</p>
            <div>
                <button onClick={ onDelete }>Delete</button>
            </div>
        </div>
    );
}