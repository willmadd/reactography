import React from 'react'
import { Map, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'
import './Mapper.css'
import data from '../data/ukcitiesgeojson.json'

class Mapper extends React.Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 5,
  }

  render() {
      console.log('xxxxxxxx')
    const position = [this.state.lat, this.state.lng]
    return (
      <Map className = "mapid" center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <GeoJSON mouseOver={this.highlightFeature} data={data} onClick={this.props.city} />
      </Map>
    )

    
    
  }
  highlightFeature =  (e) => {
      console.log(e.target)
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });
    
}
}

export default Mapper