import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, Banner} from './components';

import {fetchWorldStats, fetchCountryStats} from './api';

class App extends React.Component {

  state={
    cardData : {},
    countryData : {}
  };

  async componentDidMount(){
      const cardData = await fetchWorldStats();
      const countryData = await fetchCountryStats();
      this.setState({cardData, countryData});
  }

    render(){
      const {cardData, countryData} = this.state;
      return(
        <div className="page-wrapper">
          <Navbar />
          <Banner cardData={cardData} countryData={countryData}/>

      </div>
      );
    }
}

export default App;
