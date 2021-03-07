

import React from 'react';
import Stepper from './stepper';
import Card from './card/card';


// Style
import '../styles/seller-form.sass'
export default () => {
    return (
        <div className="seller-form-wrapper flex-column-flex-start-main-cross-center">
            <Stepper />
            <Card />
        </div>
    )
};