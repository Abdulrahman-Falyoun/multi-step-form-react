

import React from 'react';
import Stepper from './stepper';
import Card from './card/card';


// Style
import '../styles/seller-form.sass'
import { ReduxStateInterface } from '../interfaces/redux-state';
import Actions from '../redux/actions/index';
import { connect } from 'react-redux';

const SellerForm =  ({ nextOrPreviousStepAction, CardContent }: any) => {

    const next = () => {
        nextOrPreviousStepAction(1);
    };
    const prev = () => {
        nextOrPreviousStepAction(-1);
    }

    return (
        <div className="seller-form-wrapper flex-column-flex-start-main-cross-center">
            <Stepper />
            <Card onPressingNextButton={next} onPressingBackButton={prev}  content={CardContent}/>
        </div>
    )
};





const mapStateToProps = (state: ReduxStateInterface) => {
    return {
        CardContent: state.steps[state.currentStep].component
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        nextOrPreviousStepAction: (stepNumber: number) => dispatch(Actions.move_step_forward_or_backward(stepNumber))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(SellerForm);