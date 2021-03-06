
import { Input } from 'antd';
import '../styles/stepper-input.sass'

const StepperInput = (props: any) => {
    const { type, onInputChanged } = props;
    return (
        <Input type={type} onChange={(v) => onInputChanged(v)} className="stepper-input" />
    )
};

export default StepperInput;