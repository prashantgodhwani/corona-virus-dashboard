import React, {Component} from 'react';

class Lists extends Component {

  constructor(props){
    super(props);
  }

  generateCountryList(countryList){
    console.log(countryList);
    return countryList.map((country) => {
      return (
        <tr>
            <td>
              <img className="chat-img mr-2" src={"https://www.countryflags.io/"+country.countryInfo.iso2+"/flat/64.png"} alt=""/><span>{country.country}</span>
            </td>
            <td>
              {country.cases}
            </td>
            <td>
              {country.todayCases}
            </td>
            <td>
              {country.recovered}
            </td>
            <td>
              {country.todayDeaths}
            </td>
            <td>
            {country.deaths}
            </td>
        </tr>
          )
    });
  }

  render(){
      return (
        <div className="container-fluid">
          <div className="row">
          <div className="col-lg-8 box-margin">
            <div className="card code-table">
              <div className="card-body pb-0">
                <div className="card-header border-none bg-transparent d-flex align-items-center justify-content-between p-0 mb-30">
                  <div className="widgets-card-title">
                    <h5 className="card-title mb-0">Most Affected Countries</h5>
                  </div>
                </div>

                <div className="table-responsive">
                  <table className="table table-hover table-nowrap table-dark">
                    <thead>
                      <tr>
                        <th>Country</th>
                        <th>Confirmed</th>
                        <th>Today Cases</th>
                        <th>Recovered</th>
                        <th>Today Deaths</th>
                        <th>Deaths</th>
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
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="single-news-card mb-30">
                      <h5>Concerns over reuse of protective medical kit</h5>
                      <div className="single-card-content d-sm-flex align-items-center">
                        <div className="image-area mb-20-xs">
                          <img src="img/bg-img/15.jpg" alt=""/>
                        </div>
                        <div className="content-text">
                          <p>One union official says a change in guidance could see front-line medics withdraw from duties. Consectetur adipisicing elit. Cumque perspiciatis soluta minima.</p>
                          <a href="news-details.html" target="_blank">Read more</a>
                        </div>
                      </div>
                    </div>
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
