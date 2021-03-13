

import React, { useEffect } from 'react';
import Stepper from './stepper';
import Card from './card/card';


// Style
import '../styles/seller-form.sass'
import { ReduxStateInterface } from '../interfaces/redux-state';
import Actions from '../redux/actions/index';
import { connect } from 'react-redux';

const SellerForm = ({
    nextOrPreviousStepAction,
    CardContent,
    fillStepDataAction,
    currentStep,
    totalSteps,
    injectCurrentStepDataToStore,
    errors,
    warnings
}: any) => {
    const next = () => {
        injectCurrentStepDataToStore();
    };
    const prev = () => {
        nextOrPreviousStepAction(-1);
    }

    return (
        <div className="seller-form-wrapper flex-column-flex-start-main-cross-center">
            <Stepper />
            <Card
                onPressingNextButton={next}
                onPressingBackButton={prev}
                content={CardContent}
                fillStepDataAction={fillStepDataAction}
                currentStep={currentStep}
                totalSteps={totalSteps}
                errors={errors}
                warnings={warnings}
            />
        </div>
    )
};





const mapStateToProps = (state: ReduxStateInterface) => {
    return {
        CardContent: state.steps[state.currentStep].component,
        currentStep: state.currentStep,
        totalSteps: state.steps.length,
        errors: state.stepErrors,
        warnings: state.stepWarnings
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        nextOrPreviousStepAction: (stepNumber: number) => dispatch(Actions.move_step_forward_or_backward(stepNumber)),
        injectCurrentStepDataToStore: () => dispatch(Actions.inject_data_from_step_to_store())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(SellerForm);