import React from 'react'
import MaskedInput from 'antd-mask-input'
import '../styles/stepper-phone.sass';

const StepperPhoneInput = () => {
    return (
        <div className="phone-input-wrapper">
            <label className="phone-label">
                <MaskedInput mask="11111" name="first-cell" size='large' onChange={() => {}} />
            </label>
            <label className="phone-label">
                <MaskedInput mask="1111" name="second-cell" size='large' onChange={() => {}} />
            </label>
            <label className="phone-label">
                <MaskedInput mask="1111" name="third-cell" size='large' onChange={() => {}} />
            </label>
        </div>
    );
}

export default StepperPhoneInput;