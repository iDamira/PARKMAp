const React = require('react');
import Map from './MapViewComponent.js';

const MapContainer = React.createClass({
  render: function(){
    return(
      <div id="map-view-container">
      <Map />
        <p>MAP WILL BE HERE!!!!</p>
      </div>
    )
  }
});

module.exports = MapContainer;
