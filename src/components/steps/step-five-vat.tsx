
import React, { useState } from 'react';
import { Form, Input, Button, Select, Radio, Checkbox } from 'antd';
import StepperInput from '../input-fields/stepper-input';
import '../../styles/steps/step-five.sass'
import StepperSelect from '../input-fields/stepper-select';
import StepperUploadFileInput from '../input-fields/stepper-upload-file';
import FancyCard from '../card/fancy-small-card';
import { getFileName, getFileSize } from '../../utils/file-helper';
const layout = {
    labelCol: { span: 0 },
    wrapperCol: { span: 21 },
};

const StepFiveVAT = () => {
    const [form] = Form.useForm();

    const [taxCertificate, setTaxCertificate] = useState(null);


    return (
        <div className="step-five-wrapper">
            <p>VAT</p>
            <div >
                <div>
                    <Form {...layout} form={form} name="control-hooks">
                        <div className="flex-row-flex-start-main-cross-center">
                            <StepperInput
                                onInputChanged={(e: any) => { console.log('changed: ', e.target.value) }}
                                placeHolder="Enter tax registration number"
                                size='large'
                                bordered={false}
                                className="double-full-flex-item column-flex-direction" name="beneficiary" label="Tax Registration Number" />

                            <Form.Item className="full-flex-item column-flex-direction" name="taxCertification" label="Upload TaX Registration Certificate">
                                <StepperUploadFileInput id="tax-cert-input" placeholder="Browse Files" width="100%" placeHolderFontSize='.8rem' onFileSelected={(file: any) => { console.log('national: ', file); setTaxCertificate(file); }} />
                                {taxCertificate && <br />}
                                {taxCertificate && <FancyCard title={getFileName(taxCertificate) + '  ' + getFileSize(taxCertificate)} width='100%' bgColor='#F9F9F9' txtStyle={{ color: 'black', fontSize: '.8rem', letterSpacing: '.1rem' }} borderStyle='dashed' borderWidth='2px' borderColor='#EAEAEA' />}
                            </Form.Item>
                        </div>
                        <div className="flex-row-flex-start-main-cross-center vat-license-wrapper">
                            <div className="flex-column-center-main-cross-flex-start">
                                <p className="vat-hint-text">I acknowledge and agree that oda will be raising and facilitating VAT invoices and credit notes on behalf of my company in relation to consumer transactions on oda site</p>
                                <Checkbox onChange={(value) => { console.log('checking value: ', value) }}>I Agree</Checkbox>
                            </div>
                        </div>
                    </Form>
                </div>





            </div>

        </div>

    );
};

export default StepFiveVAT;