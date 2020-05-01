import React from 'react';
import {Loader} from './../';
import {timeSince} from './../libs/DateTimeUtils';

const Cards = (props) => {
  console.log(props);

  if(props.cardData){
    if(!props.cardData.activeCases)
      return "Loading...";
  }else{
    return "Loading...";
  }

  return (
    <>
    <div className="row">
      <div className="single-widger-cart col-md-4" >
          <div className="card bg-primary"  style={{paddingLeft:'6%'}}>
              <div className="card-body">
                  <div className="float-right card-thumb-"><img src={"img/bg-img/1.png"} alt=""/></div>
                  <h5 className="font-16">Total Cases</h5>
                  <h3 className="mb-0">{props.cardData.totalCases}</h3>
                  <p className="font-12 marg">{props.cardData.totalCasesInAMil} per 1 Million</p>
              </div>
          </div>
      </div>
        <div className="single-widger-cart col-md-4">
            <div className="card bg-success">
                <div className="card-body">
                    <div className="float-right card-thumb-"><img src={"img/bg-img/4.png"} alt=""/></div>
                    <h5 className="font-16">Total Recovered</h5>
                    <h3 className="mb-0">{props.cardData.totalRecovered}</h3>
                      <p className="font-12 marg">Updated {timeSince(props.cardData.updatedAt)} ago</p>
                </div>
            </div>
        </div>
            <div className="single-widger-cart col-md-4">
                <div className="card bg-danger"  style={{paddingRight:'6%'}}>
                    <div className="card-body">
                        <div className="float-right card-thumb-"><img src={"img/bg-img/2.png"} alt=""/></div>
                        <h5 className="font-16">Total Deaths</h5>
                        <h3 className="mb-0">{props.cardData.totalDeaths}</h3>
                        <p className="font-12 marg">{props.cardData.totalDeathsInAMil} per 1 Million</p>
                    </div>
                </div>
            </div>
      </div>
      <div className="row">
          <div className="single-widger-cart mb-30 col-md-4">
              <div className="card bg-danger"  style={{paddingLeft:'6%'}}>
                  <div className="card-body">
                      <div className="float-right card-thumb-"><img src={"img/bg-img/3.png"} alt=""/></div>
                      <h5 className="font-16">Active Cases</h5>
                      <h3 className="mb-0">{props.cardData.activeCases}</h3>
                  </div>
              </div>
          </div>
          <div className="single-widger-cart mb-30 col-md-4">
              <div className="card bg-success">
                  <div className="card-body">
                      <div className="float-right card-thumb-"><img src={"img/bg-img/29.png"} alt=""/></div>
                      <h5 className="font-16">Critical Cases</h5>
                      <h3 className="mb-0">{props.cardData.seriousCritical}</h3>
                  </div>
              </div>
          </div>
          <div className="single-widger-cart mb-30 col-md-4" >
              <div className="card bg-primary" style={{paddingRight:'6%'}}>
                  <div className="card-body">
                      <div className="float-right card-thumb-"><img src={"img/bg-img/30.png"} alt=""/></div>
                      <h5 className="font-16">Recent Deaths</h5>
                      <h3 className="mb-0">{props.cardData.recentDeaths}</h3>
                  </div>
              </div>
          </div>

        </div>
    </>
  );
}

export default Cards;
