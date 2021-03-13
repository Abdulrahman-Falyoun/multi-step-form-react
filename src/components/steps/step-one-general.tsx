
import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Select, Radio } from 'antd';
import StepperInput from '../input-fields/stepper-input';
import '../../styles/steps/step-one.sass'
import FancySmallCard from '../card/fancy-small-card';
import { connect } from 'react-redux';
import Actions from '../../redux/actions/index';
import { ReduxStateInterface } from '../../interfaces/redux-state';
import { GeneralDataInterface } from '../../interfaces/steps-data';
import { STEPS_NAMES } from '../../enums/steps-names';
const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 21 },
};



const StepOneGenerator = ({ fillStepDataAction, initialData, applyCurrentStepDataToStore }: any) => {
  const [form] = Form.useForm();
  const [cityValue, setCityValue] = useState(initialData.city || 'Riyadh')
  const [packageType, setPackageType] = useState(initialData.packageType || 'free')
  const [stepOneData, setStepOneData] = useState<GeneralDataInterface>({ ...initialData })



  useEffect(() => {
    if (applyCurrentStepDataToStore) {
      if (stepOneData.city == '') {
        stepOneData.city = 'Riyadh';
      }
      fillStepDataAction(stepOneData);
    }
  }, [applyCurrentStepDataToStore])


  const onEmailFieldValueChanged = (e: any) => {
    stepOneData.email = e.target.value;
  }

  const onFullNameFieldValueChanged = (e: any) => {
    stepOneData.fullname = e.target.value;
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
                value={stepOneData.fullname}
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
            headerColor='Sliver'
            value='free'
            cardSelected={packageType == 'free' ? true : false}
            onFancyCardClicked={(value: any) => {
              console.log('value selected for package price: ', value);
              stepOneData.packageType = value;
              setPackageType(value);
            }}
          />
          <FancySmallCard
            title='999.00 SAR'
            value='999.00 SAR'
            bgColor='#FCEB55'
            cardSelected={packageType == '999.00 SAR' ? true : false}
            txtStyle={{ color: '#595959', letterSpacing: '.1rem' }}
            periodText='/year'
            headerColor='GOLD'
            onFancyCardClicked={(value: any) => {
              console.log('value selected for package price: ', value);
              stepOneData.packageType = value;
              setPackageType(value);
            }} />
        </div>
      </div>

    </div>

  );
};

const mapStateToProps = (state: ReduxStateInterface) => {
  return {
    initialData: state.steps[state.currentStep]?.data,
    applyCurrentStepDataToStore: state.applyCurrentStepDataToStore
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    fillStepDataAction: (data: any) => {
      dispatch(Actions.fill_step_data(data, STEPS_NAMES.GENERAL));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(StepOneGenerator);