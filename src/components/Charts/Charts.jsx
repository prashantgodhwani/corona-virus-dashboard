import React, {Component} from 'react';
import {Line, Bar} from 'react-chartjs-2';

class Charts extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (this.props.timelineData.length > 0) ?  (
        <Line data={{
            labels : this.props.timelineData.map(({date}) => date),
            datasets : [
              {
                data : this.props.timelineData.map(({totalconfirmed}) => totalconfirmed),
                label : 'Infected',
                borderColor : '#3333ff',
                fill : true
              },
              {
                data : this.props.timelineData.map(({totaldeceased}) => totaldeceased),
                label : 'Deceased',
                borderColor : 'red',
                backgroundColor : 'rgba(255,0,0, 0.5)',
                fill : true
              },
              {
                data : this.props.timelineData.map(({totalrecovered}) => totalrecovered),
                label : 'Recovered',
                borderColor : 'green',
                backgroundColor : 'rgba(58, 128, 29, 0.3803921568627451)',
                fill : true
              }
            ]
          }} />
      ) : "LOADING..";
  }
}



export default Charts;
