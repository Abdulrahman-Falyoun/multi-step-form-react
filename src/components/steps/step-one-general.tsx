
import React, { useState } from 'react';
import { Form, Input, Button, Select, Radio } from 'antd';
import StepperInput from '../input-fields/stepper-input';
import '../../styles/steps/step-one.sass'
import FancySmallCard from '../card/fancy-small-card';
const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 21 },
};

const StepOneGenerator = () => {
  const [form] = Form.useForm();
  const [radioGroupValue, setRadioGroupValue] = useState('Riyadh');
  return (
    <div className="step-one-wrapper">
      <p>General</p>
      <div className="form-wrapper">
        <div>
          <Form {...layout} form={form} name="control-hooks">
            <div className="flex-row-flex-start-main-cross-center">
              <Form.Item className="full-flex-item column-flex-direction" name="email" label="Email Address">
                <StepperInput
                  onInputChanged={(e: any) => { console.log('changed: ', e.target.value) }}
                  placeHolder="Info@Example.com"
                  size='large'
                  bordered={false} />
              </Form.Item>
              <Form.Item className="full-flex-item column-flex-direction" name="name" label="Full Name">
                <StepperInput
                  onInputChanged={(e: any) => { console.log('changed: ', e.target.value) }}
                  placeHolder="Your Full Name"
                  size='large'
                  bordered={false} />
              </Form.Item>
            </div>
          </Form>
        </div>
        <div className='radio-group-wrapper'>
          <Radio.Group size='large' onChange={(value: any) => { console.log('value: ', value.target.value); setRadioGroupValue(value.target.value) }} value={radioGroupValue}>
            <Radio value='Riyadh'>Riyadh</Radio>
            <Radio value='Dammam'>Dammam</Radio>
            <Radio value='Jaddah'>Jaddah</Radio>
          </Radio.Group>
        </div>
        <div className='fancy-cards-wrapper'>
          <FancySmallCard
            title='Free'
            bgColor='#595959'
            txtStyle={{ color: '#FCEB55', letterSpacing: '.1rem' }}
            periodText='/year'
            headerColor='Sliver' />
          <FancySmallCard title='999.00 SAR'
            bgColor='#FCEB55'
            txtStyle={{ color: '#595959', letterSpacing: '.1rem' }}
            periodText='/year'
            headerColor='GOLD' />
        </div>
      </div>

    </div>

  );
};

export default StepOneGenerator;