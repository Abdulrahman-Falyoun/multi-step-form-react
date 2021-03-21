

import React, { useEffect } from 'react';
import Stepper from './stepper';
import Card from './card/card';


// Style
import '../styles/seller-form.sass'
import { ReduxStateInterface } from '../interfaces/redux-state';
import { useSelector } from "react-redux";
import { Dropdown, Menu, PageHeader, Spin } from 'antd';
import { useTranslation } from 'react-i18next';
import { DownOutlined } from '@ant-design/icons';
import { RootState } from '../redux/reducers/root.reducer';
import { useAppDispatch } from '../redux/store';
import { fillDataReducer, injectDataFromStepToStoreReducer, moveStepReducer } from '../redux/reducers/root.reducer';
const SellerForm = () => {
    const { t, i18n } = useTranslation('common');
    const { currentStep, steps, currentStepError, currentStepWarning, submitting } = useSelector((s: RootState) => s.commonReducer);
    const dispatch = useAppDispatch();
    const CardContent = steps[currentStep]?.component;
    const totalSteps = steps.length;
    const next = () => {
        dispatch(injectDataFromStepToStoreReducer(true));
    };
    const prev = () => {
        dispatch(moveStepReducer(-1));
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





export default SellerForm;