import { ActionInterface } from "../../interfaces/action-interface";
import { ReduxStateInterface } from "../../interfaces/redux-state";



export const fillDataReducer = (state: ReduxStateInterface, action: ActionInterface) => {
    const currentStepData = state.steps[state.currentStep - 1].data;
    state.steps[state.currentStep - 1].data = {
        ...currentStepData,
        ...action.payload
    }
    return {
        ...state
    }
}