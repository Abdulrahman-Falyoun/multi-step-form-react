import { STEPS_NAMES } from "../../enums/steps-names"
import { ActionInterface } from "../../interfaces/action-interface"
import { ReduxStateInterface } from "../../interfaces/redux-state"
import { GeneralDataInterface, StepsDataInterface, StoreDataInterface } from "../../interfaces/steps-data"

const _shouldProceedForward = (stepName: STEPS_NAMES, stepData: StepsDataInterface): boolean => {
    console.log('STEP NAME: ', stepName);
    console.log('stepData: ', stepData);
    return true;
    switch(stepName) {
        case STEPS_NAMES.GENERAL:
            const generalData = {...(stepData as GeneralDataInterface)};
            if(generalData.fullname && generalData.email && generalData.city && generalData.packageType){
                return true;
            }
            return false;
        case STEPS_NAMES.STORE:
            const storeData = {...(stepData as StoreDataInterface)};
            if(storeData.storeName && storeData.legalName){
                return true;
            }
            return false;
        default:
            return true;
            
    }
}
export const moveStepReducer = (state: ReduxStateInterface, action: ActionInterface) => {
    if(+action.payload == 1) {
        console.log('current step: ', state.currentStep)
        const data = state.steps[state.currentStep]?.data;
        if(!_shouldProceedForward(state.currentStep, data)) {
            return {
                ...state,
                currentStepHasErrorAsMandatoryFieldsNotFilled: true
            };
        }
    }
    return {
        ...state,
        currentStep: state.currentStep + action.payload
    }
}