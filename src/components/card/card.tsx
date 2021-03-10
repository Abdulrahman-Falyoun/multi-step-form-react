

import React from 'react';
import '../../styles/card/card.sass';
import CardButtons from './card-buttons';

const Card = ({ content, onPressingNextButton, onPressingBackButton }: any) => {
    return (
        <div className="card-wrapper">
            <div className="card-content">
                <div className='content-area'>
                    {
                        content
                    }
                </div>
                <div className="card-buttons">
                    <CardButtons onPressingNextButton={onPressingNextButton} onPressingBackButton={onPressingBackButton} />
                </div>
            </div>
        </div>
    )
};


export default Card;