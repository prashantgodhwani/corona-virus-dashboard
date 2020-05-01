import React from 'react';
import {Cards, Maps, Charts, Lists} from '../';

const Banner = (props) => {

return(
<>
<div class="row">
  <div class="col-lg-12">
    <Maps countryData={props.countryData}/>
  </div>
</div>

<div className="row">
  <div className="col-md-12">
    <Cards cardData={props.cardData} />
  </div>
</div>

<Lists countryDataByCases={props.countryDataByCases}/>
<Charts />
</>
);
};


export default Banner;
