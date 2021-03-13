import { ActionInterface } from "../../interfaces/action-interface";
import { ReduxStateInterface } from "../../interfaces/redux-state";
import { shouldProceedForward } from '../../utils/steps-data-checker'


export const fillDataReducer = (state: ReduxStateInterface, action: ActionInterface) => {
    let stepName = action.payload?.stepName;
    const currentStepData = state.steps[stepName].data;

    // Getting new data in current step
    const newData = {
        ...currentStepData,
        ...action.payload
    }

    // Checking if mandatory fields are filled out
    if (shouldProceedForward(stepName, newData)) {
        return {
            ...state,
            applyCurrentStepDataToStore: false,
            currentStep: state.currentStep + 1
        }
    }

    // Mandatory fields in current step not filled out
    // We should inject an error to show
    state.steps[stepName]?.errors?.push('Mandatory fields should be filled out!');
    return {
        ...state,
        applyCurrentStepDataToStore: false,
    };

}