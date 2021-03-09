

import React, { useState } from 'react';
import '../styles/card/card.sass';
import '../styles/stepper.sass';
import { Steps } from 'antd';
import { connect } from "react-redux";
import { ReduxStateInterface } from '../interfaces/redux-state';

const { Step } = Steps;

const ConnectedToStoreStepper = (props: any) => {
    const { currentStep, steps } = props;

   
    return (
        <div className="stepper-wrapper">
            <div className="flex-row-center-main-cross">
                <Steps current={currentStep} className="steps"  responsive={true ? true : undefined}>
                    {
                        steps.map((s: any, idx: number) => {
                            return <Step status={idx === currentStep ? "finish" : undefined} key={s.title} title={s.title} icon={s.icon} />;
                        })
                    }
                </Steps>
            </div>
        </div>
    );
}; 
const mapStateToProps = (state: ReduxStateInterface) => {
    return { currentStep: state.currentStep, steps: state.steps };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        // nextOrPreviousStepAction: (stepNumber: number) => dispatch(Actions.move_step_forward_or_backward(stepNumber))
    };
  }
export default connect(mapStateToProps, mapDispatchToProps)(ConnectedToStoreStepper);