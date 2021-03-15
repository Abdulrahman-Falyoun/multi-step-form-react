

import { Alert, Spin } from 'antd';
import React, { useState } from 'react';
import '../../styles/card/card.sass';
import CardButtons from './card-buttons';
import { uniqueHashCode } from '../../utils/unique-string-generator';
import { useTranslation } from 'react-i18next';
const Card = ({
    content,
    onPressingNextButton,
    onPressingBackButton,
    currentStep,
    totalSteps,
    errors,
    warnings,
    submitting
}: any) => {
    const { t, i18n } = useTranslation('common');
    const [currentLanguage, setCurrentLanguage] = useState('en');
    return (
        <div className={"card-wrapper " + (i18n.language === 'en' ? 'english-container' : 'arabic-container')}>

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
                        submitting={submitting}
                    />
                </div>
                <div>
                    <button onClick={() => {
                        i18n.changeLanguage(currentLanguage === 'en' ? 'ar' : 'en')
                            .then(_ => {
                                setCurrentLanguage(i18n.language)
                            }).catch(console.log);
                    }}>
                        alter language
                    </button>
                </div>
                {submitting &&
                    <div className="submitting-spinner">
                        <Spin tip="Submitting..." size="large" />
                    </div>
                }
            </div>
        </div>
    )
};


export default Card;