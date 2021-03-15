
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';

const CardButtons = ({
    currentStep,
    totalSteps,
    onPressingBackButton,
    onPressingNextButton,
    submitting }: any) => {
    const { t, i18n } = useTranslation('common');
    const justifyingAcoordingToCurrentStep = currentStep > 0 ? 'justify-content-space-between' : 'justify-content-center';
    return (
        <div className={"steps-action " + justifyingAcoordingToCurrentStep}>
            {
                currentStep > 0 && currentStep < totalSteps - 1
                &&
                <Button disabled={submitting} ghost={false} className="multi-step-form-button grey-button" style={{ marginLeft: 8 }} onClick={() => onPressingBackButton()}>
                    {t('back')}
                </Button>
            }
            {
                currentStep < totalSteps - 1
                &&
                <Button disabled={submitting} className="multi-step-form-button yellow-button" size="large" onClick={() => onPressingNextButton()}>{t('next')}</Button>
            }
        </div>
    )
};



export default CardButtons;