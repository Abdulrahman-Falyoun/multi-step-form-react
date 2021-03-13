
import React, { useEffect, useState } from 'react';
import { Form, Checkbox } from 'antd';
import StepperInput from '../input-fields/stepper-input';
import '../../styles/steps/step-five.sass'
import StepperUploadFileInput from '../input-fields/stepper-upload-file';
import FancyCard from '../card/fancy-small-card';
import { getFileName, getFileSize } from '../../utils/file-helper';
import { STEPS_NAMES } from '../../enums/steps-names';
import { ReduxStateInterface } from '../../interfaces/redux-state';
import { connect } from 'react-redux';
import Actions from '../../redux/actions/index';
import { readFileInBinary } from '../../utils/file-helper';
import { VATDataInterface } from '../../interfaces/steps-data';
const layout = {
    labelCol: { span: 0 },
    wrapperCol: { span: 21 },
};

const StepFiveVAT = ({ fillStepDataAction, initialData, applyCurrentStepDataToStore }: any) => {
    const [form] = Form.useForm();

    const [taxCertificate, setTaxCertificate] = useState(null);
    const [tradeLicense, setTradeLicense] = useState(null);
    const [nationalId, setNationalId] = useState(null);
    const [stepFiveData, setStepFiveData] = useState<VATDataInterface>({ ...initialData });

    useEffect(() => {
        if (applyCurrentStepDataToStore) {
            fillStepDataAction(stepFiveData);
        }
    }, [applyCurrentStepDataToStore])
    return (
        <div className="step-five-wrapper">
            <p>VAT</p>
            <div >
                <div>
                    <Form {...layout} form={form} name="control-hooks">
                        <div className="flex-row-flex-start-main-cross-center">
                            <Form.Item className="same-width-flex-item column-flex-direction" name="tradeLicense" label="Upload Trade License">
                                <StepperUploadFileInput id="trade-license-input" placeholder="Browse Files" onFileSelected={(e: any) => {
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
                                {tradeLicense && <FancyCard title={getFileName(tradeLicense) + '  ' + getFileSize(tradeLicense)} width='100%' bgColor='#F9F9F9' txtStyle={{ color: 'black', fontSize: '.8rem', letterSpacing: '.1rem' }} borderStyle='dashed' borderWidth='2px' borderColor='#EAEAEA' />}
                            </Form.Item>
                            <Form.Item className="same-width-flex-item column-flex-direction" name="nationalId" label="Upload National ID(Saudi lqama Or Passport)">
                                <StepperUploadFileInput id="national-id-input" placeholder="Browse Files" onFileSelected={(e: any) => {
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
                                {nationalId && <FancyCard title={getFileName(nationalId) + '  ' + getFileSize(nationalId)} width='100%' bgColor='#F9F9F9' txtStyle={{ color: 'black', fontSize: '.8rem', letterSpacing: '.1rem' }} borderStyle='dashed' borderWidth='2px' borderColor='#EAEAEA' />}
                            </Form.Item>
                        </div>
                        <div className="flex-row-flex-start-main-cross-center">
                            <StepperInput
                                onInputChanged={(e: any) => { stepFiveData.taxRegistrationNumber = e.target.value; }}
                                placeHolder="Enter tax registration number"
                                size='large'
                                bordered={false}
                                className="double-full-flex-item column-flex-direction" name="beneficiary" label="Tax Registration Number" />

                            <Form.Item className="full-flex-item column-flex-direction" name="taxCertification" label="Upload TaX Registration Certificate">
                                <StepperUploadFileInput id="tax-cert-input" placeholder="Browse Files" width="100%" placeHolderFontSize='.8rem' onFileSelected={(e: any) => {
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
                                {taxCertificate && <FancyCard title={getFileName(taxCertificate) + '  ' + getFileSize(taxCertificate)} width='100%' bgColor='#F9F9F9' txtStyle={{ color: 'black', fontSize: '.8rem', letterSpacing: '.1rem' }} borderStyle='dashed' borderWidth='2px' borderColor='#EAEAEA' />}
                            </Form.Item>
                        </div>
                        <div className="flex-row-flex-start-main-cross-center vat-license-wrapper">
                            <div className="flex-column-center-main-cross-flex-start">
                                <p className="vat-hint-text">I acknowledge and agree that oda will be raising and facilitating VAT invoices and credit notes on behalf of my company in relation to consumer transactions on oda site</p>
                                <Checkbox onChange={(value) => { stepFiveData.acceptArgument = value.target.checked;}}>I Agree</Checkbox>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>

        </div>

    );
};


const mapDispatchToProps = (dispatch: any) => {
    return {
        fillStepDataAction: (data: any) => dispatch(Actions.fill_step_data(data, STEPS_NAMES.VAT))
    }
}
const mapStateToProps = (state: ReduxStateInterface) => {
    return {
        applyCurrentStepDataToStore: state.applyCurrentStepDataToStore
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StepFiveVAT);

