
import { MOVE_STEP_FORWARD_OR_BACKWARD } from '../types/actions-types';
import { ReduxStateInterface } from '../../interfaces/redux-state';
import { ActionInterface } from '../../interfaces/action-interface';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';

const initialState: ReduxStateInterface = {
    currentStep: 0,
    steps: [
        {
            title: 'General',
            icon: <UserOutlined />
        },
        {
            title: 'Store',
            icon: <SolutionOutlined />
        },
        {
            title: 'Document',
            icon: <LoadingOutlined />
        },
        {
            title: 'Bank',
            icon: <SmileOutlined />
        },
        {
            title: 'VAT',
            icon: <SmileOutlined />
        },
        {
            title: 'End',
            icon: <SmileOutlined />
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