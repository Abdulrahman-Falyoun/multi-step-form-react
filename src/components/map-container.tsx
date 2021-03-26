


import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import LocationSearchInput from './location-search-input';

const mapContainer = (props: any) => {
    return (
        <div>
            <LocationSearchInput />
            <Map className="form-map" {...props} />

        </div>
    );
};


export default GoogleApiWrapper({
    apiKey: process?.env?.REACT_APP_GOOGLE_API_KEY || '',
    libraries: ['places']
})(mapContainer);