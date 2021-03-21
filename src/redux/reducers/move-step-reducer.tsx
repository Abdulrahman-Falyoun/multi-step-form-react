import { STEPS_NAMES } from "../../enums/steps-names"
import { ActionInterface } from "../../interfaces/action-interface"
import { ReduxStateInterface } from "../../interfaces/redux-state"
import { GeneralDataInterface, StepsDataInterface, StoreDataInterface } from "../../interfaces/steps-data"


export const moveStepReducer = (state: ReduxStateInterface, action: ActionInterface) => {
    return {
        ...state,
        currentStepError: '',
        currentStepWarning: '',
        currentStep: state.currentStep + action.payload
    }
}