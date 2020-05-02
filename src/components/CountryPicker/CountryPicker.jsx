import React from 'react';

const CountryPicker = () =>{
  return (
    <div class="card box-margin">
                          <div class="card-body">
                              <div class="country-map">
                                  <div class="box-header">
                                      <h5 class="card-title">Country Wise Stats</h5>
                                  </div>
                                  <div class="dropdown show">
    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Dropdown link
    </a>

    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
    </div>
  </div>
                              </div>
                          </div>
                      </div>
  );
}

export default CountryPicker;
