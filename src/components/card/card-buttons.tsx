
import { Button } from 'antd';
import { connect } from 'react-redux';
import { ReduxStateInterface } from '../../interfaces/redux-state';
import '../../styles/card/card-buttons.sass';

const CardButtons = ({
    currentStep,
    totalSteps,
    onPressingBackButton,
    onPressingNextButton }: any) => {

    const justifyingAcoordingToCurrentStep = currentStep > 0 ? 'justify-content-space-between' : 'justify-content-center';
    return (
        <div className={"steps-action " + justifyingAcoordingToCurrentStep}>
            {
                currentStep > 0 && currentStep < totalSteps - 1
                &&
                <Button ghost={false} className="multi-step-form-button grey-button" style={{ marginLeft: 8 }} onClick={() => onPressingBackButton()}>
                    Back
                </Button>
            }
            {
                currentStep < totalSteps - 1
                &&
                <Button className="multi-step-form-button yellow-button" size="large" onClick={() => onPressingNextButton()}>Next</Button>
            }
        </div>
    )
};



export default CardButtons;