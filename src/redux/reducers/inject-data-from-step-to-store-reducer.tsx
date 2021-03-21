import { ActionInterface } from "../../interfaces/action-interface";
import { ReduxStateInterface } from "../../interfaces/redux-state";



export const injectDataFromStepToStoreReducer = (state: ReduxStateInterface, action: ActionInterface) => {
    return {
        ...state,
        applyCurrentStepDataToStore: action.payload
    }
}