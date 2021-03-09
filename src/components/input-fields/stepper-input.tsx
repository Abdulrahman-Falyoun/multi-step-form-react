
import { Input } from 'antd';
import '../../styles/stepper-input.sass'

const StepperInput = ({
    type = 'text',
    onInputChanged = () => { },
    placeHolder = 'Please enter your text',
    bordered = false,
    size = 'large',
    suffex,
    prefix,
    id
}: any) => {
    return (
        <Input
            id={id}
            type={type}
            onChange={(v) => onInputChanged(v)}
            placeholder={placeHolder}
            bordered={bordered}
            size={size}
            suffix={suffex}
            prefix={prefix}
            className="stepper-input" />
    )
};

export default StepperInput;