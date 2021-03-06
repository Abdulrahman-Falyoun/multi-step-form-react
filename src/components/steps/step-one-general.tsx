
import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Select, Radio } from 'antd';
import StepperInput from '../input-fields/stepper-input';
import FancySmallCard from '../card/fancy-small-card';
import { connect } from 'react-redux';
import Actions from '../../redux/actions/index';
import { ReduxStateInterface } from '../../interfaces/redux-state';
import { GeneralDataInterface } from '../../interfaces/steps-data';
import { STEPS_NAMES } from '../../enums/steps-names';
import { useTranslation } from 'react-i18next';
const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 21 },
};



const StepOneGenerator = ({ fillStepDataAction, initialData, applyCurrentStepDataToStore }: any) => {
  const [form] = Form.useForm();
  const [cityValue, setCityValue] = useState(initialData.city || 'Riyadh')
  const [packageType, setPackageType] = useState(initialData.packageType || 'free')
  const [stepOneData, setStepOneData] = useState<GeneralDataInterface>({ ...initialData })
  const { t, i18n } = useTranslation('common');



  useEffect(() => {
    if (applyCurrentStepDataToStore) {
      if (!('city' in stepOneData) || (stepOneData.city == '')) {
        stepOneData.city = 'Riyadh';
      }
      if (!('packageType' in stepOneData) || (stepOneData.packageType == '')) {
        stepOneData.packageType = 'free';
      }
      console.log('stepOneData: ', stepOneData);
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
      <p>{t('general')}</p>
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
                className="full-flex-item column-flex-direction" name="email" label={t("email address")} rules={[
                  {
                    type: 'email',
                    message: t('the input is not valid E-mail!'),
                  },
                  {
                    required: true,
                    message: t('please input your E-mail!'),
                  },
                ]} />
              <StepperInput
                value={stepOneData.fullname}
                onInputChanged={onFullNameFieldValueChanged}
                placeHolder={t("your full name")}
                size='large'
                bordered={false}
                name="name" label={t("full name")}
                className="full-flex-item column-flex-direction"
                rules={[
                  {
                    required: true,
                    message: t('please input your full name!'),
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
            <Radio value='Riyadh'>{t('riyadh')}</Radio>
            <Radio value='Dammam'>{t('dammam')}</Radio>
            <Radio value='Jaddah'>{t('jaddah')}</Radio>
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