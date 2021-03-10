import React from 'react'
import MaskedInput from 'antd-mask-input'
import '../../styles/stepper-phone.sass';

const StepperPhoneInput = ({ firstMaskChanged, secondMaskChanged, thirdMaskChanged }: any) => {
    return (
        <div className="phone-input-wrapper">
            <label className="phone-label">
                <MaskedInput mask="111111" name="first-cell" size='large' onChange={firstMaskChanged} />
            </label>
            <label className="phone-label">
                <MaskedInput mask="1111" name="second-cell" size='large' onChange={secondMaskChanged} />
            </label>
            <label className="phone-label">
                <MaskedInput mask="1111" name="third-cell" size='large' onChange={thirdMaskChanged} />
            </label>
        </div>
    );
}

export default StepperPhoneInput;