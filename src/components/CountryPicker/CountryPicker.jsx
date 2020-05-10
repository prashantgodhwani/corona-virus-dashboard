import React, {Component} from 'react';
import _ from 'underscore';
import {commafy} from './../libs/utils';

class CountryPicker extends Component{

constructor(props){
super(props);
this.state = {
query: '',
results: [],
zoneData : {}
}
}

debounceAPI = (func, delay) => {
var timerId;
// Cancels the setTimeout method execution
clearTimeout(timerId)
// Executes the func after delay time.
timerId = setTimeout(func, 3000)
}

handleInputChange = async() => {
if(_.isEmpty(this.search.value)){
document.getElementById('search-results').style.display="none";
document.getElementById('banner').style.display="block";
document.getElementById('zone-data').style.display="none";
}else{
this.setState({
results : this.fetchDistrict(this.search.value),
zoneData : {}
});
document.getElementById('search-results').style.display="block";
document.getElementById('banner').style.display="none";
document.getElementById('zone-data').style.display="none";
}
}

fetchDistrict = (city) => {
let districtMap = _.map(this.props.districtStats, function(obj){ return obj.districtData; });
districtMap = _.reduceRight(districtMap, function(a, b){ return {...a, ...b}});
districtMap = Object.keys(districtMap);
return (districtMap.filter((e) => e.toLowerCase().includes(city.toLowerCase())).map((v) => ({city : v})));
}

fetchDistrictData = (city) => {
console.log("hello" + city);
let zoneStats = Object.keys(this.props.zoneStats);
let districtMap = _.map(this.props.districtStats, function(obj){ return obj.districtData; });
districtMap = _.reduceRight(districtMap, function(a, b){ return {...a, ...b}});
this.setState({zoneData :{city , ...districtMap[city], ...this.props.zoneStats[_.find(zoneStats, (e) =>
(city.toLowerCase().includes(e.toLowerCase())))]}});
document.getElementById('search-results').style.display="none";
document.getElementById('zone-data').style.display="block";
}

renderSearchResults = ()   => {
const {results} = this.state;
if(Object.keys(results).length && results.length){
return (
<div className="results-container">
  {results.map((result) => {
  return (
  <div className="card text-white bg-dark mb-2 result-item" style={{width :"100%"}} onClick={()=>
    this.fetchDistrictData(result.city)}>
    <div className="card-body">
      <p className="card-text"><b>{result.city}</b>, India</p>
    </div>
  </div>
  );
  })}
</div>
);
}
};


renderZoneData = () => {
const {zoneData} = this.state;
if(zoneData){
let customClass=(zoneData.value == 1) ? "bg-danger" : (zoneData.value == 2) ? "bg-warning" :(zoneData.value == 3) ?
"bg-success" : "bg-dark";
return (
<div class="card" style={{paddingLeft: 0}}>
  <div class={"card-header text-white " + customClass}>
  {zoneData.city}
  </div>
  <div class="card-body">
  <h5 class="card-title text-center confirmed-count">{commafy(zoneData.confirmed)}</h5>
    <p class="card-text text-center">Total Confirmed</p>
    <hr className={customClass}></hr>
    <p class="card-text">
      <div class="value-item">
        <div class="value-row"><span class="label">
            Recovered
          </span> <span class="value pull-right">
            {commafy(zoneData.recovered)}
          </span></div>
        <div class="bar">
          <div class="value-bar" style={{width: ((zoneData.recovered / zoneData.confirmed) * 100)+"%", backgroundColor: "rgb(147, 199, 1)"}} />
        </div>
      </div>
      <div class="value-item">
        <div class="value-row"><span class="label">
            Active
          </span> <span class="value pull-right">
            {commafy(zoneData.active)}
          </span></div>
        <div class="bar">
          <div class="value-bar" style={{width: ((zoneData.active / zoneData.confirmed) * 100)+"%", backgroundColor: "rgb(255, 192, 0)"}} />
        </div>
      </div>


      <div class="value-item">
        <div class="value-row"><span class="label">
            Deaths
          </span> <span class="value pull-right">
            {commafy(zoneData.deceased)}
          </span></div>
        <div class="bar">
          <div class="value-bar" style={{width: ((zoneData.deceased / zoneData.confirmed) * 100)+"%", backgroundColor: "rgb(255, 79, 79)"}} />
        </div>
      </div>



    </p>
  </div>
</div>
);
}
};

render(){
return (
<div class="card box-margin">
  <div class="card-body">
    <div class="country-map">
      <div class="box-header">
        <h5 class="card-title">India Stats</h5>
      </div>
      <div class="p-1 bg-dark rounded rounded-pill shadow-sm mb-4">
        <div class="input-group">
          <div class="input-group-prepend">
            <button id="button-addon2" type="submit" class="btn btn-link text-success"><i
                class="fa fa-search"></i></button>
          </div>
          <input type="search" placeholder="Type city / district to search.." ref={input=> this.search = input}
          aria-describedby="button-addon2" class="color-white col-md-10 form-control border-0 bg-dark"
          onChange={_.debounce(this.handleInputChange, 300)} />
        </div>
      </div>
      <div id="search-results">
        {this.renderSearchResults()}
      </div>
      <div id="banner">
        <img src="https://cafindia.org/images/covid/landingpagebanner.jpg" />
      </div>
      <div id="zone-data" style={{display:"none"}}>
        {this.renderZoneData()}
      </div>
    </div>
  </div>
</div>
);
}
}

export default CountryPicker;