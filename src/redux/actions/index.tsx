
import { ActionInterface } from '../../interfaces/action-interface';
import { MOVE_STEP_FORWARD_OR_BACKWARD, FILL_STEP_DATA } from '../types/actions-types';

class Actions {
    public [MOVE_STEP_FORWARD_OR_BACKWARD](payload: number): ActionInterface {
        return {
            type: MOVE_STEP_FORWARD_OR_BACKWARD,
            payload
        }
    }


    public [FILL_STEP_DATA](payload: any, stepNumber: number) {
        payload.stepNumber = stepNumber;
        return {
            type: FILL_STEP_DATA,
            payload
        }
    }
}

export default new Actions();