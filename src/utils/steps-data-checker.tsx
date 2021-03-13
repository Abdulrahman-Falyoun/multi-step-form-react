import { STEPS_NAMES } from "../enums/steps-names";
import { StepsDataInterface, GeneralDataInterface, StoreDataInterface } from "../interfaces/steps-data";



export const shouldProceedForward = (stepName: STEPS_NAMES, stepData: StepsDataInterface): boolean => {
    switch (stepName) {
        case STEPS_NAMES.GENERAL:
            const generalData = { ...(stepData as GeneralDataInterface) };
            if (generalData.fullname && generalData.email && generalData.city && generalData.packageType) {
                return true;
            }
            return false;
        case STEPS_NAMES.STORE:
            const storeData = { ...(stepData as StoreDataInterface) };
            if (storeData.storeName && storeData.legalName) {
                return true;
            }
            return false;
        default:
            return true;

    }
}