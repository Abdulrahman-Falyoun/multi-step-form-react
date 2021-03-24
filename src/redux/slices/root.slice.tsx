
import StepOneGeneral from '../../components/steps/step-one-general';
import StepTwoStore from '../../components/steps/step-two-store';
import StepThreeSocialMedia from '../../components/steps/step-three-social-medial';
import StepFourDocument from '../../components/steps/step-four-bank';
import StepFiveVAT from '../../components/steps/step-five-vat';
import EndStep from '../../components/steps/end-step';
import * as ICONS from '../../components/svg-icons';

import { shouldProceedForward } from '../../utils/steps-data-checker';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../root.reducer';
import { AppDispatch, AppThunk } from '../store';
import { makeGetRequest, makePostRequest } from '../../axios-requester/http-requester';
import { StepsDataInterface, VATDataInterface } from '../../interfaces/steps-data';
import form from 'antd/lib/form';
import { STEPS_NAMES } from '../../enums/steps-names';

const initialState = {
    currentStep: 0,
    applyCurrentStepDataToStore: false,
    currentStepError: '',
    currentStepWarning: '',
    submitting: false,
    plans: [],
    productsCategories: [],
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
};

const rootSlice = createSlice({
    name: 'rootSlice',
    initialState,
    reducers: {
        injectDataFromStepToStoreReducer(state, action) {
            state.applyCurrentStepDataToStore = action.payload;
        },
        fillDataReducer(state, action) {
            const { stepNumber, data, formHasErrors } = action.payload;
            if (formHasErrors) {
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
        },
        getPlansSuccess(state, action) {
            state.plans = action.payload;
        },
        getProductsCategories(state, action) {
            state.productsCategories = action.payload;
        }

    }
});

export default rootSlice.reducer;
export const rootSelector = (state: RootState) => state.commonReducer;
export const {
    fillDataReducer,
    injectDataFromStepToStoreReducer,
    moveStepReducer,
    submittingReducer,
    changeSystemLanguageReducer } = rootSlice.actions;


const { getPlansSuccess, getProductsCategories } = rootSlice.actions;

export const fetchPackages = (): AppThunk => {
    return async (dispatch) => {
        try {
            const plansResponse = await makeGetRequest('/plans');
            dispatch(getPlansSuccess(plansResponse.data))
        } catch (err) {
            console.error(err);
        }
    }
}


export const fetchProductCategories = (): AppThunk => {
    return async (dispatch) => {
        try {
            const categoriesResponse = await makeGetRequest('/categories2');
            dispatch(getProductsCategories(categoriesResponse.data));
        } catch (err) {
            console.error(err);
        }
    }
}


export const submitForm = (stepsData: StepsDataInterface): AppThunk => {
    return async (dispatch) => {
        dispatch(submittingReducer(true));
        const paramsMap = new Map();
        paramsMap.set('full_name', stepsData.fullname);
        paramsMap.set('phone_number', stepsData.phoneNumber);
        paramsMap.set('email_address', stepsData.email);
        paramsMap.set('store_name', stepsData.storeName);
        paramsMap.set('legal_name', stepsData.legalName);
        paramsMap.set('beneficiary_name', stepsData.beneficiaryName);
        paramsMap.set('business_email', stepsData.businessEmail);
        paramsMap.set('city', stepsData.city);
        paramsMap.set('swift_code', stepsData.swiftCode);
        paramsMap.set('bank_name', stepsData.bankName);
        paramsMap.set('package', stepsData.packageType);
        // bodyFormData.append('bank_letter', stepsReducedObject.bankLetter, 'bank_letter');
        // bodyFormData.append('national_id', stepsReducedObject.nationalId, 'national_id');
        // bodyFormData.append('trade_license', stepsReducedObject.tradeLicense, 'trade_license');

        // Forming body part request
        const bodyFormData = new FormData();
        bodyFormData.append('params', JSON.stringify(Object.fromEntries(paramsMap)));


        return await makePostRequest('/newseller', bodyFormData, { headers: { "Content-Type": "multipart/form-data" } })
            .then(res => {
                dispatch(fillDataReducer({ data: (stepsData as VATDataInterface), stepNumber: STEPS_NAMES.VAT, formHasErrors: false }))
            })
            .catch(err => {
                console.log(err.response.data);
                dispatch(injectDataFromStepToStoreReducer(false));
            })
            .finally(() => {
                dispatch(submittingReducer(false));
            });


    }
}