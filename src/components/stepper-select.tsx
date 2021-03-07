import { Select } from "antd";
import React from "react";
import '../styles/stepper-select.sass'
const { Option } = Select;

const StepperSelect = (props: any) => {
    const { options, onChange, style, defaultValue, placeholder } = props;
    return (
        <div className="stepper-select-wrapper">
            <Select placeholder={placeholder} defaultValue={defaultValue} style={style} onChange={onChange}>
                {
                    options && options.map((opt: any) =>  <Option key={opt.value} value={opt.value}>{opt.label}</Option>)
                }
            </Select>
        </div>
    )
};

export default StepperSelect;