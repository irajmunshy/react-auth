import React, { Component } from 'react';
import { Map, GoogleApiWrapper,  Marker } from 'google-maps-react';

const mapStyles = {
    width: '400px',
    height: '400px',
};

export class MapContainer extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          stores: [{lat: 47.49855629475769, lng: -122.14184416996333},
                  {latitude: 47.359423, longitude: -122.021071},
                  {latitude: 47.2052192687988, longitude: -121.988426208496},
                  {latitude: 47.6307081, longitude: -122.1434325},
                  {latitude: 47.3084488, longitude: -122.2140121},
                  {latitude: 47.5524695, longitude: -122.0425407}]
        }
    }

    displayMarkers = () => {
        return this.state.stores.map((store, index) => {
          return <Marker key={index} id={index} position={{
           lat: store.latitude,
           lng: store.longitude
         }}
         onClick={() => console.log("You clicked me!")} />
        })
    }

    render() {
        return (
            <Map
              google={this.props.google}
              zoom={10}
              style={mapStyles}
              initialCenter={{ lat: 23.733348, lng: 90.406707}}
            >
              {/* <Marker position={{ lat: 48.00, lng: -122.00}} /> */}
              {this.displayMarkers()}
            </Map>
        );
    }
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBk2Fk2S3ZXD8UKhbJtoDvSL85olyRnBb8'
    // apiKey: 'AIzaSyDcEquwr8iQEWiWQR6XyoxA16vKndiCDcU'
  })(Map);