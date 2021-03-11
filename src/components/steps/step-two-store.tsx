
import React, { useState } from 'react';
import { Form } from 'antd';
import StepperInput from '../input-fields/stepper-input';
import StepperSelect from '../input-fields/stepper-select';
import '../../styles/steps/step-two.sass'
import { connect } from 'react-redux';
import Actions from '../../redux/actions/index';
import { useEffect } from 'react';

const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 21 },
};

const StepTwoGenerator = ({ fillStepDataAction }: any) => {
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
    phoneNumber: '00000-0000-0000',
    productType: '',
    address: '',
    facebookAccountLink: '',
    twitterAccountLink: ''
  })

  useEffect(() => {
    return () => {
      console.log("cleaned up: ", stepTwoData);
      if (stepTwoData.phoneNumber == '00000-0000-0000'
        || stepTwoData.phoneNumber == '-0000-0000'
        || stepTwoData.phoneNumber == '00000--0000'
        || stepTwoData.phoneNumber == '00000-0000-'
        || stepTwoData.phoneNumber == '--') {
        stepTwoData.phoneNumber = '';
      }
      fillStepDataAction(stepTwoData, 1);
    };
  }, []);

  const modifyPhoneNumber = (cellIndex: number, value: any) => {
    const splittedPhoneNumber = stepTwoData.phoneNumber.split('-')
    splittedPhoneNumber[cellIndex] = value;
    stepTwoData.phoneNumber = splittedPhoneNumber.join('-');
  }
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
                className="full-flex-item column-flex-direction" />
              <StepperInput
                name="legalName" label="Legal Name"
                onInputChanged={(e: any) => stepTwoData.legalName = e.target.value}
                placeHolder="Company legal name"
                size='large'
                bordered={false}
                className="full-flex-item column-flex-direction" />
            </div>
          </Form>
        </div>

        <div>
          <Form {...layout} form={form} name="control-hooks">
            <div className="flex-row-flex-start-main-cross-center">
              <StepperInput
                onInputChanged={() => { }}
                placeHolder="E.G. 00963..."
                size='large'
                bordered={false}
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
    fillStepDataAction: (data: any, stepNumber: number) => dispatch(Actions.fill_step_data(data, stepNumber))
  }
}
export default connect(null, mapDispatchToProps)(StepTwoGenerator);