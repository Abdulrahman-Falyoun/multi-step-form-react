

import { Alert, Spin } from 'antd';
import React, { useState } from 'react';
import CardButtons from './card-buttons';
import { uniqueHashCode } from '../../utils/unique-string-generator';
import { useTranslation } from 'react-i18next';
const Card = ({
    content,
    onPressingNextButton,
    onPressingBackButton,
    currentStep,
    totalSteps,
    currentStepError,
    currentStepWarning,
    submitting
}: any) => {
    const { t, i18n } = useTranslation('common');
    return (
        <div className="card-wrapper">

            <div className="card-content">
                {
                    currentStepError && currentStepError?.length > 0
                    &&
                    <div className="error-area">
                        {
                            <Alert message={t(currentStepError)} type="error" showIcon closable />
                        }
                    </div>
                }
                {
                    currentStepWarning && currentStepWarning?.length > 0
                    &&
                    <div className="warnings-area">
                        {
                            <Alert message={t(currentStepWarning)} type="error" showIcon closable />
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
                        submitting={submitting}
                    />
                </div>
                {submitting &&
                    <div className="submitting-spinner">
                        <Spin tip={t("submitting") + "..."} size="large" />
                    </div>
                }
            </div>
        </div>
    )
};


export default Card;