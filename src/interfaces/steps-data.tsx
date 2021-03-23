

export interface GeneralDataInterface {
    email: string;
    fullname: string;
    city: string;
    packageType: string | number;
}

export interface StoreDataInterface {
    storeName: string;
    legalName: string;
    phoneNumber?: number;
    productType?: string;
    fullAddress?: string;
}

export interface SocialMediaDataInterface {
    instagramAccount: string;
    facebookAccount: string;
    twitterAccount: string;
    linkedinAccount: string;
    tumblrAccount: string;
}

export interface BankDataInterface {
    beneficiaryName: string;
    businessEmail: string;
    bankName: string;
    branchName?: string;
    bankAccountNumber?: number;
    swiftCode?: number;
    currency?: string;
    bankLetter?: any;
}

export interface VATDataInterface {
    tradeLicense: any;
    nationalId: any;
    taxRegistrationCertificate: any;
    taxRegistrationNumber: any;
    acceptArgument: boolean;
}

export interface StepsDataInterface extends VATDataInterface, BankDataInterface, SocialMediaDataInterface, StoreDataInterface, GeneralDataInterface  {}