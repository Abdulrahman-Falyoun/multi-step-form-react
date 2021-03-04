

import React from 'react';
import '../styles/card.sass';
import CardButtons from './card-buttons';

export default () => {
    return (
        <div className="card-wrapper">
            <div className="card-buttons">
            <CardButtons />
            </div>
        </div>
    )
};