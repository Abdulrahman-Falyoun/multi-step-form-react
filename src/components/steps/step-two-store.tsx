
import React, { useState } from 'react';
import { Form, Input, Button, Select, Radio } from 'antd';
import StepperInput from '../stepper-input';
import '../../styles/step-two.sass'
import FancySmallCard from '../card/fancy-small-card';
const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 21 },
};

const StepOneGenerator = () => {
  const [form] = Form.useForm();
  const [radioGroupValue, setRadioGroupValue] = useState('Riyadh');
  return (
    <div className="step-two-wrapper">
      <p style={{ display: 'block' }}>Store</p>
      <div>
        <div>
          <Form {...layout} form={form} name="control-hooks">
            <div className="flex-row-flex-start-main-cross-center">
              <Form.Item className="full-flex-item column-flex-direction" name="storeName" label="Store Name">
                <StepperInput
                  onInputChanged={(e: any) => { console.log('changed: ', e.target.value) }}
                  placeHolder="What's your store name?"
                  size='large'
                  bordered={false} />
              </Form.Item>
              <Form.Item className="full-flex-item column-flex-direction" name="legalName" label="Legal Name">
                <StepperInput
                  onInputChanged={(e: any) => { console.log('changed: ', e.target.value) }}
                  placeHolder="Company legal name"
                  size='large'
                  bordered={false} />
              </Form.Item>
            </div>
          </Form>
        </div>


        <div>
          <Form {...layout} form={form} name="control-hooks">
            <div className="flex-row-flex-start-main-cross-center">
              <Form.Item className="full-flex-item column-flex-direction" name="storeName" label="Store Name">
                <StepperInput
                  onInputChanged={(e: any) => { console.log('changed: ', e.target.value) }}
                  placeHolder="What's your store name?"
                  size='large'
                  bordered={false} />
              </Form.Item>
              <Form.Item className="full-flex-item column-flex-direction" name="legalName" label="Legal Name">
                <StepperInput
                  onInputChanged={(e: any) => { console.log('changed: ', e.target.value) }}
                  placeHolder="Company legal name"
                  size='large'
                  bordered={false} />
              </Form.Item>
            </div>
          </Form>
        </div>



        <div>
          <Form {...layout} form={form} name="control-hooks">
            <div className="flex-row-flex-start-main-cross-center">
              <Form.Item className="full-flex-item column-flex-direction" name="storeName" label="Store Name">
                <StepperInput
                  onInputChanged={(e: any) => { console.log('changed: ', e.target.value) }}
                  placeHolder="What's your store name?"
                  size='large'
                  bordered={false} />
              </Form.Item>
            </div>
            <div className="flex-row-flex-start-main-cross-center">
              <Form.Item className="full-flex-item column-flex-direction" name="storeName" label="Store Name">
                <StepperInput
                  onInputChanged={(e: any) => { console.log('changed: ', e.target.value) }}
                  placeHolder="What's your store name?"
                  size='large'
                  bordered={false} />
              </Form.Item>
            </div>
            <div className="flex-row-flex-start-main-cross-center">
              <Form.Item className="full-flex-item column-flex-direction" name="storeName" label="Store Name">
                <StepperInput
                  onInputChanged={(e: any) => { console.log('changed: ', e.target.value) }}
                  placeHolder="What's your store name?"
                  size='large'
                  bordered={false} />
              </Form.Item>
            </div>
            <div className="flex-row-flex-start-main-cross-center">
              <Form.Item className="full-flex-item column-flex-direction" name="storeName" label="Store Name">
                <StepperInput
                  onInputChanged={(e: any) => { console.log('changed: ', e.target.value) }}
                  placeHolder="What's your store name?"
                  size='large'
                  bordered={false} />
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>

    </div>

  );
};

export default StepOneGenerator;