
import { Input } from 'antd';
import '../styles/stepper-input.sass'

const StepperInput = (props: any) => {
    const { type, onInputChanged, placeHolder, bordered, size } = props;
    return (
        <Input 
        type={type}
        onChange={(v) => onInputChanged(v)} 
        placeholder={placeHolder}
        bordered={bordered} 
        size={size}
        className="stepper-input" />
    )
};

export default StepperInput;