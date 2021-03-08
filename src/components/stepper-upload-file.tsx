
import { UploadOutlined } from '@ant-design/icons';
import { Upload, Button, Input } from 'antd';
import React from 'react';
import '../styles/stepper-upload-file.sass';

const StepperUploadFileInput = ({ onFileSelected, placeholder, id }: any) => {
    if(!id) {
        throw new Error('Please provide an id for stepper upload file input field');
    }
    return (
        <div onClick={() => { document.getElementById(id)?.click() }} className="stepper-upload-wrapper">
            <Input id={id} type="file" className="upload-element" onChange={(file) => onFileSelected(file)} />
            <Button className="upload-icon-button" icon={<UploadOutlined />}></Button>
            <p className="upload-input-text">{placeholder}</p>
        </div>
    )
}

export default StepperUploadFileInput;