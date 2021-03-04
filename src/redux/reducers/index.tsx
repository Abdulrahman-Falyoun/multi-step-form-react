
import { MOVE_STEP_FORWARD_OR_BACKWARD } from '../types/actions-types';
import { ReduxStateInterface } from '../../interfaces/redux-state';
import { ActionInterface } from '../../interfaces/action-interface';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';
import StepOneGeneral from '../../components/steps/step-one-general';
import StepTwoStore from '../../components/steps/step-two-store';
import StepThreeDocument from '../../components/steps/step-three-document';

const initialState: ReduxStateInterface = {
    currentStep: 0,
    steps: [
        {
            title: 'General',
            icon: <UserOutlined />,
            data: <StepOneGeneral />
        },
        {
            title: 'Store',
            icon: <SolutionOutlined />,
            data: <StepTwoStore />
        },
        {
            title: 'Document',
            icon: <LoadingOutlined />,
            data: <StepThreeDocument />
        },
        {
            title: 'Bank',
            icon: <SmileOutlined />,
            data: <div></div>
        },
        {
            title: 'VAT',
            icon: <SmileOutlined />,
            data: <div></div>
        },
        {
            title: 'End',
            icon: <SmileOutlined />,
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