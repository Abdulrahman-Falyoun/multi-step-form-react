

import React, { useEffect } from 'react';
import Stepper from './stepper';
import Card from './card/card';


// Style
import '../styles/seller-form.sass'
import { ReduxStateInterface } from '../interfaces/redux-state';
import Actions from '../redux/actions/index';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import { useTranslation } from 'react-i18next';

const SellerForm = ({
    nextOrPreviousStepAction,
    CardContent,
    fillStepDataAction,
    currentStep,
    totalSteps,
    injectCurrentStepDataToStore,
    errors,
    warnings,
    submitting
}: any) => {
    const { t, i18n } = useTranslation('common');

    const next = () => {
        injectCurrentStepDataToStore();
    };
    const prev = () => {
        nextOrPreviousStepAction(-1);
    }

    return (
        <React.Fragment>
            <div className={"seller-form-wrapper flex-column-flex-start-main-cross-center " + (i18n.language === 'en' ? 'english-container' : 'arabic-container')}>
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
                    submitting={submitting}
                />
                
            </div>

        </React.Fragment>


    )
};





const mapStateToProps = (state: ReduxStateInterface) => {
    return {
        CardContent: state.steps[state.currentStep].component,
        currentStep: state.currentStep,
        totalSteps: state.steps.length,
        errors: state.stepErrors,
        warnings: state.stepWarnings,
        submitting: state.applyCurrentStepDataToStore
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        nextOrPreviousStepAction: (stepNumber: number) => dispatch(Actions.move_step_forward_or_backward(stepNumber)),
        injectCurrentStepDataToStore: () => dispatch(Actions.inject_data_from_step_to_store())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(SellerForm);