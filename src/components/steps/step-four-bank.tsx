
import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Select, Radio } from 'antd';
import StepperInput from '../input-fields/stepper-input';
import '../../styles/steps/step-four.sass'
import StepperSelect from '../input-fields/stepper-select';
import StepperUploadFileInput from '../input-fields/stepper-upload-file';
import FancyCard from '../card/fancy-small-card';
import { getFileName, getFileSize } from '../../utils/file-helper';
import { STEPS_NAMES } from '../../enums/steps-names';
import { ReduxStateInterface } from '../../interfaces/redux-state';
import { connect } from 'react-redux';
import Actions from '../../redux/actions/index';
import { BankDataInterface } from '../../interfaces/steps-data';
import { readFileInBinary } from '../../utils/file-helper';
const layout = {
    labelCol: { span: 0 },
    wrapperCol: { span: 21 },
};

const StepFourBank = ({ fillStepDataAction, initialData, applyCurrentStepDataToStore }: any) => {
    const [form] = Form.useForm();
    const [radioGroupValue, setRadioGroupValue] = useState('Riyadh');
    const [options, setOptions] = useState([
        { value: 'whatever', label: 'whatever' },
        { value: 'whatever1', label: 'whatever1' },
        { value: 'whatever2', label: 'whatever2' }
    ])
    const [stepFourData, setStepFourData] = useState<BankDataInterface>({ ...initialData })
    const [stampedCertificate, setStampedCertificate] = useState(null);
    useEffect(() => {
        if (applyCurrentStepDataToStore) {
            fillStepDataAction(stepFourData);
        }
    }, [applyCurrentStepDataToStore])
    return (
        <div className="step-four-wrapper">
            <p>Bank</p>
            <div >
                <div>
                    <Form {...layout} form={form} name="control-hooks">
                        <div className="flex-row-flex-start-main-cross-center">
                            <StepperInput
                                name="beneficiary" label="Beneficiary Name"
                                onInputChanged={(e: any) => { stepFourData.beneficiaryName = e.target.value; }}
                                placeHolder="E.G. Ghayath"
                                size='large'
                                bordered={false}
                                className="full-flex-item column-flex-direction"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your beneficiary name'
                                    }
                                ]}
                            />
                            <StepperInput
                                name="businessEmail" label="Business Email"
                                onInputChanged={(e: any) => { stepFourData.businessEmail = e.target.value; }}
                                placeHolder="Info@Example.com"
                                size='large'
                                bordered={false}
                                className="double-full-flex-item column-flex-direction"
                                rules={[
                                    {
                                        required: true,
                                        type: 'email',
                                        message: 'Please input a valid email'
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your business email'
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
                                className="full-flex-item column-flex-direction" name="bankName" label="Bank Name"
                                onInputChanged={(e: any) => { stepFourData.bankName = e.target.value; }}
                                placeHolder="E.G. VISA"
                                size='large'
                                bordered={false}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter bank name'
                                    }
                                ]}
                            />
                            <StepperInput
                                onInputChanged={(e: any) => { stepFourData.branchName = e.target.value; }}
                                placeHolder="E.G. Riyadh"
                                size='large'
                                bordered={false}
                                className="double-full-flex-item column-flex-direction" name="branchName" label="Branch Name"
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
                                className="double-full-flex-item column-flex-direction" name="accountNumber" label="Bank Account Number"
                            />
                            <StepperInput
                                onInputChanged={(e: any) => { stepFourData.swiftCode = e.target.value; }}
                                placeHolder="000-000"
                                size='large'
                                bordered={false}
                                className="full-flex-item column-flex-direction" name="swiftCode" label="Swift Code"
                            />
                        </div>
                    </Form>
                </div>



                <div>
                    <Form {...layout} form={form} name="control-hooks">
                        <div className="flex-row-flex-start-main-cross-center">
                            <Form.Item className="full-flex-item column-flex-direction" name="currency" label="Currency">
                                <StepperSelect options={options} placeholder='SAR' onValueSelected={(value: any) => { stepFourData.currency = value; }} />
                            </Form.Item>
                            <Form.Item className="double-full-flex-item column-flex-direction" name="phoneNumber" label=" ">
                                <div className="stamped-document-wrapper">
                                    <p className="stamped-document-hint">Upload either certified or stamped document by the bank</p>
                                    <div className="flex-column-center-main-cross">
                                        <StepperUploadFileInput id="national-id-input" placeholder="Browse Files" width="100%" placeHolderFontSize='.8rem'
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
                                        {stampedCertificate && <FancyCard title={getFileName(stampedCertificate) + '  ' + getFileSize(stampedCertificate)} width='100%' bgColor='#F9F9F9' txtStyle={{ color: 'black', fontSize: '.8rem', letterSpacing: '.1rem' }} borderStyle='dashed' borderWidth='2px' borderColor='#EAEAEA' />}
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

const mapDispatchToProps = (dispatch: any) => {
    return {
        fillStepDataAction: (data: any) => dispatch(Actions.fill_step_data(data, STEPS_NAMES.BANK))
    }
}
const mapStateToProps = (state: ReduxStateInterface) => {
    return {
        applyCurrentStepDataToStore: state.applyCurrentStepDataToStore
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StepFourBank);
