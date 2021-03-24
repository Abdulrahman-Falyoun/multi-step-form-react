
import React, { useEffect, useState } from 'react';
import { Form } from 'antd';
import StepperInput from '../input-fields/stepper-input';
import { useSelector } from 'react-redux';
import { STEPS_NAMES } from '../../enums/steps-names';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../redux/store';
import { fillDataReducer, rootSelector } from '../../redux/slices/root.slice';
import { SocialMediaDataInterface } from '../../interfaces/steps-data';

const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 21 },
};

const StepThreeSocialMedia = () => {

  const { steps, currentStep, shouldStepperMove } = useSelector(rootSelector);
  const initialData: any = steps[currentStep]?.data;
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const [stepThreeData, setStepThreeData] = useState<SocialMediaDataInterface>({ ...initialData });
  const { t, i18n } = useTranslation('common');


  const isEnglish = i18n.language === 'en' ? true : false;
  useEffect(() => {
    if (shouldStepperMove) {
      const formHasErrors = () => form.getFieldsError().some((item) => item.errors.length > 0)
      dispatch(fillDataReducer({ data: stepThreeData, stepNumber: STEPS_NAMES.SOCIAL_MEDIA, formHasErrors: formHasErrors() }))
    }
  }, [shouldStepperMove]);
  return (
    <div className="step-three-wrapper">
      <p>{t('social media')}</p>
      <div>
        <Form {...layout} form={form} name="control-hooks">
          <div className="flex-row-flex-start-main-cross-center">
            <StepperInput
              value={stepThreeData.instagramAccount}
              name="instagram"
              label={t("social media account", { media: isEnglish ? 'Instagram' : 'الانستغرام' })}
              onInputChanged={(e: any) => { stepThreeData.instagramAccount = e.target.value; }}
              placeHolder="https://www.instagram.com/"
              size='large'
              bordered={false}
              className="full-flex-item column-flex-direction" />
          </div>
          <div className="flex-row-flex-start-main-cross-center">
            <StepperInput
                          value={stepThreeData.facebookAccount}

              name="facebook"
              label={t("social media account", { media: isEnglish ? 'Facebook' : 'الفيسبوك' })}
              onInputChanged={(e: any) => { stepThreeData.facebookAccount = e.target.value; }}
              placeHolder="https://www.facebook.com/"
              size='large'
              bordered={false}
              className="full-flex-item column-flex-direction"
            />
          </div>
          <div className="flex-row-flex-start-main-cross-center">
            <StepperInput
              name="twitter"
              value={stepThreeData.twitterAccount}
              label={t("social media account", { media: isEnglish ? 'Twitter' : 'التويتر' })}
              onInputChanged={(e: any) => { stepThreeData.twitterAccount = e.target.value; }}
              placeHolder="https://www.twitter.com/"
              size='large'
              bordered={false}
              className="full-flex-item column-flex-direction"
            />
          </div>
          <div className="flex-row-flex-start-main-cross-center">
            <StepperInput
              name="snapshat"
              value={stepThreeData.snapchatAccount}
              label={t("social media account", { media: isEnglish ? 'Snapchat' : 'السناب شات' })}
              onInputChanged={(e: any) => { stepThreeData.snapchatAccount = e.target.value; }}
              placeHolder="https://www.snapchat.com/"
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


export default StepThreeSocialMedia;