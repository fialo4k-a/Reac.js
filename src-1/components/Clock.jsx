import React, { Component } from 'react';
import ClockComp from "./ClockComp";



export default class Clock extends Component {
  render() {
    return (
      <div>
        <ClockComp format ='24' timezone = '0.00'/>
        <ClockComp format ='24' timezone = '+3.00'/>
        <ClockComp format ='12' timezone = '-5.00'/>
      </div>
    );
  }
}
