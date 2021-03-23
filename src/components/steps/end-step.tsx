
import { FinalStepSVGIcon } from '../svg-icons';
import React from 'react';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
const EndStep = () => {
    const { t, i18n } = useTranslation('common');
    return (
        <div className="flex-column-center-main-cross">
            <div className="happy-man">
                {FinalStepSVGIcon}
            </div>
            <div className="success-msg">
                <p className="success-title-word">{t('success')}</p>
                <p className="success-msg-body">{t('you have been successfully registerd as seller')}</p>
            </div>
            <Button ghost={false} className="multi-step-form-button yellow-button" style={{ marginLeft: 8 }} onClick={() => {
            }}>
                {t('done')}
            </Button>
        </div>
    )
};

export default EndStep;