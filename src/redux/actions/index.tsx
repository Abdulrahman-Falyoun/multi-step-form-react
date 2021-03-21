
import { STEPS_NAMES } from '../../enums/steps-names';
import { ActionInterface } from '../../interfaces/action-interface';
import { MOVE_STEP_FORWARD_OR_BACKWARD, FILL_STEP_DATA, INJECT_DATA_FROM_STEP_TO_STORE, SUBMITTING } from '../types/actions-types';

class Actions {
    public [MOVE_STEP_FORWARD_OR_BACKWARD](payload: number): ActionInterface {
        return {
            type: MOVE_STEP_FORWARD_OR_BACKWARD,
            payload
        }
    }


    public [FILL_STEP_DATA](payload: any, stepName: STEPS_NAMES) {
        payload.stepName = stepName;
        return {
            type: FILL_STEP_DATA,
            payload
        }
    }

    public [SUBMITTING](payload: boolean): ActionInterface {
        return {
            type: SUBMITTING,
            payload
        }
    }
    public [INJECT_DATA_FROM_STEP_TO_STORE](payload: boolean) {
        return {
            type: INJECT_DATA_FROM_STEP_TO_STORE,
            payload
        }
    }
}

export default new Actions();