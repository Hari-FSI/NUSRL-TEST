// components/Map.js
import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends React.Component {
  state = {
    showingInfoWindow: true, // Set to true to show info box by default
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    const { google } = this.props;

    const iconUrl =
      'https://res.cloudinary.com/dfp2t4ccy/image/upload/v1700734587/map-marker_w4i4gf.png'; // Customize this with your custom marker icon URL
      
    return (
      <Map
        google={this.props.google}
        zoom={17}
        initialCenter={{
          lat: 23.452762110182157, // Latitude of your default location
          lng: 85.31732963558252, // Longitude of your default location
        }}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'National University of Study and Research in Law'}
          position={{
            lat: 23.452762110182157, // Latitude of your default location
          lng: 85.31732963558252, // Longitude of your default location
          }}
          icon={{
            url: iconUrl,
            scaledSize: new google.maps.Size(60, 60), // Adjust the size as needed
          }}
        />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div className="map-address-content">
            <h3>{this.state.selectedPlace.name}</h3>
            <p>
            Nagri, PO: Bukru, PS: Kanke<br/>
Kanke Pithoria Road, Kanke, Ranchi (Jharkhand)<br/>
Pin – 834006
            </p>
            <p>
              <a
                href="https://www.google.com/maps?ll=23.452644,85.317335&z=18&t=m&hl=en&gl=IN&mapclient=embed&cid=10678020619448497547"
                target="_blank"
              >
                View Large Map
              </a>
            </p>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCSM7C4kwm648PDybcDKzp3rKw4evYWnUk',
})(MapContainer);
