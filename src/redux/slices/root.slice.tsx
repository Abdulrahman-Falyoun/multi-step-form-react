
import StepOneGeneral from '../../components/steps/step-one-general';
import StepTwoStore from '../../components/steps/step-two-store';
import StepThreeSocialMedia from '../../components/steps/step-three-social-medial';
import StepFourDocument from '../../components/steps/step-four-bank';
import StepFiveVAT from '../../components/steps/step-five-vat';
import EndStep from '../../components/steps/end-step';
import * as ICONS from '../../components/svg-icons';

import { shouldProceedForward } from '../../utils/steps-data-checker';
import { createSlice } from '@reduxjs/toolkit';


const rootSlice = createSlice({
    name: 'rootSlice',
    initialState: {
        currentStep: 0,
        applyCurrentStepDataToStore: false,
        currentStepError: '',
        currentStepWarning: '',
        submitting: false,
        steps: [
            {
                title: 'general',
                icon: ICONS.BankSVGIcon,
                data: {},
                component: <StepOneGeneral />,
            },
            {
                title: 'store',
                icon: ICONS.StoreSVGIcon,
                data: {},
                component: <StepTwoStore />,
            },
            {
                title: 'social media',
                icon: ICONS.DocumentSVGIcon,
                data: {},
                component: <StepThreeSocialMedia />,
            },
            {
                title: 'bank',
                icon: ICONS.BankSVGIcon,
                data: {},
                component: <StepFourDocument />,
            },
            {
                title: 'vat',
                icon: ICONS.LaptopSVGIcon,
                data: {},
                component: <StepFiveVAT />,
            },
            {
                title: 'end',
                icon: ICONS.CheckMarkSVGIcon,
                data: {},
                component: <EndStep />,
            }
        ],
        systemLanguage: 'en'
    },
    reducers: {
        injectDataFromStepToStoreReducer(state, action) {
            state.applyCurrentStepDataToStore = action.payload;
        },
        fillDataReducer(state, action) {
            const { stepNumber, data, formHasErrors } = action.payload;
            if(formHasErrors){
                // Mandatory fields in current step not filled out
                // We should inject an error to show
                state.currentStepError = 'fields contains wrong data';
                state.applyCurrentStepDataToStore = false;
                return;
            };

            const currentStepData = state.steps[stepNumber].data;
            // Getting new data in current step
            const newData = {
                ...currentStepData,
                ...data
            }

            // // Checking if mandatory fields are filled out
            if (shouldProceedForward(stepNumber, newData)) {
                state.steps[stepNumber].data = newData;
                state.applyCurrentStepDataToStore = false;
                state.currentStepError = '';
                state.currentStepWarning = '';
                state.currentStep = state.currentStep + 1;
            }

            else {
                // Mandatory fields in current step not filled out
                // We should inject an error to show
                state.currentStepError = 'mandatory fields should be filled out!';
                state.applyCurrentStepDataToStore = false;
            }
        },
        moveStepReducer(state, action) {
            state.currentStepError = '';
            state.currentStepWarning = '';
            state.currentStep = state.currentStep + action.payload
        },
        submittingReducer(state, action) {
            state.submitting = action.payload;
        },
        changeSystemLanguageReducer(state, action) {
            state.systemLanguage = action.payload;
        }

    }
});


export const { fillDataReducer, injectDataFromStepToStoreReducer, moveStepReducer, submittingReducer, changeSystemLanguageReducer } = rootSlice.actions;
export default rootSlice.reducer;