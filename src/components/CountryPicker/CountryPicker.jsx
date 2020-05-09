import React, {Component} from 'react';
import {fetchDistricts} from './../../api';
import _ from 'underscore';

class CountryPicker extends Component{

constructor(props){
  super(props);
  this.state = {
    query: '',
    results: []
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
  }else{
    this.setState({
      results : await fetchDistricts(this.search.value)
    });
    document.getElementById('search-results').style.display="block";
    document.getElementById('banner').style.display="none";
  }
}

fetchDistrictsData = (city) => {
  console.log("hello" + city);
  console.log(this.props.districtStats);
}


renderSearchResults = () => {
  const {results} = this.state;
  if(Object.keys(results).length && results.length){
    return (
      <div className="results-container">
        {results.map((result) => {
          return (
              <div className="card text-white bg-dark mb-2 result-item" style={{width :"100%"}} onClick={() => this.fetchDistrictsData(result.City)}>
                <div className="card-body">
                    <p className="card-text"><b>{result.City}</b>,{result.State}, {result.District}, India</p>
                </div>
              </div>
          );
        })}
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
                <button id="button-addon2" type="submit" class="btn btn-link text-success"><i class="fa fa-search"></i></button>
              </div>
              <input type="search" placeholder="Type city / district to search.." ref={input => this.search = input} aria-describedby="button-addon2" class="color-white col-md-11 form-control border-0 bg-dark" 
              onChange={_.debounce(this.handleInputChange, 300)} />
            </div>
        </div>
        <div id="search-results">
          {this.renderSearchResults()}
        </div>
        <div id="banner">
          <img src="https://cafindia.org/images/covid/landingpagebanner.jpg" />
        </div>
    </div>
  </div>
</div>
);
}
}

export default CountryPicker;