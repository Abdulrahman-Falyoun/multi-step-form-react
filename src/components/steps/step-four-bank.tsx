
import React, { useState } from 'react';
import { Form, Input, Button, Select, Radio } from 'antd';
import StepperInput from '../input-fields/stepper-input';
import '../../styles/steps/step-four.sass'
import StepperSelect from '../input-fields/stepper-select';
import StepperUploadFileInput from '../input-fields/stepper-upload-file';
import FancyCard from '../card/fancy-small-card';

const layout = {
    labelCol: { span: 0 },
    wrapperCol: { span: 21 },
};

const StepFourBank = () => {
    const [form] = Form.useForm();
    const [radioGroupValue, setRadioGroupValue] = useState('Riyadh');
    const [options, setOptions] = useState([
        { value: 'whatever', label: 'whatever' },
        { value: 'whatever1', label: 'whatever1' },
        { value: 'whatever2', label: 'whatever2' }
    ])

    const [stampedCertificate, setStampedCertificate] = useState(null);

    const getFileName = (fileInputEvent: any) => fileInputEvent?.target?.files[0].name
    const getFileSize = (fileInputEvent: any) => {
        const totalBytes = fileInputEvent?.target?.files[0].size;
        return totalBytes < 1000000 ? Math.floor(totalBytes / 1000) + 'KB' : Math.floor(totalBytes / 1000000) + 'MB';
    }
    return (
        <div className="step-four-wrapper">
            <p>Bank</p>
            <div >
                <div>
                    <Form {...layout} form={form} name="control-hooks">
                        <div className="flex-row-flex-start-main-cross-center">
                            <Form.Item className="full-flex-item column-flex-direction" name="beneficiary" label="Beneficiary Name">
                                <StepperInput
                                    onInputChanged={(e: any) => { console.log('changed: ', e.target.value) }}
                                    placeHolder="E.G. Ghayath"
                                    size='large'
                                    bordered={false} />
                            </Form.Item>
                            <Form.Item className="double-full-flex-item column-flex-direction" name="name" label="Payoneer Email">
                                <StepperInput
                                    onInputChanged={(e: any) => { console.log('changed: ', e.target.value) }}
                                    placeHolder="Info@Example.com"
                                    size='large'
                                    bordered={false} />
                            </Form.Item>
                        </div>
                    </Form>
                </div>


                <div>
                    <Form {...layout} form={form} name="control-hooks">
                        <div className="flex-row-flex-start-main-cross-center">
                            <Form.Item className="full-flex-item column-flex-direction" name="bankName" label="Bank Name">
                                <StepperInput
                                    onInputChanged={(e: any) => { console.log('changed: ', e.target.value) }}
                                    placeHolder="E.G. VISA"
                                    size='large'
                                    bordered={false} />
                            </Form.Item>
                            <Form.Item className="double-full-flex-item column-flex-direction" name="branchName" label="Branch Name">
                                <StepperInput
                                    onInputChanged={(e: any) => { console.log('changed: ', e.target.value) }}
                                    placeHolder="E.G. Riyadh"
                                    size='large'
                                    bordered={false} />
                            </Form.Item>
                        </div>
                    </Form>
                </div>

                <div>
                    <Form {...layout} form={form} name="control-hooks">
                        <div className="flex-row-flex-start-main-cross-center">
                            <Form.Item className="double-full-flex-item column-flex-direction" name="accountNumber" label="Bank Account Number">
                                <StepperInput
                                    onInputChanged={(e: any) => { console.log('changed: ', e.target.value) }}
                                    placeHolder="(0000) - 0000 - 0000"
                                    size='large'
                                    bordered={false} />
                            </Form.Item>
                            <Form.Item className="full-flex-item column-flex-direction" name="swiftCode" label="Swift Code">
                                <StepperInput
                                    onInputChanged={(e: any) => { console.log('changed: ', e.target.value) }}
                                    placeHolder="000-000"
                                    size='large'
                                    bordered={false} />
                            </Form.Item>
                        </div>
                    </Form>
                </div>



                <div>
                    <Form {...layout} form={form} name="control-hooks">
                        <div className="flex-row-flex-start-main-cross-center">
                            <Form.Item className="full-flex-item column-flex-direction" name="currency" label="Currency">
                                <StepperSelect options={options} placeholder='SAR' />
                            </Form.Item>
                            <Form.Item className="double-full-flex-item column-flex-direction" name="phoneNumber" label=" ">
                                <div className="stamped-document-wrapper">
                                    <p className="stamped-document-hint">Upload either certified or stamped document by the bank</p>
                                    <div className="flex-column-center-main-cross">
                                        <StepperUploadFileInput id="national-id-input" placeholder="Browse Files" width="100%" placeHolderFontSize='.8rem' onFileSelected={(file: any) => { console.log('national: ', file); setStampedCertificate(file); }} />
                                        {stampedCertificate && <br/>}
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

export default StepFourBank;