

export interface ReduxStateInterface {
    currentStep: number;
    steps: Array<any>;
    applyCurrentStepDataToStore: boolean;
    currentStepError: string;
    currentStepWarning: string;
    submitting: boolean;
};