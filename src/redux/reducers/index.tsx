
import { MOVE_STEP_FORWARD_OR_BACKWARD } from '../types/actions-types';
import { ReduxStateInterface } from '../../interfaces/redux-state';
import { ActionInterface } from '../../interfaces/action-interface';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';
import StepOneGeneral from '../../components/steps/step-one-general';
import StepTwoStore from '../../components/steps/step-two-store';
import StepThreeDocument from '../../components/steps/step-three-document';
import * as ICONS from '../../components/svg-icon';
const initialState: ReduxStateInterface = {
    currentStep: 0,
    steps: [
        {
            title: 'General',
            icon: ICONS.BankSVGIcon,
            data: <StepOneGeneral />
        },
        {
            title: 'Store',
            icon: ICONS.StoreSVGIcon,
            data: <StepTwoStore />
        },
        {
            title: 'Document',
            icon: ICONS.DocumentSVGIcon,
            data: <StepThreeDocument />
        },
        {
            title: 'Bank',
            icon: ICONS.BankSVGIcon,
            data: <div></div>
        },
        {
            title: 'VAT',
            icon: ICONS.LaptopSVGIcon,
            data: <div></div>
        },
        {
            title: 'End',
            icon: ICONS.CheckMarkSVGIcon,
            data: <div></div>
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