
import React, { useState } from 'react';
import { Form } from 'antd';
import StepperInput from '../input-fields/stepper-input';
import StepperSelect from '../input-fields/stepper-select';
import { connect, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { STEPS_NAMES } from '../../enums/steps-names';
import { useTranslation } from 'react-i18next';
import { useAppAsyncDispatch } from '../../redux/store';
import { fillDataReducer, rootSelector, fetchProductCategories } from '../../redux/slices/root.slice';
import { StoreDataInterface } from '../../interfaces/steps-data';

const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 21 },
};

const StepTwoGenerator = () => {
  const { steps, currentStep, shouldStepperMove, systemLanguage, productsCategories } = useSelector(rootSelector);
  const initialData: any = steps[currentStep]?.data;
  const dispatch = useAppAsyncDispatch();
  const [form] = Form.useForm();
  const [options, setOptions] = useState<Array<{value: any, label: any}>>();
  const { t, i18n } = useTranslation('common');
  const [stepTwoData, setSteptwoData] = useState<StoreDataInterface>({ ...initialData });



  useEffect(() => {
    if (productsCategories) {
      const data = productsCategories.map((d: any) => {
        return ({ value: d.category_id, label: systemLanguage === 'en' ? JSON.parse(d.translations).en : JSON.parse(d.translations).ar })
      });
      setOptions(data);
    }
  }, [systemLanguage, productsCategories])
  useEffect(() => {
    dispatch(fetchProductCategories());
  }, []);

  useEffect(() => {
    if (shouldStepperMove) {
      const formHasErrors = () => form.getFieldsError().some((item) => item.errors.length > 0)
      dispatch(fillDataReducer({ data: stepTwoData, stepNumber: STEPS_NAMES.STORE, formHasErrors: formHasErrors() }))
    }
  }, [shouldStepperMove]);


  return (
    <div className="step-two-wrapper">
      <p style={{ display: 'block' }}>{t('store')}</p>
      <div>
        <div>
          <Form {...layout} form={form} name="control-hooks">
            <div className="flex-row-flex-start-main-cross-center">
              <StepperInput
                name="storeName" label={t("store name")}
                onInputChanged={(e: any) => stepTwoData.storeName = e.target.value}
                value={stepTwoData.storeName}
                placeHolder={t("what's your store name?")}
                size='large'
                bordered={false}
                className="full-flex-item column-flex-direction"
                rules={[
                  {
                    required: true,
                    message: t('please input your store name')
                  }
                ]}
              />
              <StepperInput
                name="legalName" label={t("legal name")}
                onInputChanged={(e: any) => stepTwoData.legalName = e.target.value}
                placeHolder={t("company legal name")}
                size='large'
                value={stepTwoData.legalName}
                bordered={false}
                className="full-flex-item column-flex-direction"
                rules={[
                  {
                    required: true,
                    message: t('please input your company legal name')
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
                placeHolder={t("for example 00963")}
                size='large'
                bordered={false}
                type='number'
                className="full-flex-item column-flex-direction" name="phoneNumber" label={t("phone number")} rules={[
                  {
                    required: true,
                    message: t('please input your phone number'),
                  },
                ]} />
              <Form.Item className="full-flex-item column-flex-direction" name="legalName" label={t("what kind of product do you sell?")}>
                <StepperSelect options={options} placeholder={t("for example electronics")}
                  onValueSelected={(value: any) => {
                    stepTwoData.productType = value;
                  }}
                  defaultValue={stepTwoData.productType}
                />
              </Form.Item>
            </div>
          </Form>
        </div>



        <div>
          <Form {...layout} form={form} name="control-hooks">
            <div className="flex-row-flex-start-main-cross-center">
              <StepperInput
                label={t("full address")}
                onInputChanged={(e: any) => { stepTwoData.fullAddress = e.target.value; }}
                placeHolder={t("please enter your full address")}
                size='large'
                bordered={false}
                value={stepTwoData.fullAddress}
                className="full-flex-item column-flex-direction" name="address" />
            </div>
          </Form>
        </div>
      </div>

    </div>

  );
};


export default StepTwoGenerator;