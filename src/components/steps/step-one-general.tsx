
import React, { useEffect, useState } from 'react';
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
  const [stepOneData, setStepOneData] = useState({
    email: '',
    name: '',
    city: radioGroupValue
  })

  useEffect(() => {
    return () => {
      console.log("cleaned up: ", stepOneData);
    };
  }, []);

  const onEmailFieldValueChanged = (e: any) => {
    // console.log('onEmailFieldValueChanged: ', e.target.value);
    stepOneData.email = e.target.value;
  }

  const onFullNameFieldValueChanged = (e: any) => {
    // console.log('onFullNameFieldValueChanged: ', e.target.value);
    stepOneData.name = e.target.value;
  }

  return (
    <div className="step-one-wrapper">
      <p>General</p>
      <div className="form-wrapper">
        <div>
          <Form {...layout} form={form} name="control-hooks" scrollToFirstError>
            <div className="flex-row-flex-start-main-cross-center">
              <StepperInput
                onInputChanged={onEmailFieldValueChanged}
                placeHolder="Info@Example.com"
                size='large'
                bordered={false}
                className="full-flex-item column-flex-direction" name="email" label="Email Address" rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ]} />
              <StepperInput
                onInputChanged={onFullNameFieldValueChanged}
                placeHolder="Your Full Name"
                size='large'
                bordered={false}
                name="name" label="Full Name"
                className="full-flex-item column-flex-direction" />
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