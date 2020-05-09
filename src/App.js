import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, Banner} from './components';

import {fetchWorldStats, fetchCountryStats, fetchTimelineStats, fetchZoneStats, fetchDistrictStats} from './api';

class App extends React.Component {

  state={
    cardData : {},
    countryData : {},
    countryDataByCases : {},
    timelineData : {},
    zoneStats : {},
    districtStats : {}
  };

  async componentDidMount(){
      const cardData = await fetchWorldStats();
      const countryData = await fetchCountryStats();
      const timelineData = await fetchTimelineStats();
      const zoneStats = await fetchZoneStats();
      const districtStats = await fetchDistrictStats();
      const countryDataByCases = countryData.sort((a, b) => {
        if (a.cases > b.cases) return -1;
        if (b.cases > a.cases) return 1;
        return 0;
      }).slice(0, 10);
      this.setState({cardData, countryData, countryDataByCases, timelineData, zoneStats, districtStats});
  }

    render(){
      const {cardData, countryData, countryDataByCases, timelineData, zoneStats, districtStats} = this.state;
      return(
        <div className="page-wrapper">
          <Navbar />
          <Banner cardData={cardData} countryData={countryData} countryDataByCases={countryDataByCases} timelineData={timelineData} zoneStats={zoneStats} districtStats={districtStats}/>
      </div>
      );
    }
}

export default App;
