
import { MOVE_STEP_FORWARD_OR_BACKWARD, FILL_STEP_DATA, INJECT_DATA_FROM_STEP_TO_STORE } from '../types/actions-types';
import { ReduxStateInterface } from '../../interfaces/redux-state';
import { ActionInterface } from '../../interfaces/action-interface';
import StepOneGeneral from '../../components/steps/step-one-general';
import StepTwoStore from '../../components/steps/step-two-store';
import StepThreeSocialMedia from '../../components/steps/step-three-social-medial';
import StepFourDocument from '../../components/steps/step-four-bank';
import StepFiveVAT from '../../components/steps/step-five-vat';
import EndStep from '../../components/steps/end-step';
import * as ICONS from '../../components/svg-icons';

import { fillDataReducer } from './fill-step-data-reducer';
import { moveStepReducer } from './move-step-reducer';
import { injectDataFromStepToStoreReducer } from './inject-data-from-step-to-store-reducer';
const initialState: ReduxStateInterface = {
    currentStep: 0,
    currentStepHasErrorAsMandatoryFieldsNotFilled: false,
    applyCurrentStepDataToStore: false,
    steps: [
        {
            title: 'General',
            icon: ICONS.BankSVGIcon,
            data: {},
            component: <StepOneGeneral />
        },
        {
            title: 'Store',
            icon: ICONS.StoreSVGIcon,
            data: {},
            component: <StepTwoStore />
        },
        {
            title: 'Social Media',
            icon: ICONS.DocumentSVGIcon,
            data: {},
            component: <StepThreeSocialMedia />
        },
        {
            title: 'Bank',
            icon: ICONS.BankSVGIcon,
            data: {},
            component: <StepFourDocument />
        },
        {
            title: 'VAT',
            icon: ICONS.LaptopSVGIcon,
            data: {},
            component: <StepFiveVAT />
        },
        {
            title: 'End',
            icon: ICONS.CheckMarkSVGIcon,
            data: {},
            component: <EndStep />
        }
    ]
};

export default (state = initialState, action: ActionInterface) => {
    switch (action.type) {
        case MOVE_STEP_FORWARD_OR_BACKWARD:
            return moveStepReducer(state, action);

        case FILL_STEP_DATA:
            return fillDataReducer(state, action);

        case INJECT_DATA_FROM_STEP_TO_STORE:
            return injectDataFromStepToStoreReducer(state, action);
        default:
            return state;
    }
};