import React from 'react';
import {Cards, Maps, Charts, Lists, CountryPicker, IntroductionPanel} from '../';

const Banner = (props) => {
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
  <div className="col-md-12 container"><h3 class="card-title" style={{textAlign: "center", fontSize:"24px"}}>India Stats</h3>
</div>
  <div class="col-lg-8" style={{marginTop:"2%"}}>
    <Charts timelineData = {props.timelineData}/>
  </div>
  <div className="col-lg-4" style={{marginTop:"2%"}}>
    <CountryPicker zoneStats={props.zoneStats} districtStats={props.districtStats}/>
  </div>
</div>
<Lists countryDataByCases={props.countryDataByCases}/>
<div className="row" style={{marginTop:"2%"}}>
<div className="col-md-12 container"><h3 class="card-title" style={{textAlign: "center", fontSize:"24px"}}>E - PASS REGISTER</h3>
<p  style={{textAlign: "center", color:"white", marginBottom:"2%"}}>for Movement During Lockdown (for Migrant Labourers, Student, Essential supplier, etc)</p>
    <IntroductionPanel/>
    </div>
</div>
</>
);
};


export default Banner;
