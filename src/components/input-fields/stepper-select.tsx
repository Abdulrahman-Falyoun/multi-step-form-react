import { Select } from "antd";
import React from "react";
import '../../styles/stepper-select.sass'
const { Option } = Select;

const StepperSelect = ({ options, onValueSelected, style, defaultValue, placeholder }: any) => {
    return (
        <div className="stepper-select-wrapper">
            <Select placeholder={placeholder} defaultValue={defaultValue} style={style} onChange={onValueSelected}>
                {
                    options && options.map((opt: any) => <Option key={opt.value} value={opt.value}>{opt.label}</Option>)
                }
            </Select>
        </div>
    )
};

export default StepperSelect;