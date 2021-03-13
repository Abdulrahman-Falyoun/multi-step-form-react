

export interface ReduxStateInterface {
    currentStep: number;
    steps: Array<any>;
    applyCurrentStepDataToStore: boolean;
    stepErrors: Array<string>;
    stepWarnings: Array<string>;
};