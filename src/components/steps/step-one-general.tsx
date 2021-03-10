
import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Select, Radio } from 'antd';
import StepperInput from '../input-fields/stepper-input';
import '../../styles/steps/step-one.sass'
import FancySmallCard from '../card/fancy-small-card';
import { connect } from 'react-redux';
import Actions from '../../redux/actions/index';
import { ReduxStateInterface } from '../../interfaces/redux-state';


const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 21 },
};



const StepOneGenerator = ({ fillStepDataAction, initialData }: any) => {
  const [form] = Form.useForm();
  const [cityValue, setCityValue] = useState(initialData.city || 'Riyadh')
  const [stepOneData, setStepOneData] = useState({ ...initialData })
  useEffect(() => {
    return () => {
      console.log("cleaned up: ", stepOneData);
      if (!('city' in stepOneData)) {
        stepOneData['city'] = cityValue;
      }
      fillStepDataAction(stepOneData, 0);
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
                value={stepOneData.email}
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
                value={stepOneData.name}
                onInputChanged={onFullNameFieldValueChanged}
                placeHolder="Your Full Name"
                size='large'
                bordered={false}
                name="name" label="Full Name"
                className="full-flex-item column-flex-direction"
                rules={[
                  {
                    required: true,
                    message: 'Please input your full name!',
                  },
                ]}
              />
            </div>
          </Form>
        </div>
        <div className='radio-group-wrapper'>
          <Radio.Group
           size='large'
            onChange={(e: any) => {
            stepOneData.city = e.target.value;
            setCityValue(e.target.value)
          }} value={cityValue}
          
          >
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

const mapStateToProps = (state: ReduxStateInterface) => {
  return {
    initialData: state.steps[state.currentStep]?.data
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    fillStepDataAction: (data: any, stepNumber: number) => dispatch(Actions.fill_step_data(data, stepNumber))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(StepOneGenerator);