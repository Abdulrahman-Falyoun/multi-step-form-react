
import { Button } from 'antd';
import { connect } from 'react-redux';
import { ReduxStateInterface } from '../../interfaces/redux-state';
import Actions from '../../redux/actions/index';
import '../../styles/card/card-buttons.sass';

const ConnectedCardButtons = (props: any) => {
    const { currentStep, totalSteps, nextOrPreviousStepAction } = props;
    const next = () => {
        nextOrPreviousStepAction(1);
    };
    const prev = () => {
        nextOrPreviousStepAction(-1);
    }
    const justifyingAcoordingToCurrentStep = currentStep > 0 ? 'justify-content-space-between' : 'justify-content-center';
    return (
        <div className={"steps-action " + justifyingAcoordingToCurrentStep}>
            {
                currentStep > 0 && currentStep < totalSteps - 1
                &&
                <Button ghost={false} className="multi-step-form-button grey-button" style={{ marginLeft: 8 }} onClick={() => prev()}>
                    Back
                </Button>
            }
            {
                currentStep < totalSteps - 1
                &&
                <Button className="multi-step-form-button yellow-button" size="large" onClick={() => next()}>Next</Button>
            }
        </div>
    )
};

const mapStateToProps = (state: ReduxStateInterface) => {
    return { currentStep: state.currentStep, totalSteps: state.steps.length };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        nextOrPreviousStepAction: (stepNumber: number) => dispatch(Actions.move_step_forward_or_backward(stepNumber))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ConnectedCardButtons);