import React, {Component} from 'react';
import mapboxgl, { Marker } from 'mapbox-gl';
import {fetchCountryStats} from './../../api';

class Maps extends Component {

  constructor(props){
    super(props);
    mapboxgl.accessToken = 'pk.eyJ1IjoicHJhc2hhbnRnb2Rod2FuaSIsImEiOiJjazloajZnaGQwMGVlM21scTN1dzF4OWxyIn0.zjTUI8tnUqu3mOE5OcLD3w';
    this.state = {
      lng: 78,
      lat: 20,
      zoom: 4,
      countiresStat : {}
    };
  }
   componentDidMount() {
     this.map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/dark-v10',
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom
    });
    this.map.scrollZoom.disable();
    this.map.doubleClickZoom.disable();
  }

  componentDidUpdate(){
    this.props.countryData.forEach(({deaths, active, recovered, country, countryInfo}) => {
      var el = document.createElement('div');
      el.className = 'marker';
      el.innerHTML+='<div class="intro-banner-vdo-play-btn pinkBg" target="_blank"><i class="glyphicon glyphicon-play whiteText" aria-hidden="true"></i><span class="ripple pinkBg"></span><span class="ripple pinkBg"></span><span class="ripple pinkBg"></span></div>';
      new mapboxgl.Marker(el)
        .setLngLat([countryInfo.long, countryInfo.lat])
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML('<div class="card text-white bg-dark mb-3" style="max-width: 18rem;"><div class="card-header">'+country+'</div><div class="card-body"><p class="card-text"><span class="dot dot-yellow"></span>&nbsp;&nbsp;<b>Active Cases</b> : '+active+'<br><span class="dot dot-danger"></span>&nbsp;&nbsp;<b>Deaths</b> : '+deaths+'<br><span class="dot dot-safe"></span>&nbsp;&nbsp;<b>Recovered</b> : '+recovered+'</p></div></div>'))
        .addTo(this.map);
    });
  }

  render(){
      return (
        <div ref={el => this.mapContainer = el} className="height-700"/>
      );
    }
}

export default Maps;
