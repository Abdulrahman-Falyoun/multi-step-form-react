
import React, { useState } from 'react';
import { Form } from 'antd';
import StepperInput from '../input-fields/stepper-input';
import StepperSelect from '../input-fields/stepper-select';
import '../../styles/steps/step-two.sass'
import { connect } from 'react-redux';
import Actions from '../../redux/actions/index';
import { useEffect } from 'react';
import { ReduxStateInterface } from '../../interfaces/redux-state';
import { STEPS_NAMES } from '../../enums/steps-names';

const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 21 },
};

const StepTwoGenerator = ({ fillStepDataAction, applyCurrentStepDataToStore }: any) => {
  const [form] = Form.useForm();
  const [radioGroupValue, setRadioGroupValue] = useState('Riyadh');
  const [options, setOptions] = useState([
    { value: 'whatever', label: 'whatever' },
    { value: 'whatever1', label: 'whatever1' },
    { value: 'whatever2', label: 'whatever2' }
  ])


  const [stepTwoData, setSteptwoData] = useState({
    storeName: '',
    legalName: '',
    phoneNumber: '',
    productType: '',
    address: '',
    facebookAccountLink: '',
    twitterAccountLink: ''
  })


  useEffect(() => {
    if (applyCurrentStepDataToStore) {
      fillStepDataAction(stepTwoData);
    }
  }, [applyCurrentStepDataToStore]);


  return (
    <div className="step-two-wrapper">
      <p style={{ display: 'block' }}>Store</p>
      <div>
        <div>
          <Form {...layout} form={form} name="control-hooks">
            <div className="flex-row-flex-start-main-cross-center">
              <StepperInput
                name="storeName" label="Store Name"
                onInputChanged={(e: any) => stepTwoData.storeName = e.target.value}
                placeHolder="What's your store name?"
                size='large'
                bordered={false}
                className="full-flex-item column-flex-direction"
                rules={[
                  {
                    required: true,
                    message: 'Please input your store name'
                  }
                ]}
              />
              <StepperInput
                name="legalName" label="Legal Name"
                onInputChanged={(e: any) => stepTwoData.legalName = e.target.value}
                placeHolder="Company legal name"
                size='large'
                bordered={false}
                className="full-flex-item column-flex-direction"
                rules={[
                  {
                    required: true,
                    message: 'Please input your company legal name'
                  }
                ]}
              />
            </div>
          </Form>
        </div>

        <div>
          <Form {...layout} form={form} name="control-hooks">
            <div className="flex-row-flex-start-main-cross-center">
              <StepperInput
                acceptOnlyNumbers
                onInputChanged={(e: any) => {
                  stepTwoData.phoneNumber = e.target.value;
                }}
                value={stepTwoData.phoneNumber}
                placeHolder="E.G. 00963..."
                size='large'
                bordered={false}
                type='number'
                className="full-flex-item column-flex-direction" name="phoneNumber" label="Phone Number" rules={[
                  {
                    required: true,
                    message: 'Please input your phone number',
                  },
                ]} />
              <Form.Item className="full-flex-item column-flex-direction" name="legalName" label="What kind of product do you sell?">
                <StepperSelect options={options} placeholder='E.G. Electronics'
                  onValueSelected={(value: any) => {
                    stepTwoData.productType = value;
                  }} />
              </Form.Item>
            </div>
          </Form>
        </div>



        <div>
          <Form {...layout} form={form} name="control-hooks">
            <div className="flex-row-flex-start-main-cross-center">
              <StepperInput
                onInputChanged={(e: any) => { stepTwoData.address = e.target.value; }}
                placeHolder="Please Enter Your Full Address"
                size='large'
                bordered={false}
                className="full-flex-item column-flex-direction" name="address" label="Full Address" />
            </div>
          </Form>
        </div>
      </div>

    </div>

  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fillStepDataAction: (data: any) => dispatch(Actions.fill_step_data(data, STEPS_NAMES.STORE))
  }
}
const mapStateToProps = (state: ReduxStateInterface) => {
  return {
    applyCurrentStepDataToStore: state.applyCurrentStepDataToStore
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(StepTwoGenerator);