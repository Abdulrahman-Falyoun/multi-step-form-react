
import React, { useState } from 'react';
import { Form } from 'antd';
import '../../styles/steps/step-three.sass'
import StepperUploadFileInput from '../input-fields/stepper-upload-file';
import FancyCard from '../card/fancy-small-card';
import {getFileName, getFileSize } from '../../utils/file-helper';
const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 21 },
};

const StepOneGenerator = () => {
  const [form] = Form.useForm();
  const [tradeLicense, setTradeLicense] = useState(null);
  const [nationalId, setNationalId] = useState(null);
  return (
    <div className="step-three-wrapper">
      <p>Document</p>
      <Form {...layout} form={form} name="control-hooks">
        <div className="flex-row-flex-start-main-cross-center">
          <Form.Item className="same-width-flex-item column-flex-direction" name="tradeLicense" label="Upload Trade License">
            <StepperUploadFileInput id="trade-license-input" placeholder="Browse Files" onFileSelected={(file: any) => { console.log('tradeLicense: ', file); setTradeLicense(file); }} />
            {tradeLicense && <br/>}
            {tradeLicense && <FancyCard title={getFileName(tradeLicense) + '  ' + getFileSize(tradeLicense)} width='100%' bgColor='#F9F9F9' txtStyle={{ color: 'black', fontSize: '.8rem', letterSpacing: '.1rem' }} borderStyle='dashed' borderWidth='2px' borderColor='#EAEAEA' />}
          </Form.Item>
          <Form.Item className="same-width-flex-item column-flex-direction" name="nationalId" label="Upload National ID(Saudi lqama Or Passport)">
            <StepperUploadFileInput id="national-id-input" placeholder="Browse Files" onFileSelected={(file: any) => { console.log('national: ', file); setNationalId(file); }} />
            {nationalId && <br/>}
            {nationalId && <FancyCard title={getFileName(nationalId) + '  ' + getFileSize(nationalId)} width='100%' bgColor='#F9F9F9' txtStyle={{ color: 'black', fontSize: '.8rem', letterSpacing: '.1rem' }} borderStyle='dashed' borderWidth='2px' borderColor='#EAEAEA' />}
          </Form.Item>
        </div>
      </Form>
    </div>

  );
};

export default StepOneGenerator;