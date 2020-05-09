import React, {Component} from 'react';
import {commafy} from './../libs/utils';

class Lists extends Component {

  constructor(props){
    super(props);
  }

  generateCountryList(countryList){
    return countryList.map((country) => {
      return (
        <tr>
            <td>
              <img className="chat-img mr-2" src={"https://www.countryflags.io/"+country.countryInfo.iso2+"/flat/64.png"} alt=""/><span>{country.country}</span>
            </td>
            <td>
              {commafy(country.cases)}
            </td>
            <td>
              {commafy(country.todayCases)}
            </td>
            <td>
              {commafy(country.recovered)}
            </td>
            <td>
              {commafy(country.todayDeaths)}
            </td>

        </tr>
          )
    });
  }

  render(){
      return (
        <div style={{marginTop:"2%"}}>
          <div className="row">
          <div className="col-lg-8 box-margin">
            <div className="card code-table">
              <div className="card-body pb-0" style={{paddingLeft:"0"}}>
                <div className="card-header border-none bg-transparent d-flex align-items-center justify-content-between p-0 mb-30">
                  <div className="widgets-card-title">
                    <h5 className="card-title mb-0">Most Affected Countries</h5>
                  </div>
                </div>

                <div className="table-responsive">
                  <table className="table table-sm table-hover table-nowrap table-dark">
                    <thead>
                      <tr>
                        <th>Country</th>
                        <th>Confirmed</th>
                        <th>Today</th>
                        <th>Recovered</th>
                        <th>Deaths today</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(this.props.countryDataByCases.length > 0) ? this.generateCountryList(this.props.countryDataByCases) : "Loading.."}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 box-margin height-card">
              <div className="col-md-12 row">
                <div class="col-12"><h4 class="card-title mb-1">COVID-19 Coronavirus - Symptoms</h4></div>
                  <div className="col-md-6">
                    <div className="virus-symptoms-card mb-20">
                        <div className="icon-thumb"> <img src="img/icon-img/8.png" alt=""/></div>
                        <div className="single-symptoms-content text-center">
                            <h5><a href="#">Coughing And Sneezing</a></h5>
                            <p className="text mb-0">Praesentium quis, nisi rerum accusantium.</p>
                        </div>
                    </div>
                  </div>

                    <div className="col-md-6">
                        <div className="virus-symptoms-card mb-20">
                            <div className="icon-thumb"> <img src="img/icon-img/11.png" alt=""/></div>
                            <div className="single-symptoms-content text-center">
                                <h5><a href="#">Strong Headache</a></h5>
                                <p className="text mb-0">Praesentium quis, nisi rerum accusantium.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="virus-symptoms-card mb-50">
                            <div className="icon-thumb"> <img src="img/icon-img/12.png" alt=""/></div>
                            <div className="single-symptoms-content text-center">
                                <h5><a href="#">Shortness Of Breath</a></h5>
                                <p className="text mb-0">Praesentium quis, nisi rerum accusantium.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="virus-symptoms-card mb-50">
                            <div className="icon-thumb"> <img src="img/icon-img/9.png" alt=""/></div>
                            <div className="single-symptoms-content text-center">
                                <h5><a href="#">Hot Fever</a></h5>
                                <p className="text mb-0">Praesentium quis, nisi rerum accusantium quibusdam esse.</p>
                            </div>
                        </div>
                    </div>
              </div>
          </div>
        </div>
        </div>
      );
  }
}

export default Lists;
