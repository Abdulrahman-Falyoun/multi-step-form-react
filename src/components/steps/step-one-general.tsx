
import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import StepperInput from '../stepper-input';
import '../../styles/step-one.sass'
import FancySmallCard from '../card/fancy-small-card';
const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 21 },
};

const StepOneGenerator = () => {
  const [form] = Form.useForm();

  return (
    <div className="step-one-wrapper">
      <h1>General</h1>
      <Form {...layout} form={form} name="control-hooks">
        <div className="flex-row-flex-start-main-cross-center">
          <Form.Item className="full-flex-item column-flex-direction" name="note" label="Note" rules={[{ required: true }]}>
            <StepperInput
              onInputChanged={(e: any) => { console.log('changed: ', e.target.value) }}
              placeHolder="Info@Example.com"
              size='large'
              bordered={false} />
          </Form.Item>
          <Form.Item className="full-flex-item column-flex-direction" name="note" label="Note" rules={[{ required: true }]}>
            <StepperInput
              onInputChanged={(e: any) => { console.log('changed: ', e.target.value) }}
              placeHolder="Your Full Name"
              size='large'
              bordered={false} />
          </Form.Item>
        </div>
      </Form>
      <div className='fancy-cards-wrapper flex-row-space-evenly-main-cross-center'>
        <FancySmallCard title='Whatever' bgColor='#FCEB55' />
        <FancySmallCard title='Whatever' bgColor='#595959' />
      </div>
    </div>

  );
};

export default StepOneGenerator;