

import { Alert } from 'antd';
import React from 'react';
import '../../styles/card/card.sass';
import CardButtons from './card-buttons';
import { uniqueHashCode } from '../../utils/unique-string-generator';
const Card = ({
    content,
    onPressingNextButton,
    onPressingBackButton,
    currentStep,
    totalSteps,
    errors,
    warnings
}: any) => {
    return (
        <div className="card-wrapper">
            <div className="card-content">
                {
                    errors && errors?.length > 0
                    &&
                    <div className="error-area">
                        {
                            errors.map((err: string) => <Alert key={uniqueHashCode(err)} message={err} type="error" showIcon closable />)
                        }
                    </div>
                }
                {
                    warnings && warnings?.length > 0
                    &&
                    <div className="warnings-area">
                        {
                            warnings.map((warni: string) => <Alert key={uniqueHashCode(warni)} message={warni} type="error" showIcon closable />)
                        }
                    </div>
                }
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