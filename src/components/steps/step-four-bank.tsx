
import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Select, Radio } from 'antd';
import StepperInput from '../input-fields/stepper-input';
import StepperSelect from '../input-fields/stepper-select';
import StepperUploadFileInput from '../input-fields/stepper-upload-file';
import FancyCard from '../card/fancy-small-card';
import { getFileName, getFileSize } from '../../utils/file-helper';
import { STEPS_NAMES } from '../../enums/steps-names';
import { connect, useSelector } from 'react-redux';
import { BankDataInterface } from '../../interfaces/steps-data';
import { readFileInBinary } from '../../utils/file-helper';
import { useTranslation } from 'react-i18next';
import { RootState } from '../../redux/reducers/root.reducer';
import { useAppDispatch } from '../../redux/store';

import { fillDataReducer } from '../../redux/slices/root.slice';
import { makeGetRequest } from '../../axios-requester/http-requester';

const layout = {
    labelCol: { span: 0 },
    wrapperCol: { span: 21 },
};

const StepFourBank = () => {

    const { steps, currentStep, applyCurrentStepDataToStore } = useSelector((s: RootState) => s.commonReducer);
    const initialData: any = steps[currentStep]?.data;
    const dispatch = useAppDispatch();
    const [form] = Form.useForm();
    const [radioGroupValue, setRadioGroupValue] = useState('Riyadh');
    const [options, setOptions] = useState([
        { value: 'whatever', label: 'whatever' },
        { value: 'whatever1', label: 'whatever1' },
        { value: 'whatever2', label: 'whatever2' }
    ])
    const [stepFourData, setStepFourData] = useState<BankDataInterface>({ ...initialData })
    const [stampedCertificate, setStampedCertificate] = useState(null);
    const [availableCurrencies, setAvailableCurrencies] = useState([]);
    useEffect(() => {
        // Getting all available plans
        makeGetRequest('/currencies2')
            .then(res => {
                const currencies = res.data.map((d: any) => ({
                    value: d.currency_code,
                    label: d.currency_code
                }));
                setAvailableCurrencies(currencies);
            })
            .catch(err => {
                console.log('err: ', err);
            });
    }, []);


    useEffect(() => {
        if (applyCurrentStepDataToStore) {
            dispatch(fillDataReducer({ data: stepFourData, stepNumber: STEPS_NAMES.BANK }))
        }
    }, [applyCurrentStepDataToStore])
    const { t, i18n } = useTranslation('common');

    return (
        <div className="step-four-wrapper">
            <p>{t('bank')}</p>
            <div >
                <div>
                    <Form {...layout} form={form} name="control-hooks">
                        <div className="flex-row-flex-start-main-cross-center">
                            <StepperInput
                                name="beneficiary" label={t("beneficiary name")}
                                onInputChanged={(e: any) => { stepFourData.beneficiaryName = e.target.value; }}
                                placeHolder={t("for example ghayath")}
                                size='large'
                                bordered={false}
                                className="full-flex-item column-flex-direction"
                                rules={[
                                    {
                                        required: true,
                                        message: t('please input your beneficiary name')
                                    }
                                ]}
                            />
                            <StepperInput
                                name="businessEmail" label={t("business email")}
                                onInputChanged={(e: any) => { stepFourData.businessEmail = e.target.value; }}
                                placeHolder="Info@Example.com"
                                size='large'
                                bordered={false}
                                className="double-full-flex-item column-flex-direction"
                                rules={[
                                    {
                                        required: true,
                                        type: 'email',
                                        message: t('the input is not valid E-mail!')
                                    },
                                    {
                                        required: true,
                                        message: t('please input your business email')
                                    }
                                ]}
                            />
                        </div>
                    </Form>
                </div>


                <div>
                    <Form {...layout} form={form} name="control-hooks">
                        <div className="flex-row-flex-start-main-cross-center">
                            <StepperInput
                                className="full-flex-item column-flex-direction" name="bankName" label={t("bank name")}
                                onInputChanged={(e: any) => { stepFourData.bankName = e.target.value; }}
                                placeHolder={t("for example visa")}
                                size='large'
                                bordered={false}
                                rules={[
                                    {
                                        required: true,
                                        message: t('please enter bank name')
                                    }
                                ]}
                            />
                            <StepperInput
                                onInputChanged={(e: any) => { stepFourData.branchName = e.target.value; }}
                                placeHolder={t("for example riyadh")}
                                size='large'
                                bordered={false}
                                className="double-full-flex-item column-flex-direction" name="branchName" label={t("branch name")}
                            />
                        </div>
                    </Form>
                </div>

                <div>
                    <Form {...layout} form={form} name="control-hooks">
                        <div className="flex-row-flex-start-main-cross-center">
                            <StepperInput
                                onInputChanged={(e: any) => { stepFourData.bankAccountNumber = e.target.value; }}
                                placeHolder="(0000) - 0000 - 0000"
                                size='large'
                                bordered={false}
                                className="double-full-flex-item column-flex-direction" name="accountNumber" label={t("bank account number")}
                            />
                            <StepperInput
                                onInputChanged={(e: any) => { stepFourData.swiftCode = e.target.value; }}
                                placeHolder="000-000"
                                size='large'
                                bordered={false}
                                className="full-flex-item column-flex-direction" name="swiftCode" label={t("swift code")}
                            />
                        </div>
                    </Form>
                </div>



                <div>
                    <Form {...layout} form={form} name="control-hooks">
                        <div className="flex-row-flex-start-main-cross-center">
                            <Form.Item className="full-flex-item column-flex-direction" name="currency" label={t("currency")}>
                                <StepperSelect options={availableCurrencies} placeholder={t('sar')} onValueSelected={(value: any) => { stepFourData.currency = value; }} />
                            </Form.Item>
                            <Form.Item className="double-full-flex-item column-flex-direction" name="bankLetter" label=" "
                            
                            rules={[{
                                required: true,
                                message: 'Bank letter is required'
                            }]}
                            >
                                <div className="stamped-document-wrapper">
                                    <p className="stamped-document-hint">{t('upload either certified or stamped document by the bank')}</p>
                                    <div className="flex-column-center-main-cross">
                                        <StepperUploadFileInput
                                            id="national-id-input"
                                            placeholder={t("browse files")}
                                            width="100%"
                                            placeHolderFontSize='.8rem'
                                            onFileSelected={(e: any) => {
                                                setStampedCertificate(e);
                                                readFileInBinary(e?.target?.files[0])
                                                    .then(resultInBinary => {
                                                        stepFourData.bankLetter = resultInBinary
                                                    })
                                                    .catch(err => {
                                                        console.log('Could not read file with error: ', err);
                                                    })
                                            }} />
                                        {stampedCertificate && <br />}
                                        {stampedCertificate &&
                                            <FancyCard
                                                title={getFileName(stampedCertificate) + '  ' + getFileSize(stampedCertificate)}
                                                width='100%' bgColor='#F9F9F9'
                                                txtStyle={{ color: 'black', fontSize: '.8rem', letterSpacing: '.1rem' }}
                                                borderStyle='dashed'
                                                borderWidth='2px'
                                                borderColor='#EAEAEA' />}
                                    </div>
                                </div>
                            </Form.Item>

                        </div>
                    </Form>
                </div>


            </div>

        </div>

    );
};

export default StepFourBank
