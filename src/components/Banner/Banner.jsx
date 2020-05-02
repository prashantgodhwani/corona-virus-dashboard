import React from 'react';
import {Cards, Maps, Charts, Lists, CountryPicker, IntroductionPanel} from '../';

const Banner = (props) => {
console.log(props);
return(
<>
<div class="row">
  <div class="col-lg-12">
    <Maps countryData={props.countryData}/>
  </div>
</div>

<div className="row">
    <Cards cardData={props.cardData} />
</div>
<div className="row" style={{marginTop:"2%"}}>
  <div class="col-lg-8">
    <Charts timelineData = {props.timelineData}/>
  </div>
  <div className="col-lg-4">
    <CountryPicker />
  </div>
</div>
<Lists countryDataByCases={props.countryDataByCases}/>
</>
);
};


export default Banner;
