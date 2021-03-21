
import { MOVE_STEP_FORWARD_OR_BACKWARD, FILL_STEP_DATA, INJECT_DATA_FROM_STEP_TO_STORE, SUBMITTING } from '../types/actions-types';
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
import { combineReducers } from 'redux';


const rootReducer = combineReducers({});
export type RootState = ReturnType<typeof rootReducer>;

const initialState: ReduxStateInterface = {
    currentStep: 0,
    applyCurrentStepDataToStore: false,
    stepErrors: [],
    stepWarnings: [],
    submitting: false,
    steps: [
        {
            title: 'general',
            icon: ICONS.BankSVGIcon,
            data: {},
            component: <StepOneGeneral />,
        },
        {
            title: 'store',
            icon: ICONS.StoreSVGIcon,
            data: {},
            component: <StepTwoStore />,
        },
        {
            title: 'social media',
            icon: ICONS.DocumentSVGIcon,
            data: {},
            component: <StepThreeSocialMedia />,
        },
        {
            title: 'bank',
            icon: ICONS.BankSVGIcon,
            data: {},
            component: <StepFourDocument />,
        },
        {
            title: 'vat',
            icon: ICONS.LaptopSVGIcon,
            data: {},
            component: <StepFiveVAT />,
        },
        {
            title: 'end',
            icon: ICONS.CheckMarkSVGIcon,
            data: {},
            component: <EndStep />,
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

        case SUBMITTING:
            return {
                ...state,
                submitting: action.payload
            }
        default:
            return state;
    }
};