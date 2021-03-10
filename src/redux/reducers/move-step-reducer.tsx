import { ActionInterface } from "../../interfaces/action-interface"
import { ReduxStateInterface } from "../../interfaces/redux-state"


export const moveStepReducer = (state: ReduxStateInterface, action: ActionInterface) => {
    return {
        ...state,
        currentStep: state.currentStep + action.payload
    }
}