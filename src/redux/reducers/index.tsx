
import { MOVE_STEP_FORWARD_OR_BACKWARD } from '../types/actions-types';
import { ReduxStateInterface } from '../../interfaces/redux-state';
import { ActionInterface } from '../../interfaces/action-interface';
import StepOneGeneral from '../../components/steps/step-one-general';
import StepTwoStore from '../../components/steps/step-two-store';
import StepThreeDocument from '../../components/steps/step-three-document';
import * as ICONS from '../../components/svg-icons';
const initialState: ReduxStateInterface = {
    currentStep: 0,
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
            title: 'Document',
            icon: ICONS.DocumentSVGIcon,
            data: {},
            component: <StepThreeDocument />
        },
        {
            title: 'Bank',
            icon: ICONS.BankSVGIcon,
            data: {},
            component: <div></div>
        },
        {
            title: 'VAT',
            icon: ICONS.LaptopSVGIcon,
            data: {},

            component: <div></div>
        },
        {
            title: 'End',
            icon: ICONS.CheckMarkSVGIcon,
            data: {},
            component: <div></div>
        }
    ]
};

export default (state = initialState, action: ActionInterface) => {
    switch (action.type) {
        case MOVE_STEP_FORWARD_OR_BACKWARD:
            return {
                ...state,
                currentStep: state.currentStep + action.payload
            }
        default:
            return state;
    }
};