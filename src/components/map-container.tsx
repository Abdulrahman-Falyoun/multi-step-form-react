


import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
const mapContainer = (props: any) => {
    return (
        <Map className="form-map" {...props} />
    );
};


export default GoogleApiWrapper({
    apiKey: process?.env?.REACT_APP_GOOGLE_API_KEY || ''
})(mapContainer);