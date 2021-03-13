

import React from 'react';
import '../../styles/card/card.sass';
import CardButtons from './card-buttons';

const Card = ({ content, onPressingNextButton, onPressingBackButton, currentStep, totalSteps }: any) => {
    return (
        <div className="card-wrapper">
            <div className="card-content">
                <div className='content-area'>
                    {
                        content
                    }
                </div>
                <div className="card-buttons">
                    <CardButtons
                        onPressingNextButton={onPressingNextButton}
                        onPressingBackButton={onPressingBackButton}
                        currentStep={currentStep}
                        totalSteps={totalSteps}
                    />
                </div>
            </div>
        </div>
    )
};


export default Card;