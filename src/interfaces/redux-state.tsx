

export interface ReduxStateInterface {
    currentStep: number;
    steps: Array<any>;
    currentStepHasErrorAsMandatoryFieldsNotFilled: boolean;
    applyCurrentStepDataToStore: boolean;
};