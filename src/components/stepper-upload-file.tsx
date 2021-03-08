
import { UploadOutlined } from '@ant-design/icons';
import { Upload, Button, Input } from 'antd';
import React from 'react';
import '../styles/stepper-upload-file.sass';

const StepperUploadFileInput = ({ onFileSelected, placeholder, placeHolderFontSize = '1rem', width, id }: any) => {
    if(!id) {
        throw new Error('Please provide an id for stepper upload file input field');
    }
    return (
        <div style={{width: width}} onClick={() => { document.getElementById(id)?.click() }} className="stepper-upload-wrapper">
            <Input id={id} type="file" className="upload-element" onChange={(file) => onFileSelected(file)} />
            <Button className="upload-icon-button" icon={<UploadOutlined />}></Button>
            <p style={{fontSize: placeHolderFontSize}} className="upload-input-text">{placeholder}</p>
        </div>
    )
}

export default StepperUploadFileInput;