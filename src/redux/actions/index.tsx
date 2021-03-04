
import { ActionInterface } from '../../interfaces/action-interface';
import { MOVE_STEP_FORWARD_OR_BACKWARD } from '../types/actions-types';

class Actions {
    public [MOVE_STEP_FORWARD_OR_BACKWARD](payload: number): ActionInterface {
        return {
            type: MOVE_STEP_FORWARD_OR_BACKWARD,
            payload
        }
    }
}

export default new Actions();