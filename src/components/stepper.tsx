

import React, { useState } from 'react';
import { Steps } from 'antd';
import { connect, useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';
import { RootState } from '../redux/reducers/root.reducer';

const { Step } = Steps;

const ConnectedToStoreStepper = () => {
    const { currentStep, steps } = useSelector((s: RootState) => s.commonReducer)
    const { t, i18n } = useTranslation('common');

   
    return (
        <div className="stepper-wrapper" >
            <div className="flex-row-center-main-cross">
                <Steps current={currentStep} className="steps"  responsive>
                    {
                        steps.map((s: any, idx: number) => {
                            return <Step status={idx === currentStep ? "finish" : undefined} key={s.title} title={t(s.title)} icon={s.icon} />;
                        })
                    }
                </Steps>
            </div>
        </div>
    );
}; 
// const mapStateToProps = (state: ReduxStateInterface) => {
//     return { currentStep: state.currentStep, steps: state.steps };
// };

// const mapDispatchToProps = (dispatch: any) => {
//     return {
//         // nextOrPreviousStepAction: (stepNumber: number) => dispatch(Actions.move_step_forward_or_backward(stepNumber))
//     };
//   }
// export default connect(mapStateToProps, mapDispatchToProps)(ConnectedToStoreStepper);

export default ConnectedToStoreStepper;