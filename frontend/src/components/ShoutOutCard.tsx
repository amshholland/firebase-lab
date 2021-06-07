import './ShoutOutCard.css';

import ShoutOut from "../model/ShoutOut";

interface Props {
    shoutOut: ShoutOut;
    onDelete: () => void;
}

export default function ShoutOutCard( { shoutOut, onDelete }: Props ) {

    return (
        <div className="ShoutOutCard">
            <div className="details">
                <div className="cardHeader">
                    <div className="h3"><h3>{ shoutOut.from } </h3></div>
                    <div className="h4"><h4> to </h4></div>
                    <div className="h3"><h3> { shoutOut.to }</h3></div>
                </div>
                <p className="cardMessage">{ shoutOut.message }</p>
            </div>
            <div className="deleteDiv">
                <button className="delete" onClick={ onDelete }>x</button>
            </div>
        </div>
    );
}