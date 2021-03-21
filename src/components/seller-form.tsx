

import React, { useEffect } from 'react';
import Stepper from './stepper';
import Card from './card/card';


// Style
import '../styles/seller-form.sass'
import { ReduxStateInterface } from '../interfaces/redux-state';
import Actions from '../redux/actions/index';
import { connect } from 'react-redux';
import { Dropdown, Menu, PageHeader, Spin } from 'antd';
import { useTranslation } from 'react-i18next';
import { DownOutlined } from '@ant-design/icons';

const SellerForm = ({
    nextOrPreviousStepAction,
    CardContent,
    fillStepDataAction,
    currentStep,
    totalSteps,
    injectCurrentStepDataToStore,
    currentStepError,
    currentStepWarning,
    submitting
}: any) => {
    const { t, i18n } = useTranslation('common');

    const next = () => {
        injectCurrentStepDataToStore();
    };
    const prev = () => {
        nextOrPreviousStepAction(-1);
    }
    const menu = (
        <Menu onClick={e => i18n.changeLanguage((e.key as string))}>
            <Menu.Item key='en'>
                <div>{t('english')}</div>
            </Menu.Item>
            <Menu.Item key='ar'>
                <div>{t('arabic')}</div>
            </Menu.Item>
        </Menu>
    );
    return (
        <React.Fragment>

            <div className={"seller-form-wrapper flex-column-flex-start-main-cross-center " + (i18n.language === 'en' ? 'english-container' : 'arabic-container')}>
                <PageHeader
                    className="site-page-header"
                    title={t("oda")}
                    subTitle={t("become a seller")}
                    extra={[
                        <Dropdown overlay={menu}>
                            <a className="lang-dropdown-link" onClick={e => e.preventDefault()}>
                                {t('language')} <DownOutlined />
                            </a>
                        </Dropdown>,
                    ]}
                />
                <Stepper />
                <Card
                    onPressingNextButton={next}
                    onPressingBackButton={prev}
                    content={CardContent}
                    fillStepDataAction={fillStepDataAction}
                    currentStep={currentStep}
                    totalSteps={totalSteps}
                    currentStepError={currentStepError}
                    currentStepWarning={currentStepWarning}
                    submitting={submitting}
                />

            </div>

        </React.Fragment>


    )
};





const mapStateToProps = (state: ReduxStateInterface) => {
    return {
        CardContent: state.steps[state.currentStep].component,
        currentStep: state.currentStep,
        totalSteps: state.steps.length,
        currentStepError: state.currentStepError,
        currentStepWarning: state.currentStepWarning,
        submitting: state.submitting
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        nextOrPreviousStepAction: (stepNumber: number) => dispatch(Actions.move_step_forward_or_backward(stepNumber)),
        injectCurrentStepDataToStore: () => dispatch(Actions.inject_data_from_step_to_store(true))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(SellerForm);