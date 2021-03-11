
import { Form, Input } from 'antd';
import '../../styles/stepper-input.sass'

const StepperInput = ({
    type = 'text',
    value = '',
    onInputChanged = () => { },
    placeHolder = 'Please enter your text',
    bordered = false,
    size = 'large',
    suffex,
    prefix,
    id,
    className,
    name,
    label,
    rules,
    // acceptOnlyNumbers = false
}: any) => {
    return (
        <Form.Item className={className} hasFeedback initialValue={value} name={name} label={label} rules={rules}>
            <Input
                type={type}
                value={value}
                onChange={(e) => {
                    // if (acceptOnlyNumbers) {
                    //     const passedTest = /^[0-9\b]+$/.test(e.target.value)
                    //     if (e.target.value === '' || !passedTest) {
                    //         return;
                    //     }
                    // }
                    onInputChanged(e);
                }}
                itemID={id}
                placeholder={placeHolder}
                bordered={bordered}
                size={size}
                suffix={suffex}
                prefix={prefix}
                className="stepper-input" />
        </Form.Item>

    )
};

export default StepperInput;