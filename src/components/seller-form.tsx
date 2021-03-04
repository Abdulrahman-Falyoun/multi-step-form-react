

import React from 'react';
import Stepper from './stepper';
import Card from './card';


// Style
import '../styles/seller-form.sass'
export default () => {
    return (
        <div className="seller-form-wrapper flex-column-center-main-cross">
            <Stepper />
            <Card />
        </div>
    )
};