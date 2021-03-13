
import React, { useEffect, useState } from 'react';
import { Form } from 'antd';
import '../../styles/steps/step-three.sass'
import StepperUploadFileInput from '../input-fields/stepper-upload-file';
import FancyCard from '../card/fancy-small-card';
import { getFileName, getFileSize } from '../../utils/file-helper';
import StepperInput from '../input-fields/stepper-input';
import { ReduxStateInterface } from '../../interfaces/redux-state';
import { connect } from 'react-redux';
import Actions from '../../redux/actions/index';
const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 21 },
};

const StepOneGenerator = ({ fillStepDataAction, applyCurrentStepDataToStore, initialData = {} }: any) => {
  const [form] = Form.useForm();
  const [stepThreeData, setStepThreeData] = useState({ ...initialData });


  useEffect(() => {
    if (applyCurrentStepDataToStore) {
      fillStepDataAction(stepThreeData, 2);
    }
  }, [applyCurrentStepDataToStore]);
  return (
    <div className="step-three-wrapper">
      <p>Social Media</p>
      <div>
        <Form {...layout} form={form} name="control-hooks">
          <div className="flex-row-flex-start-main-cross-center">
            <StepperInput
              name="instagram"
              label="Instagram Account"
              onInputChanged={(e: any) => { stepThreeData.address = e.target.value; }}
              placeHolder="https://www.instagram.com/..."
              size='large'
              bordered={false}
              className="full-flex-item column-flex-direction" />
          </div>
          <div className="flex-row-flex-start-main-cross-center">
            <StepperInput
              name="facebook"
              label="Facebook Account"
              onInputChanged={(e: any) => { stepThreeData.facebookAccountLink = e.target.value; }}
              placeHolder="https://www.facebook.com/..."
              size='large'
              bordered={false}
              className="full-flex-item column-flex-direction"
            />
          </div>
          <div className="flex-row-flex-start-main-cross-center">
            <StepperInput
              name="twitter"
              label="Twitter Account"
              onInputChanged={(e: any) => { stepThreeData.twitterAccountLink = e.target.value; }}
              placeHolder="https://www.twitter.com/..."
              size='large'
              bordered={false}
              className="full-flex-item column-flex-direction"
            />
          </div>
          <div className="flex-row-flex-start-main-cross-center">
            <StepperInput
              name="linkedin"
              label="Linkedin Account"
              onInputChanged={(e: any) => { stepThreeData.twitterAccountLink = e.target.value; }}
              placeHolder="https://www.linkedin.com/..."
              size='large'
              bordered={false}
              className="full-flex-item column-flex-direction"
            />
          </div>
          <div className="flex-row-flex-start-main-cross-center">
            <StepperInput
              name="tumblr"
              label="Tumblr Account"
              onInputChanged={(e: any) => { stepThreeData.twitterAccountLink = e.target.value; }}
              placeHolder="https://www.tumblr.com//..."
              size='large'
              bordered={false}
              className="full-flex-item column-flex-direction"
            />
          </div>
        </Form>
      </div>
    </div>

  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fillStepDataAction: (data: any, stepNumber: number) => dispatch(Actions.fill_step_data(data, stepNumber))
  }
}
const mapStateToProps = (state: ReduxStateInterface) => {
  return {
    applyCurrentStepDataToStore: state.applyCurrentStepDataToStore
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(StepOneGenerator);