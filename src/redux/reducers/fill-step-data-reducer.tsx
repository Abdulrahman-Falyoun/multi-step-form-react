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
        state.steps[stepName].data = newData;
        return {
            ...state,
            applyCurrentStepDataToStore: false,
            stepErrors: [],
            stepWarnings: [],
            currentStep: state.currentStep + 1
        }
    }

    // Mandatory fields in current step not filled out
    // We should inject an error to show
    return {
        ...state,
        stepErrors: [...state.stepErrors, 'Mandatory fields should be filled out!'],
        applyCurrentStepDataToStore: false,
    };

}