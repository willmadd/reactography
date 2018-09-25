import React, { Component } from "react";
import "./App.css";
import Events from "./components/Events";
import APIKEY from "./config/config";
import axios from 'axios';
import Calendar from './components/Calendar'
import Mapper from './components/Mapper'
import moment from 'moment';


class App extends Component {

state ={
  events:[],
  cityname:'',
  dates:[new Date(), new Date()]
}
  
  render() {
    return (
      <div className="App">
        <Calendar setDate={this.setDate} currentDate = {this.state.dates} />
        <Mapper city={this.selectcity} />

        <Events events = {this.state.events}/>
      </div>
    );
  }
  
  componentDidUpdate(){
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?city=${this.state.cityname}&countryCode=GB&apikey=${APIKEY}&startDateTime=${this.state.dates[0]}Z&endDateTime=${this.state.dates[1]}Z`)
    .then(({data}) => {
      this.setState({
        events: data._embedded.events
      })
    });
  }

  selectcity = (event) => {
    this.setState({
      cityname : event.layer.feature.properties.Name
    })
  }

setDate = (dates) => {
  console.log(dates[0]+'<1<<<<<<<<<<<<<<<<<<')
  console.log(moment(dates[0]).format("YYYY-MM-DDTHH:mm:SS")+'<2<<<<<<<<<<<<<<<<<<')
  this.setState({
    dates: [moment(dates[0]).format("YYYY-MM-DDTHH:mm:SS"),moment(dates[1]).format("YYYY-MM-DDTHH:mm:SS")]
  })
}

}

export default App;
