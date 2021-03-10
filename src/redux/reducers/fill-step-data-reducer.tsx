import { ActionInterface } from "../../interfaces/action-interface";
import { ReduxStateInterface } from "../../interfaces/redux-state";



export const fillDataReducer = (state: ReduxStateInterface, action: ActionInterface) => {
    let stepNumber = action.payload?.stepNumber;
    const currentStepData = state.steps[stepNumber].data;
    state.steps[stepNumber].data = {
        ...currentStepData,
        ...action.payload
    }
    return {
        ...state
    }
}