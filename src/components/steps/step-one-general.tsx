
import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import StepperInput from '../stepper-input';
import '../../styles/step-one.sass'
const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const StepOneGenerator = () => {
  const [form] = Form.useForm();

  return (
    <div className="step-one-wrapper">
      <h1>General</h1>
      <Form {...layout} form={form} name="control-hooks">
        <div>
          <Form.Item name="note" label="Note" rules={[{ required: true }]}>
            <StepperInput />
          </Form.Item>
          <Form.Item name="note" label="Note" rules={[{ required: true }]}>
            <StepperInput />
          </Form.Item>
        </div>
      </Form>
    </div>

  );
};

export default StepOneGenerator;