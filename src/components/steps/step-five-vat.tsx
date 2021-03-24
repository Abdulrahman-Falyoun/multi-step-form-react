
import React, { useEffect, useState } from 'react';
import { Form, Checkbox } from 'antd';
import StepperInput from '../input-fields/stepper-input';
import StepperUploadFileInput from '../input-fields/stepper-upload-file';
import FancyCard from '../card/fancy-small-card';
import { getFileName, getFileSize } from '../../utils/file-helper';
import { STEPS_NAMES } from '../../enums/steps-names';
import { connect, useSelector } from 'react-redux';
import { readFileInBinary } from '../../utils/file-helper';
import { StepsDataInterface, VATDataInterface } from '../../interfaces/steps-data';
import { useTranslation } from 'react-i18next';
import { makePostRequest } from '../../axios-requester/http-requester';
import { useAppAsyncDispatch, useAppDispatch } from '../../redux/store';
import { fillDataReducer, rootSelector, submitForm } from '../../redux/slices/root.slice';


const layout = {
    labelCol: { span: 0 },
    wrapperCol: { span: 21 },
};

const StepFiveVAT = () => {

    const { steps, currentStep, shouldStepperMove } = useSelector(rootSelector);
    const initialData: any = steps[currentStep]?.data;
    const dispatch = useAppDispatch();
    const asyncDispatch = useAppAsyncDispatch();
    const [form] = Form.useForm();

    const [taxCertificate, setTaxCertificate] = useState(null); // (initialData as VATDataInterface)?.taxRegistrationCertificate
    const [tradeLicense, setTradeLicense] = useState(null); // (initialData as VATDataInterface)?.tradeLicense
    const [nationalId, setNationalId] = useState(null); // (initialData as VATDataInterface)?.nationalId
    const [stepFiveData, setStepFiveData] = useState<VATDataInterface>({ ...initialData });
    const { t, i18n } = useTranslation('common');


    const fillStepDataAction = async () => {
        const formHasErrors = () => form.getFieldsError().some((item) => item.errors.length > 0)
        const hasErrors = formHasErrors();
        if(hasErrors) {
            dispatch(fillDataReducer({ data: stepFiveData, stepNumber: STEPS_NAMES.VAT, formHasErrors: hasErrors }))
            return;
        }
        const stepsData = steps.map((st) => st.data);
        const reducer = (acc: any, currValue: any) => {
            for (const key in currValue) {
                if (!acc[key]) {
                    acc[key] = currValue[key];
                }
            }
            return acc;
        }
        const stepsReducedObject = stepsData.reduce(reducer, { ...stepFiveData }) as StepsDataInterface;
        asyncDispatch(submitForm(stepsReducedObject));
    }
    useEffect(() => {
        if (shouldStepperMove)
            fillStepDataAction();
    }, [shouldStepperMove])
    return (
        <div className="step-five-wrapper">
            <p>{t('vat')}</p>
            <div >
                <div>
                    <Form {...layout} form={form} name="control-hooks">
                        <div className="flex-row-flex-start-main-cross-center">
                            <Form.Item
                                className="half-width column-flex-direction"
                                name="tradeLicense" label={t("upload trade license")}
                                rules={[{
                                    required: true,
                                    message: 'Please upload your trade license'
                                }]}>
                                <StepperUploadFileInput
                                    id="trade-license-input"
                                    placeholder={t("browse files")}
                                    onFileSelected={(e: any) => {
                                        setTradeLicense(e);
                                        readFileInBinary(e?.target?.files[0])
                                            .then(resultInBinary => {
                                                stepFiveData.tradeLicense = resultInBinary
                                            })
                                            .catch(err => {
                                                console.log('Could not read file with error: ', err);
                                            })
                                    }} />
                                {tradeLicense && <br />}
                                {tradeLicense &&
                                    <FancyCard title={getFileName(tradeLicense) + '  ' + getFileSize(tradeLicense)}
                                        width='100%' bgColor='#F9F9F9'
                                        txtStyle={{ color: 'black', fontSize: '.8rem', letterSpacing: '.1rem' }}
                                        borderStyle='dashed'
                                        borderWidth='2px'
                                        borderColor='#EAEAEA' />}
                            </Form.Item>
                            <Form.Item
                                className="half-width column-flex-direction"
                                name="nationalId"
                                label={t("upload national id(saudi lqama or passport)")}
                                rules={[{
                                    required: true,
                                    message: 'Please upload your national ID'
                                }]}>
                                <StepperUploadFileInput id="national-id-input" placeholder={t("browse files")}
                                    onFileSelected={(e: any) => {
                                        setNationalId(e);
                                        readFileInBinary(e?.target?.files[0])
                                            .then(resultInBinary => {
                                                stepFiveData.nationalId = resultInBinary
                                            })
                                            .catch(err => {
                                                console.log('Could not read file with error: ', err);
                                            })
                                    }} />
                                {nationalId && <br />}
                                {nationalId &&
                                    <FancyCard
                                        title={getFileName(nationalId) + '  ' + getFileSize(nationalId)}
                                        width='100%'
                                        bgColor='#F9F9F9'
                                        txtStyle={{ color: 'black', fontSize: '.8rem', letterSpacing: '.1rem' }}
                                        borderStyle='dashed'
                                        borderWidth='2px'
                                        borderColor='#EAEAEA' />}
                            </Form.Item>
                        </div>
                        <div className="flex-row-flex-start-main-cross-center">
                            <StepperInput
                                onInputChanged={(e: any) => { stepFiveData.taxRegistrationNumber = e.target.value; }}
                                placeHolder={t("enter tax registration number")}
                                size='large'
                                bordered={false}
                                className="half-width column-flex-direction"
                                name="beneficiary"
                                label={t("tax registration number")}
                                rules={[{
                                    required: true,
                                    message: 'Tax registration number is required'
                                }]}
                            />

                            <Form.Item
                                className="half-width column-flex-direction"
                                name="taxCertification"
                                label={t("upload tax registration certificate")}
                                rules={[{
                                    required: true,
                                    message: 'Tax registration certificate is required'
                                }]}>
                                <StepperUploadFileInput id="tax-cert-input" placeholder={t("browse files")}
                                    width="100%"
                                    placeHolderFontSize='.8rem'
                                    onFileSelected={(e: any) => {
                                        setTaxCertificate(e);
                                        readFileInBinary(e?.target?.files[0])
                                            .then(resultInBinary => {
                                                stepFiveData.taxRegistrationCertificate = resultInBinary
                                            })
                                            .catch(err => {
                                                console.log('Could not read file with error: ', err);
                                            })
                                    }} />
                                {taxCertificate && <br />}
                                {taxCertificate &&
                                    <FancyCard
                                        title={getFileName(taxCertificate) + '  ' + getFileSize(taxCertificate)}
                                        width='100%'
                                        bgColor='#F9F9F9'
                                        txtStyle={{ color: 'black', fontSize: '.8rem', letterSpacing: '.1rem' }}
                                        borderStyle='dashed'
                                        borderWidth='2px'
                                        borderColor='#EAEAEA' />}
                            </Form.Item>
                        </div>
                        <div className="flex-row-flex-start-main-cross-center vat-license-wrapper">
                            <div className="flex-column-center-main-cross-flex-start">
                                <p className="vat-hint-text">{t('i acknowledge and agree that oda will be raising and facilitating VAT invoices and credit notes on behalf of my company in relation to consumer transactions on oda site')}</p>
                                <Checkbox onChange={(value) => { stepFiveData.acceptArgument = value.target.checked; }}>{t('i Agree')}</Checkbox>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>

        </div>

    );
};



export default StepFiveVAT;

