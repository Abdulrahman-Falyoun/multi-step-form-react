
import { HappyManSVGIcon } from '../svg-icons';
import React from 'react';
import { Button } from 'antd';
import '../../styles/steps/end-step.sass'
const EndStep = () => {
    return (
        <div className="flex-column-center-main-cross">
            <div className="happy-man">
                {HappyManSVGIcon}
            </div>
            <div className="success-msg">
                <p className="success-title-word">SUCCESS</p>
                <p className="success-msg-body">You Have Been Successfully Sended</p>
            </div>
            <Button ghost={false} className="multi-step-form-button yellow-button" style={{ marginLeft: 8 }} onClick={() => { }}>
                Done
            </Button>
        </div>
    )
};

export default EndStep;