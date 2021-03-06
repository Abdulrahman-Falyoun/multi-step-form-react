

import React from 'react';
import { connect } from 'react-redux';
import { ReduxStateInterface } from '../../interfaces/redux-state';
import '../../styles/card.sass';
import CardButtons from './card-buttons';

const Card = (props: any) => {
    const { CardContent } = props;
    return (
        <div className="card-wrapper">
            <div className="card-content">
                {
                    CardContent
                }
                <div className="card-buttons">
                    <CardButtons />
                </div>
            </div>

        </div>
    )
};

const mapStateToProps = (state: ReduxStateInterface) => {
    return {
        CardContent: state.steps[state.currentStep].component
    };
}
export default connect(mapStateToProps)(Card);